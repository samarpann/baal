import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
  { img: "/assets/img/hero-tools.webp", alt: "Heavy duty spanners, sockets and industrial hand tools" },
  { img: "/assets/img/hero-ppe.webp", alt: "Safety helmets, PPE and personal protective gear" },
  { img: "/assets/img/hero-warehouse.webp", alt: "Industrial warehouse racking and material handling equipment" }
];

export default function HeroSlider({ onOpenRfq }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slides">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === activeIdx ? 'active' : ''}`}
          >
            <img src={slide.img} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="wrap">
        <div className="hero-copy">
          <div className="badge">
            <span className="badge-dot"></span>
            Authorized Distributor &amp; Wholesale Supplier
          </div>
          <h1>Lifting, Tools &amp; Industrial Safety, <em>Engineered for Tough Jobs</em></h1>
          <p className="sub">
            <b>Balkishan Dass Company</b> is a trusted supplier of heavy lifting hoists, precision hand tools, PPE safety equipment, roller chains and wire ropes. Supplying construction conglomerates, manufacturing plants and industrial sites with top quality certified equipment for over 40 years.
          </p>
          <div className="ctas">
            <Link className="btn btn-amber" to="/products">Explore Products Catalog</Link>
            <Link className="btn btn-ghost-dark" to="/contact">Get Wholesale Pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
