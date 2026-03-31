// import React from "react";

// function Footer() {
//     const textStyle = {
//         fontSize: "13px",
//         color: "#6c757d",
//         lineHeight: "1.8",
//         marginBottom: "15px",
//     };

//     const linkStyle = {
//         fontSize: "14px",
//         color: "#6c757d",
//         marginBottom: "10px",
//         cursor: "pointer",
//     };

//     const hoverBlue = (e) => (e.target.style.color = "#387ed1");
//     const hoverOut = (e) => (e.target.style.color = "#6c757d");

//     return (
//         <footer
//             style={{
//                 backgroundColor: "#fbfbfb",
//                 borderTop: "1px solid #eee",
//                 paddingTop: "60px",
//                 paddingBottom: "30px",
//             }}
//         >
//             <div className="container" style={{ maxWidth: "1150px" }}>
//                 <div className="row">

//                     {/* Logo Section */}
//                     <div className="col-md-3">
//                         <img
//                             src="media/images/logo.svg"
//                             alt="logo"
//                             style={{ width: "140px", marginBottom: "15px" }}
//                         />

//                         <p style={{ fontSize: "14px", color: "#6c757d" }}>
//                             © 2010 - 2026, Zerodha Broking Ltd.
//                             <br />
//                             All rights reserved.
//                         </p>

//                         {/* Social Row 1 */}
//                         <div style={{ marginTop: "15px", marginBottom: "15px" }}>
//                             {["twitter", "facebook", "instagram", "linkedin"].map((icon, i) => (
//                                 <i
//                                     key={i}
//                                     className={`fa-brands fa-${icon}`}
//                                     style={{ marginRight: "18px", color: "#6c757d", cursor: "pointer" }}
//                                     onMouseEnter={hoverBlue}
//                                     onMouseLeave={hoverOut}
//                                 ></i>
//                             ))}
//                         </div>

//                         <hr style={{ borderColor: "#eee" }} />

//                         {/* Social Row 2 */}
//                         <div style={{ marginTop: "15px" }}>
//                             {["youtube", "whatsapp", "telegram"].map((icon, i) => (
//                                 <i
//                                     key={i}
//                                     className={`fa-brands fa-${icon}`}
//                                     style={{ marginRight: "18px", color: "#6c757d", cursor: "pointer" }}
//                                     onMouseEnter={hoverBlue}
//                                     onMouseLeave={hoverOut}
//                                 ></i>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Account */}
//                     <div className="col-md-2">
//                         <h6>Account</h6>
//                         {[
//                             "Open demat account",
//                             "Minor demat account",
//                             "NRI demat account",
//                             "Commodity",
//                             "Dematerialisation",
//                             "Fund transfer",
//                             "MTF",
//                             "Referral program",
//                         ].map((item, i) => (
//                             <div key={i} style={linkStyle} onMouseEnter={hoverBlue} onMouseLeave={hoverOut}>
//                                 {item}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Support */}
//                     <div className="col-md-2">
//                         <h6>Support</h6>
//                         {[
//                             "Contact us",
//                             "Support portal",
//                             "How to file a complaint?",
//                             "Status of your complaints",
//                             "Bulletin",
//                             "Circular",
//                             "Z-Connect blog",
//                             "Downloads",
//                         ].map((item, i) => (
//                             <div key={i} style={linkStyle} onMouseEnter={hoverBlue} onMouseLeave={hoverOut}>
//                                 {item}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Company */}
//                     <div className="col-md-2">
//                         <h6>Company</h6>
//                         {[
//                             "About",
//                             "Philosophy",
//                             "Press & media",
//                             "Careers",
//                             "Zerodha Cares (CSR)",
//                             "Zerodha.tech",
//                             "Open source",
//                         ].map((item, i) => (
//                             <div key={i} style={linkStyle} onMouseEnter={hoverBlue} onMouseLeave={hoverOut}>
//                                 {item}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Quick Links */}
//                     <div className="col-md-3">
//                         <h6>Quick links</h6>
//                         {[
//                             "Upcoming IPOs",
//                             "Brokerage charges",
//                             "Market holidays",
//                             "Economic calendar",
//                             "Calculators",
//                             "Markets",
//                             "Sectors",
//                         ].map((item, i) => (
//                             <div key={i} style={linkStyle} onMouseEnter={hoverBlue} onMouseLeave={hoverOut}>
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Legal Section */}
//                 <div style={{ marginTop: "50px" }}>
//                     <p style={textStyle}>
//                         Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
//                     </p>
//                     <p style={textStyle}>
//                         Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
//                     </p>

//                     <p style={textStyle}>
//                         Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
//                     </p>

//                     <p style={textStyle}>
//                     "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
//                     </p>
//                     <p style={textStyle}>
//                    *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
//                     </p>
//                 </div>

//                 {/* Bottom Links */}
//                 <div
//                     style={{
//                         borderTop: "1px solid #eee",
//                         marginTop: "30px",
//                         paddingTop: "18px",
//                         textAlign: "center",
//                         fontSize: "13px",
//                         color: "#6c757d",
//                     }}
//                 >
//                     {[
//                         "NSE",
//                         "BSE",
//                         "MCX",
//                         "Terms & conditions",
//                         "Policies & procedures",
//                         "Privacy policy",
//                         "Disclosure",
//                         "For investor's attention",
//                         "Investor charter"
//                     ].map((item, index) => (
//                         <span
//                             key={index}
//                             style={{
//                                 margin: "0 18px",
//                                 cursor: "pointer",
//                                 transition: "color 0.2s ease"
//                             }}
//                             onMouseEnter={(e) => (e.target.style.color = "#387ed1")}
//                             onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
//                         >
//                             {item}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import React from "react";

function Footer() {
    return (
        <>
            <style>
                {`
                .footer-wrapper {
                    background-color: #fbfbfb;
                    border-top: 1px solid #eee;
                    padding: 60px 0 30px;
                    font-family: 'Inter', sans-serif;
                }

                .footer-logo { width: 140px; margin-bottom: 20px; }
                
                .footer-col h6 {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    color: #444;
                }

                .footer-link {
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 12px;
                    cursor: pointer;
                    display: block;
                    text-decoration: none;
                    transition: 0.2s ease;
                }

                .footer-link:hover { color: #387ed1; }

                .social-icons i {
                    font-size: 18px;
                    margin-right: 20px;
                    color: #888;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .social-icons i:hover { color: #387ed1; transform: translateY(-3px); }

                .legal-text {
                    font-size: 12px;
                    color: #9b9b9b;
                    line-height: 1.6;
                    margin-bottom: 15px;
                    text-align: justify;
                }

                .bottom-nav {
                    border-top: 1px solid #eee;
                    margin-top: 40px;
                    padding-top: 20px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .bottom-nav span {
                    font-size: 13px;
                    color: #888;
                    cursor: pointer;
                    transition: 0.2s;
                }

                .bottom-nav span:hover { color: #387ed1; }

                @media (max-width: 768px) {
                    .footer-col { margin-bottom: 30px; text-align: center; }
                    .social-icons { justify-content: center; display: flex; }
                }
                `}
            </style>

            <footer className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        {/* Logo & Social */}
                        <div className="col-md-3 footer-col">
                            <img src="media/images/logo.svg" alt="Zerodha" className="footer-logo" />
                            <p style={{ fontSize: "14px", color: "#888" }}>
                                © 2010 - 2026, Zerodha Broking Ltd.<br />All rights reserved.
                            </p>
                            <div className="social-icons mt-4">
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            <div className="social-icons mt-3">
                                <i className="fa-brands fa-youtube"></i>
                                <i className="fa-brands fa-whatsapp"></i>
                                <i className="fa-brands fa-telegram"></i>
                            </div>
                        </div>

                        {/* Account & Support */}
                        <div className="col-md-2 col-6 footer-col">
                            <h6>Account</h6>
                            {["Open demat account", "Fund transfer", "MTF", "Referral program"].map((item) => (
                                <span key={item} className="footer-link">{item}</span>
                            ))}
                        </div>

                        <div className="col-md-2 col-6 footer-col">
                            <h6>Support</h6>
                            {["Contact us", "Support portal", "Z-Connect blog", "Downloads"].map((item) => (
                                <span key={item} className="footer-link">{item}</span>
                            ))}
                        </div>

                        {/* Company & Quick Links */}
                        <div className="col-md-2 col-6 footer-col">
                            <h6>Company</h6>
                            {["About", "Careers", "Zerodha.tech", "Open source"].map((item) => (
                                <span key={item} className="footer-link">{item}</span>
                            ))}
                        </div>

                        <div className="col-md-3 col-6 footer-col">
                            <h6>Quick links</h6>
                            {["Upcoming IPOs", "Brokerage charges", "Market holidays", "Calculators"].map((item) => (
                                <span key={item} className="footer-link">{item}</span>
                            ))}
                        </div>
                    </div>

                    {/* Minimal Legal Section */}
                    <div className="mt-5">
                        <p className="legal-text">
                            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. Registered Address: #153/154, J.P Nagar 4th Phase, Bengaluru - 560078. For complaints, write to <b>complaints@zerodha.com</b>.
                        </p>
                        <p className="legal-text">
                            Attention Investors: Stock brokers can accept securities as margins only by way of pledge in the depository system w.e.f September 01, 2020. Please ensure you read the Risk Disclosure Document as prescribed by SEBI.
                        </p>
                        <p className="legal-text">
                            KYC is a one-time exercise. Prevent unauthorized transactions by updating your mobile number and email ID with your broker to receive instant alerts from the Exchange.
                        </p>
                    </div>

                    {/* Bottom Utility Links */}
                    <div className="bottom-nav">
                        {["NSE", "BSE", "MCX", "Terms & conditions", "Privacy policy","Disclosure", "For investor's attention",
                        "Investor charter"].map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;