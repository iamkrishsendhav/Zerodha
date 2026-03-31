import React, { useEffect } from "react";
import { FaTwitter, FaGlobe, FaComments } from "react-icons/fa";

function Team() {

    // Scroll animation
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <section className="team">

            <div className="container">

                {/* Title */}
                <div className="text-center fade-in">
                    <h2 className="title">People</h2>
                    <p className="subtitle">The visionaries behind the product</p>
                </div>

                {/* Card Layout */}
                <div className="row justify-content-center mt-5 fade-in">

                    <div className="col-lg-10">
                        <div className="glass-card row align-items-center">

                            {/* Left */}
                            <div className="col-lg-4 text-center">
                                <img
                                    src="media/images/krish.jpeg"
                                    alt="CEO"
                                    className="profile-img"
                                />
                                <h4>Krish Sendhav</h4>
                                <p className="role">Founder, CEO</p>
                            </div>

                            {/* Right */}
                            <div className="col-lg-8 content">
                                <p>
                                    Krish bootstrapped and founded Zerodha in 2010 to overcome the
                                    hurdles he faced during his decade-long stint as a trader.
                                    Today, Zerodha has changed the landscape of the Indian broking industry.
                                </p>

                                <p>
                                    He is a member of the SEBI Secondary Market Advisory Committee
                                    (SMAC) and the Market Data Advisory Committee (MDAC).
                                </p>

                                <p>Playing basketball is his zen.</p>

                                {/* Social Links */}
                                <div className="socials">
                                    <a href="#"><FaGlobe /> Homepage</a>
                                    <a href="#"><FaComments /> TradingQnA</a>
                                    <a href="#"><FaTwitter /> Twitter</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* CSS */}
            <style jsx>{`
        .team {
         padding: 60px 0 100px;
          background: linear-gradient(135deg, #f8f9fa, #eef2f7);
          font-family: 'Inter', sans-serif;
        }

        .title {
          font-size: 2.2rem;
          font-weight: 600;
          color: #1f1f1f;
        }

        .subtitle {
          color: #6c757d;
          margin-top: 8px;
        }

        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .profile-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
          border: 4px solid rgba(255,255,255,0.5);
        }

        h4 {
          font-weight: 600;
          color: #1f1f1f;
        }

        .role {
          color: #6c757d;
        }

        .content {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #444;
        }

        .socials {
          margin-top: 20px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .socials a {
          text-decoration: none;
          color: #387ed1;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: 0.2s;
        }

        .socials a:hover {
          color: #1a5dc9;
        }

        /* Animation */
        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .glass-card {
            padding: 25px;
          }

          .profile-img {
            width: 150px;
            height: 150px;
          }

          .title {
            font-size: 1.7rem;
          }
        }
      `}</style>
        </section>
    );
}

export default Team;