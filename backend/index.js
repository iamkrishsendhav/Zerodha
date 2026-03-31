require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const UserModel = require("./model/UserModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const auth = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// ✅ OTP ko hamesha String mein generate karein taaki comparison mein error na aaye
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// ================= SIGNUP =================
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "All fields required" });
        }

        let user = await UserModel.findOne({ email });

        if (user && user.isVerified) {
            return res.json({
                success: false,
                message: "Email already registered, please login"
            });
        }

        if (user && !user.isVerified) {
            // Agar OTP pehle se hai aur valid hai to purana hi bhej do
            if (user.otp && user.otpExpiry > Date.now()) {
                return res.json({
                    success: true,
                    message: "OTP already sent, check email",
                    email
                });
            }

            const otp = generateOTP();
            user.otp = otp;
            user.otpExpiry = Date.now() + 5 * 60 * 1000;

            await user.save();

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: "OTP Verification",
                text: `Your OTP is ${otp}`,
            });

            return res.json({
                success: true,
                message: "OTP sent",
                email
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = generateOTP();
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            otp,
            otpExpiry: Date.now() + 5 * 60 * 1000,
            isVerified: false,
        });

        await newUser.save();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "OTP Verification",
            text: `Your OTP is ${otp}`,
        });

        res.json({
            success: true,
            message: "OTP sent",
            email
        });

    } catch (err) {
        console.log("Signup Error:", err);
        res.status(500).json({ success: false, message: "Signup error" });
    }
});


// ================= VERIFY OTP (FIXED LOGIC) =================
app.post("/verify-otp", async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!otp || otp.length !== 6) {
            return res.json({ message: "Enter valid OTP" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) return res.json({ message: "User not found" });

        // Debugging ke liye (check in terminal)
        console.log(`Verifying for ${email}: DB_OTP(${user.otp}) VS Sent_OTP(${otp})`);

        // 1. Check agar OTP null hai (already used)
        if (!user.otp) {
            return res.json({ message: "OTP already used or invalid" });
        }

        // 2. Check Expiry
        if (user.otpExpiry < Date.now()) {
            return res.json({ message: "OTP expired" });
        }

        // 3. Strict Comparison (Dono ko String bana kar check karein)
        if (String(user.otp) !== String(otp)) {
            return res.json({ message: "Invalid OTP" });
        }

        // 4. Success - Update user
        user.isVerified = true;
        user.otp = null; // Taaki dobara use na ho sake
        user.otpExpiry = null;

        await user.save();

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            message: "Signup successful",
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        });

    } catch (err) {
        console.log("OTP Error:", err);
        res.status(500).json({ message: "OTP verification error" });
    }
});

// ================= RESEND OTP =================
app.post("/resend-otp", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) return res.json({ message: "User not found" });

        const otp = generateOTP();
        user.otp = otp;
        user.otpExpiry = Date.now() + 5 * 60 * 1000;

        await user.save();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Resend OTP",
            text: `Your new OTP is ${otp}`,
        });

        res.json({ message: "OTP resent successfully" });

    } catch (err) {
        console.log("Resend OTP Error:", err);
        res.status(500).json({ message: "Resend OTP error" });
    }
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ message: "All fields required" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) return res.json({ message: "User not found" });

        if (!user.isVerified) {
            return res.json({ message: "Please verify your email first" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        });

    } catch (err) {
        console.log("Login Error:", err);
        res.status(500).json({ message: "Login error" });
    }
});

// ✅ FORGOT PASSWORD ROUTE
app.post("/forgot-password", async (req, res) => {
    try {
        const { email } = req.body;

        // 1. Check karein ki user exist karta hai ya nahi
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found with this email" });
        }

        // 2. Naya OTP generate karein
        const otp = crypto.randomInt(100000, 999999).toString();

        // 3. DB mein OTP aur Expiry save karein (10 mins ke liye)
        user.otp = otp;
        user.otpExpiry = Date.now() + 10 * 60 * 1000;
        await user.save();

        // 4. Email bhejein (Aapka existing transporter use karein)
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Password Reset OTP",
            html: `<h3>Your OTP for password reset is: <b>${otp}</b></h3>
                   <p>This OTP is valid for 10 minutes.</p>`,
        });

        res.json({ success: true, message: "OTP sent successfully" });

    } catch (err) {
        console.error("Forgot Pass Error:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ✅ RESET PASSWORD ROUTE (Verify & Save New Password)
app.post("/reset-password", async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        // 1. User ko dhoondo
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // 2. Naya password hash karein (bcrypt use karein)
        // Note: bcrypt aapke backend mein pehle se hoga login/signup ke liye
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        // 3. Password update karein aur OTP saaf kar dein
        user.password = hashedPassword;
        user.otp = null;        // OTP use ho gaya toh delete kar do
        user.otpExpiry = null;  // Expiry bhi saaf kar do
        
        await user.save();

        res.json({ success: true, message: "Password updated successfully!" });

    } catch (err) {
        console.error("Reset Pass Error:", err);
        res.status(500).json({ success: false, message: "Server error while resetting password" });
    }
});


app.get("/dashboard", auth, (req, res) => {
    res.json({
        message: "Welcome to dashboard",
        user: req.user,
    });
});

app.get("/addHoldings", async (req, res) => {
    let tempHoldings = [
        {
            name: "BHARTIARTL",
            qty: 2,
            avg: 538.05,
            price: 541.15,
            net: "+0.58%",
            day: "+2.99%",
        },
        {
            name: "HDFCBANK",
            qty: 2,
            avg: 1383.4,
            price: 1522.35,
            net: "+10.04%",
            day: "+0.11%",
        },
        {
            name: "HINDUNILVR",
            qty: 1,
            avg: 2335.85,
            price: 2417.4,
            net: "+3.49%",
            day: "+0.21%",
        },
        {
            name: "INFY",
            qty: 1,
            avg: 1350.5,
            price: 1555.45,
            net: "+15.18%",
            day: "-1.60%",
            isLoss: true,
        },
        {
            name: "ITC",
            qty: 5,
            avg: 202.0,
            price: 207.9,
            net: "+2.92%",
            day: "+0.80%",
        },
        {
            name: "KPITTECH",
            qty: 5,
            avg: 250.3,
            price: 266.45,
            net: "+6.45%",
            day: "+3.54%",
        },
        {
            name: "M&M",
            qty: 2,
            avg: 809.9,
            price: 779.8,
            net: "-3.72%",
            day: "-0.01%",
            isLoss: true,
        },
        {
            name: "RELIANCE",
            qty: 1,
            avg: 2193.7,
            price: 2112.4,
            net: "-3.71%",
            day: "+1.44%",
        },
        {
            name: "SBIN",
            qty: 4,
            avg: 324.35,
            price: 430.2,
            net: "+32.63%",
            day: "-0.34%",
            isLoss: true,
        },
        {
            name: "SGBMAY29",
            qty: 2,
            avg: 4727.0,
            price: 4719.0,
            net: "-0.17%",
            day: "+0.15%",
        },
        {
            name: "TATAPOWER",
            qty: 5,
            avg: 104.2,
            price: 124.15,
            net: "+19.15%",
            day: "-0.24%",
            isLoss: true,
        },
        {
            name: "TCS",
            qty: 1,
            avg: 3041.7,
            price: 3194.8,
            net: "+5.03%",
            day: "-0.25%",
            isLoss: true,
        },
        {
            name: "WIPRO",
            qty: 4,
            avg: 489.3,
            price: 577.75,
            net: "+18.08%",
            day: "+0.32%",
        },
    ];

    tempHoldings.forEach((item) => {
        let newHolding = new HoldingsModel({
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isLoss: item.isLoss || false,
        });

        // newHolding.save();
        newHolding.save();

    });
    res.send("Done!");
});

app.get("/addPositions", async (req, res) => {
    let tempPositions = [
        {
            product: "CNC",
            name: "EVEREADY",
            qty: 2,
            avg: 316.27,
            price: 312.35,
            net: "+0.58%",
            day: "-1.24%",
            isLoss: true,
        },
        {
            product: "CNC",
            name: "JUBLFOOD",
            qty: 1,
            avg: 3124.75,
            price: 3082.65,
            net: "+10.04%",
            day: "-1.35%",
            isLoss: true,
        },
    ];

    tempPositions.forEach((item) => {
        let newPosition = new PositionsModel({
            product: item.product,
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isLoss: item.isLoss,
        });

        newPosition.save();
    });
    res.send("Done!");
});

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();

    res.send("Order saved!");
});

app.listen(PORT, () => {
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB started!");
});
