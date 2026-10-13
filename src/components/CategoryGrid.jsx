import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const categories = [
  {
    title: "Lifting & Material Handling",
    badge: "Ferreterro & JCB",
    img: "/assets/products/electric-hoist.jpg",
    desc: "Chain Pulley Blocks, Electric Chain Hoists, Ratchet Lever Hoists, Beam Clamps, Pulling & Lifting Machines, Electric Trolleys, and Ferreterro Round & Webbing Slings.",
    link: "/products?cat=lifting"
  },
  {
    title: "Hand Tools & Hardware",
    badge: "De Neers",
    img: "/assets/img/cat-hand-tools.jpg",
    desc: "Master grade combination spanners, slogging wrenches, Stillson pipe wrenches, heavy duty combination pliers, cable cutters, club hammers, and hexagonal allen key sets.",
    link: "/products?cat=tools"
  },
  {
    title: "Safety & PPE Solutions",
    badge: "Black & Decker / Delta Plus",
    img: "/assets/img/cat-ppe.jpg",
    desc: "Certified steel-toe safety footwear, ventilated mountain helmets, high-dexterity cut-resistant gloves, Pacaya Smoke protective eyewear, and industrial coveralls.",
    link: "/products?cat=safety"
  },
  {
    title: "Chains & Power Transmission",
    badge: "Diamond",
    img: "/assets/products/roller-chain.jpg",
    desc: "Duplex roller chains, industrial chain sprockets, and heavy duty chain sprocket couplings engineered for heavy torque mechanical transmission.",
    link: "/products?cat=chains"
  },
  {
    title: "Wire Ropes & Rigging Slings",
    badge: "Mahadev Wire Ropes",
    img: "/assets/products/wire-rope-sling.jpg",
    desc: "Four-legged steel wire rope slings, single and multi-leg wire slings, heavy rigging hardware, and custom fabricated cable assemblies for heavy industrial lifting.",
    link: "/products?cat=wire-ropes"
  },
  {
    title: "Innovation & Customization",
    badge: "Innovation",
    img: "/assets/products/jcb-clamp.png",
    desc: "Tailored rigging assemblies and custom re-engineering of JCB material handling equipment to meet the specialized load limits and safety requirements of your facility.",
    link: "/about#customization"
  }
];

export default function CategoryGrid() {
  return (
    <section className="band band-light" id="categories">
      <div className="wrap">
        <div className="head">
          <div className="kicker">Product Divisions</div>
          <h2>Shop by Category</h2>
          <p className="lead">
            From high-tonnage lifting machinery to high-dexterity hand tools and complete personal protective equipment, explore our comprehensive industrial range.
          </p>
        </div>

        <div className="cat-grid">
          {categories.map((cat, idx) => (
            <Link key={idx} className="cat-link" to={cat.link}>
              <div className="cat">
                <div className="cat-media">
                  <span className="cat-badge">{cat.badge}</span>
                  <img src={cat.img} alt={cat.title} />
                </div>
                <div className="cat-body">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <span className="go">
                    Explore Division <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
