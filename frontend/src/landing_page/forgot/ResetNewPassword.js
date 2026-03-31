import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetNewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const email = localStorage.getItem("otpEmail");

    const handleReset = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) return alert("Passwords do not match!");

        setLoading(true);
        try {
            // Backend par naya password bhej rahe hain
            const res = await axios.post("https://zerodha-backend-dz81.onrender.com/reset-password", {
                email,
                newPassword: password
            });

            if (res.data.success) {
                alert("Password changed successfully! Please login.");
                localStorage.removeItem("otpEmail");
                navigate("/login");
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            alert("Error resetting password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgot-container" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f4f7fe' }}>
            <div className="forgot-card" style={{ background: 'white', padding: '40px', borderRadius: '20px', textAlign: 'center', width: '100%', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h2 style={{ marginBottom: '10px' }}>New Password 🔒</h2>
                <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>Enter your new secure password below.</p>
                
                <form onSubmit={handleReset}>
                    <input
                        type="password"
                        placeholder="New Password"
                        className="input-field"
                        style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '1px solid #ddd' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="input-field"
                        style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #ddd' }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="forgot-btn" disabled={loading} style={{ width: '100%', padding: '14px', background: '#387ed1', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                        {loading ? "Updating..." : "Update Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetNewPassword;