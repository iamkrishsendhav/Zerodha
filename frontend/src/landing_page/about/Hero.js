//

import React, { useEffect } from "react";
import { FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

function Hero() {
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
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="hero">
      <div className="container">
        {/* Heading */}
        <div className="text-center heading fade-in">
          <h1>We pioneered the discount broking model in India.</h1>
          <p>Now, we are breaking ground with our technology.</p>
        </div>

        {/* Cards Section */}
        <div className="row cards">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 fade-in">
            <div className="glass-card">
              <FaChartLine className="icon" />
              <h5>Our Beginning</h5>
              <p>
                We started in 2010 to break barriers in trading—cost, support,
                and technology.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 fade-in">
            <div className="glass-card">
              <FaUsers className="icon" />
              <h5>Massive Scale</h5>
              <p>
                1.5+ crore users trust our ecosystem, contributing to 15% of
                India’s retail trading.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 fade-in">
            <div className="glass-card">
              <FaLightbulb className="icon" />
              <h5>Innovation</h5>
              <p>
                Through Rainmatter and community initiatives, we empower traders
                and startups.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="row content fade-in">
          <div className="col-lg-6">
            <p>
              We named the company <strong>Zerodha</strong>, combining "Zero"
              and "Rodha", meaning barrier.
            </p>
            <p>
              Today, our pricing and technology make us India's biggest stock
              broker.
            </p>
          </div>

          <div className="col-lg-6">
            <p>
              Explore our <a href="#">blog</a> or see what the{" "}
              <a href="#">media</a> says about us.
            </p>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .hero {
          padding: 50px 0;
          font-family: "Inter", sans-serif;
          background: linear-gradient(135deg, #f8f9fa, #eef2f7);
        }

        .heading h1 {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1f1f1f;
        }

        .heading p {
          color: #6c757d;
          font-size: 1.2rem;
        }

        .cards {
          margin-top: 60px;
        }

        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.6);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 25px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .glass-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .icon {
          font-size: 28px;
          color: #387ed1;
          margin-bottom: 15px;
        }

        .glass-card h5 {
          font-weight: 600;
          margin-bottom: 10px;
        }

        .glass-card p {
          color: #555;
          font-size: 0.95rem;
        }

        .content {
          margin-top: 60px;
          font-size: 1.05rem;
          color: #444;
        }

        .content a {
          color: #387ed1;
          text-decoration: none;
          font-weight: 500;
        }

        .content a:hover {
          text-decoration: underline;
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
          .heading h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
