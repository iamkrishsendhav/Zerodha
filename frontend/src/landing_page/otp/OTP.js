import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const OTP = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();
    const [timer, setTimer] = useState(60);
    const [loading, setLoading] = useState(false);
    const inputs = useRef([]);

    const email = localStorage.getItem("otpEmail");

    const handlePaste = (e) => {
        const data = e.clipboardData.getData("text").slice(0, 6); 
        if (!/^\d+$/.test(data)) return; 

        const newOtp = [...otp];
        data.split("").forEach((char, index) => {
            if (index < 6) newOtp[index] = char;
        });
        setOtp(newOtp);

    
        const focusIndex = data.length < 6 ? data.length : 5;
        inputs.current[focusIndex].focus();
    };

    
    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputs.current[index + 1].focus();
        }
    };

 
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (!otp[index] && index > 0) {
                inputs.current[index - 1].focus();
            }
        }
    };


    const verifyOtp = useCallback(async () => {
        const finalOtp = otp.join("");

        if (finalOtp.length !== 6 || loading) return;

        setLoading(true);
        try {
            const res = await axios.post("https://zerodha-backend-dz81.onrender.com/verify-otp", {
                email,
                otp: finalOtp,
            });

            if (res.data.token) {
            
                const isForgotPasswordFlow = localStorage.getItem("isResetFlow");

                if (isForgotPasswordFlow === "true") {
                
                    localStorage.removeItem("isResetFlow");
                    localStorage.setItem("resetToken", res.data.token); 
                    navigate("/reset-new-password"); 
                } else {
                    
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    localStorage.removeItem("otpEmail");
                    window.location.href = "https://zerodha-dashboard-beryl.vercel.app/";
                }
            } else {
                alert(res.data.message);
                setOtp(["", "", "", "", "", ""]);
                inputs.current[0].focus();
            }
        } catch (err) {
            alert("Verification failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [otp, email, loading, navigate]); 


//     useEffect(() => {
//     const finalOtp = otp.join("");
//     if (finalOtp.length === 6 && !loading) {
//         verifyOtp();
//     }
// }, [otp,loading,verifyOtp]); 

    const resendOtp = async () => {
        if (timer > 0) return;
        try {
            await axios.post("https://zerodha-backend-dz81.onrender.com/resend-otp", { email });
            setTimer(60);
            setOtp(["", "", "", "", "", ""]);
            alert("New OTP sent to your email!");
        } catch {
            alert("Failed to resend OTP");
        }
    };

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <>
            <style>
                {`
                .otp-container { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #f4f7fe; font-family: sans-serif; }
                .otp-card { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center; width: 100%; max-width: 400px; }
                .otp-title { font-size: 24px; font-weight: bold; color: #333; margin-bottom: 8px; }
                .otp-sub { font-size: 14px; color: #666; margin-bottom: 25px; }
                .otp-inputs { display: flex; justify-content: center; gap: 12px; margin-bottom: 25px; }
                .otp-box { width: 45px; height: 55px; text-align: center; font-size: 22px; font-weight: 600; border-radius: 12px; border: 1.5px solid #ddd; transition: 0.3s; background: #fafafa; }
                .otp-box:focus { border-color: #387ed1; background: #fff; box-shadow: 0 0 8px rgba(56,126,209,0.2); outline: none; transform: scale(1.05); }
                .verify-btn { width: 100%; padding: 14px; border: none; border-radius: 12px; background: #387ed1; color: white; font-size: 16px; font-weight: 600; cursor: pointer; transition: 0.3s; }
                .verify-btn:hover { background: #2a69b5; box-shadow: 0 5px 15px rgba(56,126,209,0.3); }
                .verify-btn:disabled { background: #cbd5e0; cursor: not-allowed; }
                .resend { margin-top: 20px; font-size: 14px; color: #777; }
                .resend span { color: #387ed1; cursor: pointer; font-weight: 600; }
                .resend span.disabled { color: #ccc; cursor: not-allowed; }
                `}
            </style>

            <div className="otp-container">
                <div className="otp-card">
                    <div className="otp-title">Verify OTP 🔐</div>
                    <div className="otp-sub">Sent to <b>{email}</b></div>

                    <div className="otp-inputs">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                className="otp-box"
                                value={digit}
                                onPaste={index === 0 ? handlePaste : undefined}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputs.current[index] = el)}
                            />
                        ))}
                    </div>

                    <button
                        className="verify-btn"
                        onClick={verifyOtp}
                        disabled={loading || otp.join("").length !== 6}
                    >
                        {loading ? "Verifying..." : "Verify & Continue"}
                    </button>

                    <div className="resend">
                        {timer > 0 ? (
                            <span>Resend available in {timer}s</span>
                        ) : (
                            <span onClick={resendOtp}>Resend OTP</span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OTP;