// import React, { useState } from "react";

// function SupportPage() {

//     const [openSections, setOpenSections] = useState([
//         "Account Opening",
//         "Your Zerodha Account",
//         "Kite",
//         "Funds",
//         "Console",
//         "Coin"
//     ]);

//     const toggleSection = (section) => {
//         if (openSections.includes(section)) {
//             setOpenSections(openSections.filter((s) => s !== section));
//         } else {
//             setOpenSections([...openSections, section]);
//         }
//     };

//     const sections = [
//         {
//             title: "Account Opening",
//             items: [
//                 "Resident Individual",
//                 "Minor",
//                 "Non Resident Indian (NRI)",
//                 "Company, Partnership, HUF and LLP",
//                 "Glossary"
//             ]
//         },
//         {
//             title: "Your Zerodha Account",
//             items: [
//                 "Your Profile",
//                 "Account modification",
//                 "Client Master Report (CMR) and Depository Participant (DP)",
//                 "Nomination",
//                 "Transfer and conversion of securities"
//             ]
//         },
//         {
//             title: "Kite",
//             items: [
//                 "IPO",
//                 "Trading FAQs",
//                 "Margin Trading Facility (MTF) and Margins",
//                 "Charts and orders",
//                 "Alerts and Nudges",
//                 "General"
//             ]
//         },
//         {
//             title: "Funds",
//             items: [
//                 "Add money",
//                 "Withdraw money",
//                 "Add bank accounts",
//                 "eMandates"
//             ]
//         },
//         {
//             title: "Console",
//             items: [
//                 "Portfolio",
//                 "Corporate actions",
//                 "Funds statement",
//                 "Reports",
//                 "Profile",
//                 "Segments"
//             ]
//         },
//         {
//             title: "Coin",
//             items: [
//                 "Mutual funds",
//                 "National Pension Scheme (NPS)",
//                 "Fixed Deposit (FD)",
//                 "Features on Coin",
//                 "Payments and Orders",
//                 "General"
//             ]
//         }
//     ];

//     return (
//         <div style={{ backgroundColor: "#f8f9fa", paddingBottom: "80px" }}>
//             <div className="container" style={{ maxWidth: "1100px" }}>

//                 {/* HEADER */}
//                 <div className="d-flex justify-content-between align-items-center pt-5 mb-4">
//                     <h2 style={{ fontWeight: "400" }}>Support Portal</h2>

//                     <button
//                         style={{
//                             backgroundColor: "#387ed1",
//                             color: "#fff",
//                             border: "none",
//                             padding: "8px 18px",
//                             borderRadius: "4px",
//                             fontSize: "14px"
//                         }}
//                     >
//                         My tickets
//                     </button>
//                 </div>

//                 {/* SEARCH */}
//                 <div className="mb-5">
//                     <input
//                         type="text"
//                         placeholder="Eg: How do I open my account, How do I activate F&O..."
//                         style={{
//                             width: "100%",
//                             padding: "14px 16px",
//                             borderRadius: "6px",
//                             border: "1px solid #ddd",
//                             fontSize: "14px"
//                         }}
//                     />
//                 </div>

//                 <div className="row">

//                     {/* LEFT SIDE */}
//                     <div className="col-md-8">

//                         {sections.map((section, index) => (
//                             <div key={index} style={{ marginBottom: "20px" }}>

//                                 {/* HEADER BAR */}
//                                 <div
//                                     onClick={() => toggleSection(section.title)}
//                                     style={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         backgroundColor: "#f1f3f5",
//                                         border: "1px solid #e5e5e5",
//                                         cursor: "pointer",
//                                         padding: "18px 20px"
//                                     }}
//                                 >
//                                     <div style={{ flex: 1, fontWeight: "500" }}>
//                                         {section.title}
//                                     </div>

//                                     <div style={{ color: "#387ed1", fontSize: "18px" }}>
//                                         {openSections.includes(section.title) ? "▴" : "▾"}
//                                     </div>
//                                 </div>

//                                 {/* EXPANDED CONTENT */}
//                                 {openSections.includes(section.title) && (
//                                     <div
//                                         style={{
//                                             backgroundColor: "#fff",
//                                             border: "1px solid #e5e5e5",
//                                             borderTop: "none",
//                                             padding: "20px 40px"
//                                         }}
//                                     >
//                                         <ul style={{ margin: 0 }}>
//                                             {section.items.map((item, i) => (
//                                                 <li key={i} style={{ marginBottom: "12px" }}>
//                                                     <a
//                                                         href="#"
//                                                         style={{
//                                                             color: "#387ed1",
//                                                             textDecoration: "none",
//                                                             fontSize: "14px"
//                                                         }}
//                                                     >
//                                                         {item}
//                                                     </a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 )}

//                             </div>
//                         ))}

//                     </div>

//                     {/* RIGHT SIDE */}
//                     <div className="col-md-4">

//                         {/* Announcement */}
//                         <div
//                             style={{
//                                 backgroundColor: "#fff3cd",
//                                 borderLeft: "4px solid orange",
//                                 padding: "15px",
//                                 marginBottom: "20px"
//                             }}
//                         >
//                             <ul style={{ paddingLeft: "18px", margin: 0 }}>
//                                 <li>
//                                     <a href="#" style={{ color: "#387ed1", textDecoration: "none" }}>
//                                         Revision in expiry dates of commodity futures contract
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" style={{ color: "#387ed1", textDecoration: "none" }}>
//                                         Revision in expiry dates of Copper and Zinc March 2026 options contracts
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Quick Links */}
//                         <div style={{ backgroundColor: "#fff", border: "1px solid #e5e5e5" }}>
//                             <div
//                                 style={{
//                                     padding: "12px 15px",
//                                     borderBottom: "1px solid #e5e5e5",
//                                     fontWeight: "500"
//                                 }}
//                             >
//                                 Quick links
//                             </div>

//                             <ol style={{ margin: 0, padding: "15px 30px" }}>
//                                 {[
//                                     "Track account opening",
//                                     "Track segment activation",
//                                     "Intraday margins",
//                                     "Kite user manual",
//                                     "Learn how to create a ticket"
//                                 ].map((item, index) => (
//                                     <li key={index} style={{ marginBottom: "10px" }}>
//                                         <a href="#" style={{ color: "#387ed1", textDecoration: "none" }}>
//                                             {item}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ol>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SupportPage;

import React from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
    return (
        <>
            <Hero />
            <CreateTicket />
        </>
    );
}

export default PricingPage;