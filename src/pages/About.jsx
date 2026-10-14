import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function About({ onOpenRfq }) {
  return (
    <>
      {/* PAGE HERO */}
      <section className="band band-dark" style={{ padding: '70px 0 50px', background: 'linear-gradient(180deg, #18283d 0%, #111e2f 100%)' }}>
        <div className="wrap">
          <div className="head">
            <div className="kicker">About Balkishan Dass Ashok Kumar</div>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: '14px' }}>
              40+ Years of Dedication to Industrial Safety &amp; Lifting
            </h1>
            <p className="lead" style={{ color: '#b3c5d8' }}>
              At Balkishan Dass Ashok Kumar, we are committed to providing efficient and reliable solutions for lifting, rigging, and material handling applications. Our mission revolves around the distribution and supply of a comprehensive range of certified products tailored to meet the specific needs of diverse industries, ensuring optimal performance, safety, and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN ABOUT STORY SECTION */}
      <section className="band band-white">
        <div className="wrap">
          <div className="about-hero-grid">
            <div>
              <div className="kicker">Our Heritage</div>
              <h2>Supplying Construction &amp; Industrial Sites Worldwide</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '18px' }}>
                For over 40 years, <b>Balkishan Dass Ashok Kumar</b> has supplied construction and industrial sites throughout India and abroad with top quality, reliable lifting, rigging hardware, and safety solutions. We tailor our clients’ rigging, lifting, and fall protection equipment to meet the demands of each job, supplying proof-tested equipment to ensure zero failure in high-risk environments.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '24px' }}>
                Our comprehensive product portfolio includes <b>Chain Pulley Blocks, Ratchet Lever Hoists, Wire Rope Slings, Rigging Shackles &amp; Hooks, Electric Chain Hoists, Pulling &amp; Lifting Machines, Beam Clamps, Pallet Trucks, and Safety PPE</b>.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ background: '#f4f7fb', borderLeft: '3px solid var(--amber)', padding: '12px 18px', borderRadius: '4px', flex: '1 1 200px' }}>
                  <strong style={{ color: 'var(--navy-deep)', fontSize: '18px', display: 'block' }}>Certified Standards</strong>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Proof-tested to international lifting safety factors</span>
                </div>
                <div style={{ background: '#f4f7fb', borderLeft: '3px solid var(--navy)', padding: '12px 18px', borderRadius: '4px', flex: '1 1 200px' }}>
                  <strong style={{ color: 'var(--navy-deep)', fontSize: '18px', display: 'block' }}>Engineering Expertise</strong>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Tailored solutions engineered to custom loads</span>
                </div>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--line)' }}>
                <img src="/assets/img/hero-warehouse.webp" alt="Balkishan Dass Ashok Kumar Warehouse & Distribution Hub" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(14,25,41,0.92))', padding: '24px 20px 16px', color: '#fff' }}>
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--amber)', fontWeight: '700' }}>
                    Delhi Distribution Hub
                  </span>
                  <h4 style={{ color: '#ffffff', fontSize: '16px', marginTop: '4px' }}>
                    {siteInfo.address}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* 6 CAPABILITIES FROM BALKISHAN DASS ABOUT PAGE */}
          <div className="head" style={{ marginTop: '40px' }}>
            <div className="kicker">Core Product Capabilities</div>
            <h2>What We Deliver</h2>
          </div>

          <div className="cat-grid" style={{ marginBottom: '60px' }}>
            {/* Pillar 1 */}
            <div className="cat">
              <div className="cat-media">
                <span className="cat-badge">Ferreterro &amp; JCB</span>
                <img src="/assets/products/electric-hoist.jpg" alt="Lifting Solutions" />
              </div>
              <div className="cat-body">
                <h3>Lifting Solutions – Ferreterro &amp; JCB</h3>
                <p>
                  Balkishan Dass Ashok Kumar specializes in advanced lifting solutions designed to handle diverse weights and operate seamlessly in tough environments. Our lifting products, such as the Chain Pulley Block and Electric Chain Hoist, are engineered for durability and ease of use. Partnering with renowned brands like Ferreterro and JCB, we ensure our products integrate latest technology and ergonomic designs.
                </p>
                <Link to="/products?cat=lifting" className="go">
                  View Lifting Gear <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="cat">
              <div className="cat-media">
                <span className="cat-badge">Delta Plus</span>
                <img src="/assets/products/ventilated-helmet.webp" alt="Safety Solutions" />
              </div>
              <div className="cat-body">
                <h3>Safety Solutions – Delta Plus PPE</h3>
                <p>
                  Safety is at the core of everything we do at Balkishan Dass Ashok Kumar. Effective material handling and lifting go hand in hand with robust safety measures. That’s why we supply certified safety solutions from leading European manufacturers like Delta Plus. From high-altitude ventilated helmets to cut-resistant industrial gloves and fall arrest harnesses, our safety products prevent worksite accidents.
                </p>
                <Link to="/products?cat=safety" className="go">
                  View PPE &amp; Safety <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="cat">
              <div className="cat-media">
                <span className="cat-badge">De Neers</span>
                <img src="/assets/products/combination-spanner.jpg" alt="De Neers Hand Tools" />
              </div>
              <div className="cat-body">
                <h3>Hand Tools – De Neers</h3>
                <p>
                  To complement our material handling and lifting equipment, Bal Kishan Das offers a comprehensive range of high-quality hand tools from DeNeers. These tools are designed for precision, durability, and ease of use, making them essential for any industrial application. Whether you need tools for maintenance, repair, or installation, our hand tools provide maximum torque and reliability.
                </p>
                <Link to="/products?cat=tools" className="go">
                  View Hand Tools <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="cat">
              <div className="cat-media">
                <span className="cat-badge">Mahadev Wire Ropes</span>
                <img src="/assets/products/wire-rope-sling.jpg" alt="Mahadev Wire Ropes & Slings" />
              </div>
              <div className="cat-body">
                <h3>Wire Ropes &amp; Slings – Mahadev</h3>
                <p>
                  High-tensile steel wire ropes, multi-legged wire rope slings, and certified rigging tackle manufactured by Mahadev Wire Rope. Engineered with high safety factors, durable swaging, and superior fatigue resistance for high-load crane hoists, port cranes, and heavy construction winches.
                </p>
                <Link to="/products?cat=wire-ropes" className="go">
                  View Wire Ropes <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="cat">
              <div className="cat-media">
                <span className="cat-badge">Diamond</span>
                <img src="/assets/products/roller-chain.jpg" alt="Diamond Transmission Chains" />
              </div>
              <div className="cat-body">
                <h3>Chains &amp; Power Transmission – Diamond</h3>
                <p>
                  Diamond duplex roller chains, sprockets, and flexible chain couplings. High-fatigue strength link plates, shot-peened rollers, and tight tolerances for industrial drive systems, conveyor lines, and heavy reduction gear assemblies.
                </p>
                <Link to="/products?cat=chains" className="go">
                  View Roller Chains <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 6: Custom Engineering */}
            <div className="cat" id="customization">
              <div className="cat-media">
                <span className="cat-badge">Custom Engineering</span>
                <img src="/assets/products/jcb-clamp.png" alt="Custom JCB Re-engineering" />
              </div>
              <div className="cat-body">
                <h3>Innovation &amp; Customization</h3>
                <p>
                  Driven by a growing demand for specialized equipment, Bal Kishan Das is dedicated to continuous innovation and customization. We re-engineer JCB material handling products to meet the unique requirements of our customers. By leveraging cutting-edge technology and industry expertise, we create solutions that optimize productivity, safety, and versatility.
                </p>
                <button
                  className="go"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onClick={() => onOpenRfq("Custom JCB Re-engineering Consultation")}
                >
                  Inquire Custom Rigging <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="band band-light">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="kicker">Partner With Us</div>
          <h2>Ready to Equip Your Next Project?</h2>
          <p className="lead" style={{ marginBottom: '28px' }}>
            Speak directly with our technical team in Ajmeri Gate, Delhi or request a comprehensive product catalog and wholesale quote.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-amber" onClick={() => onOpenRfq("About Page Bulk Requirement")}>
              Request a Quote
            </button>
            <Link className="btn btn-ghost-dark" to="/contact">
              View Contact Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
