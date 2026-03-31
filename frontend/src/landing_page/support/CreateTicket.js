
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

function CreateTicket() {

  const data = Array(6).fill({
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started"
    ]
  });

  return (
    <section className="ticket-section">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="title">
            To create a ticket, select a relevant topic
          </h2>
        </div>

        {/* Grid */}
        <div className="row">

          {data.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">

              <div className="ticket-card">

                <h5>
                  <FaPlusCircle className="icon" /> {item.title}
                </h5>

                <div className="links">
                  {item.links.map((link, i) => (
                    <a key={i} href="/">
                      {link}
                    </a>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* CSS */}
      <style jsx>{`
        .ticket-section {
          padding: 80px 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #f8f9fa, #eef2f7);
        }

        .title {
          font-size: 2rem;
          font-weight: 600;
          color: #1f1f1f;
        }

        /* CARD */
        .ticket-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.3);
          transition: 0.3s ease;
          height: 100%;
        }

        .ticket-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        }

        .ticket-card h5 {
          font-weight: 600;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon {
          color: #387ed1;
        }

        .links a {
          display: block;
          font-size: 14px;
          color: #387ed1;
          text-decoration: none;
          margin-bottom: 6px;
        }

        .links a:hover {
          text-decoration: underline;
        }

        /* responsive */
        @media (max-width: 768px) {
          .title {
            font-size: 1.5rem;
          }
        }
      `}</style>

    </section>
  );
}

export default CreateTicket;