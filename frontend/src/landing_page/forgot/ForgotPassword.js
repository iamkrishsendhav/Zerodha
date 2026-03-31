import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleForgot = async (e) => {
        e.preventDefault();
        if (!email.trim()) return alert("Please enter your email");

        setLoading(true);
        try {
            const res = await axios.post("http://localhost:3002/forgot-password", { email });
            if (res.data.success) {
                // ✅ OTP Page ko batane ke liye ki ye Reset Flow hai
                localStorage.setItem("otpEmail", email);
                localStorage.setItem("isResetFlow", "true"); 
                
                alert("OTP sent to your email!");
                navigate("/otp"); 
            } else {
                alert(res.data.message || "Email not found");
            }
        } catch (err) {
            alert(err.response?.data?.message || "Error sending reset OTP");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style>
                {`
                .forgot-container { 
                    min-height: 100vh; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    background: #f4f7fe; /* Same as OTP background */
                    font-family: sans-serif; 
                }
                .forgot-card { 
                    background: white; 
                    padding: 40px; 
                    border-radius: 20px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
                    text-align: center; 
                    width: 100%; 
                    max-width: 400px; 
                }
                .forgot-title { 
                    font-size: 26px; 
                    font-weight: bold; 
                    color: #333; 
                    margin-bottom: 10px; 
                }
                .forgot-sub { 
                    font-size: 14px; 
                    color: #666; 
                    margin-bottom: 25px; 
                    line-height: 1.5;
                }
                .input-field { 
                    width: 100%; 
                    padding: 14px; 
                    border-radius: 12px; 
                    border: 1.5px solid #ddd; 
                    margin-bottom: 20px; 
                    font-size: 15px; 
                    transition: 0.3s; 
                    box-sizing: border-box;
                    background: #fafafa;
                }
                .input-field:focus { 
                    outline: none; 
                    border-color: #387ed1; 
                    background: #fff;
                    box-shadow: 0 0 8px rgba(56,126,209,0.15); 
                }
                .forgot-btn { 
                    width: 100%; 
                    padding: 14px; 
                    border: none; 
                    border-radius: 12px; 
                    background: #387ed1; 
                    color: white; 
                    font-size: 16px; 
                    font-weight: 600; 
                    cursor: pointer; 
                    transition: 0.3s; 
                }
                .forgot-btn:hover { 
                    background: #2a69b5; 
                    box-shadow: 0 5px 15px rgba(56,126,209,0.3); 
                    transform: translateY(-1px);
                }
                .forgot-btn:disabled { 
                    background: #cbd5e0; 
                    cursor: not-allowed; 
                    transform: none;
                }
                .back-to-login {
                    margin-top: 20px;
                    font-size: 14px;
                }
                .back-to-login span {
                    color: #387ed1;
                    cursor: pointer;
                    font-weight: 600;
                    text-decoration: none;
                }
                `}
            </style>

            <div className="forgot-container">
                <div className="forgot-card">
                    <div className="forgot-title">Reset Password 🔑</div>
                    <p className="forgot-sub">
                        Enter your registered email address and we'll send you an OTP to reset your password.
                    </p>

                    <form onSubmit={handleForgot}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="forgot-btn" disabled={loading}>
                            {loading ? "Sending OTP..." : "Send Reset OTP"}
                        </button>
                    </form>

                    <div className="back-to-login">
                        Remembered? <span onClick={() => navigate("/login")}>Back to Login</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;