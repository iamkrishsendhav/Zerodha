import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (loading) return;

        // Basic validation
        if (!name.trim() || !email.trim() || !password.trim()) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post("https://zerodha-backend-dz81.onrender.com/signup", {
                name,
                email,
                password,
            });

            console.log("Signup Response:", res.data);

            if (res.data.success || res.data.email) {
                localStorage.setItem("otpEmail", email);
                navigate("/otp"); 
            } else {
                alert(res.data.message || "Signup failed");
            }

        } catch (err) {
            const errorMsg = err.response?.data?.message || "Something went wrong. Try again.";
            alert(errorMsg);
            console.error("Signup Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style>
                {`
                .signup-container {
                  min-height: 100vh;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: linear-gradient(135deg, #eef3ff, #ffffff);
                  font-family: sans-serif;
                }
                .signup-card {
                  width: 100%;
                  max-width: 420px;
                  padding: 30px;
                  border-radius: 18px;
                  background: #fff;
                  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
                }
                .signup-title {
                  text-align: center;
                  font-size: 26px;
                  font-weight: 600;
                  margin-bottom: 25px;
                }
                .input-field {
                  width: 100%;
                  padding: 12px;
                  border-radius: 10px;
                  border: 1px solid #ddd;
                  margin-bottom: 15px;
                  font-size: 14px;
                  transition: 0.2s;
                  box-sizing: border-box; /* Padding fix */
                }
                .input-field:focus {
                  outline: none;
                  border-color: #387ed1;
                  box-shadow: 0 0 0 2px rgba(56,126,209,0.15);
                }
                .signup-btn {
                  width: 100%;
                  padding: 12px;
                  border: none;
                  border-radius: 10px;
                  background: linear-gradient(135deg, #387ed1, #5aa9ff);
                  color: white;
                  font-size: 15px;
                  font-weight: 500;
                  cursor: pointer;
                  transition: 0.25s;
                }
                .signup-btn:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 10px 25px rgba(56,126,209,0.3);
                }
                .signup-btn:disabled {
                  background: #ccc;
                  cursor: not-allowed;
                  transform: none;
                }
                .footer-text {
                  text-align: center;
                  margin-top: 15px;
                  font-size: 13px;
                  color: #777;
                }
                .footer-text a {
                  color: #387ed1;
                  text-decoration: none;
                  font-weight: 500;
                }
                .footer-text a:hover {
                  text-decoration: underline;
                }
                `}
            </style>

            <div className="signup-container">
                <div className="signup-card">
                    <div className="signup-title">Create your account 🚀</div>

                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input-field"
                            value={name} // Controlled input
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input-field"
                            value={email} // Controlled input
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                            value={password} // Controlled input
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="signup-btn" disabled={loading}>
                            {loading ? "Sending OTP..." : "Create Account"}
                        </button>
                    </form>

                    <div className="footer-text">
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;