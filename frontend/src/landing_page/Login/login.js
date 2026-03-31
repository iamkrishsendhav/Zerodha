import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("https://zerodha-backend-dz81.onrender.com/login", {
                email,
                password,
            });

            if (res.data.token && res.data.user) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));

                // Redirect to Dashboard (Port 3001)
                window.location.href = `https://zerodha-dashboard-beryl.vercel.app/?token=${res.data.token}`;
            } else {
                alert(res.data.message || "Invalid credentials");
            }
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style>
                {`
                .login-page-wrapper {
                  min-height: 100vh;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: linear-gradient(135deg, #eef3ff, #ffffff);
                  font-family: 'Inter', sans-serif;
                }

                .login-card {
                  width: 100%;
                  max-width: 420px;
                  padding: 40px;
                  border-radius: 20px;
                  background: #ffffff;
                  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
                  text-align: center;
                }

                .login-title {
                  font-size: 28px;
                  font-weight: 700;
                  color: #2c3e50;
                  margin-bottom: 30px;
                }

                .input-field {
                  width: 100%;
                  padding: 14px;
                  border-radius: 12px;
                  border: 1.5px solid #e0e6ed;
                  margin-bottom: 15px;
                  font-size: 15px;
                  transition: 0.3s;
                  box-sizing: border-box;
                  background: #fcfdfe;
                }

                .input-field:focus {
                  outline: none;
                  border-color: #387ed1;
                  background: #fff;
                  box-shadow: 0 0 10px rgba(56,126,209,0.1);
                }

                .forgot-link {
                  text-align: right;
                  margin-top: -8px;
                  margin-bottom: 25px;
                  font-size: 13px;
                }

                .forgot-link a {
                  color: #7f8c8d;
                  text-decoration: none;
                  transition: 0.2s;
                }

                .forgot-link a:hover {
                  color: #387ed1;
                }

                .login-btn {
                  width: 100%;
                  padding: 14px;
                  border: none;
                  border-radius: 12px;
                  background: linear-gradient(135deg, #387ed1, #5aa9ff);
                  color: white;
                  font-size: 16px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: 0.3s;
                }

                .login-btn:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 8px 20px rgba(56,126,209,0.3);
                }

                .login-btn:disabled {
                  background: #cbd5e0;
                  cursor: not-allowed;
                  transform: none;
                }

                .footer-text {
                  margin-top: 25px;
                  font-size: 14px;
                  color: #7f8c8d;
                }

                .footer-text a {
                  color: #387ed1;
                  text-decoration: none;
                  font-weight: 600;
                }
                `}
            </style>

            <div className="login-page-wrapper">
                <div className="login-card">
                    <h2 className="login-title">Welcome back 👋</h2>

                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="forgot-link">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="login-btn" disabled={loading}>
                            {loading ? "Verifying..." : "Login"}
                        </button>
                    </form>

                    <div className="footer-text">
                        Don't have an account? <Link to="/signup">Signup</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;