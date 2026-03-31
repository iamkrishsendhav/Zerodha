import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

function Hero() {

  // scroll animation
  useEffect(() => {
    const el = document.querySelector(".fade-in");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (el) observer.observe(el);
  }, []);

  return (
    <section className="product-hero">

      <div className="container text-center fade-in">

        <h1 className="title">Zerodha Products</h1>

        <p className="subtitle">
          Sleek, modern and intuitive trading platforms
        </p>

        <a href="/" className="cta">
          Explore investment offerings <FaArrowRight />
        </a>

      </div>

      {/* CSS */}
      <style jsx>{`
        .product-hero {
          padding: 50px 0;
          background: linear-gradient(135deg, #f8f9fa, #eef2f7);
          border-bottom: 1px solid #eaeaea;
          font-family: 'Inter', sans-serif;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1f1f1f;
        }

        .subtitle {
          margin-top: 12px;
          font-size: 1.2rem;
          color: #6c757d;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 25px;
          padding: 10px 18px;
          border-radius: 8px;
          background: #387ed1;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s ease;
        }

        .cta:hover {
          background: #1a5dc9;
          transform: translateY(-2px);
        }

        /* animation */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* responsive */
        @media (max-width: 768px) {
          .title {
            font-size: 1.8rem;
          }

          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;