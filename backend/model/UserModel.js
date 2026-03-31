const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    // 🔥 Ye do fields missing thi, inke bina OTP save nahi hoga
    otp: { 
        type: String 
    },
    otpExpiry: { 
        type: Date 
    },
    isVerified: { 
        type: Boolean, 
        default: false 
    }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;