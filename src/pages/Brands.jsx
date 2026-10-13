import React from 'react';
import { Link } from 'react-router-dom';
import { brandsData } from '../data/brands';

export default function Brands({ onOpenRfq }) {
  return (
    <>
      {/* PAGE HERO */}
      <section className="band band-dark" style={{ padding: '60px 0 45px', background: 'linear-gradient(180deg, #18283d 0%, #111e2f 100%)' }}>
        <div className="wrap">
          <div className="head">
            <div className="kicker">Authorized Brands</div>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(30px, 3.8vw, 42px)', marginBottom: '12px' }}>
              Premium Industrial &amp; Safety Brands We Distribute
            </h1>
            <p className="lead" style={{ color: '#b3c5d8' }}>
              Balkishan Dass is an authorized distributor and supplier of world-class brands with verified manufacturing certifications, guaranteed authenticity, and direct factory pricing.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND SHOWCASES */}
      <section className="band band-white">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              id={brand.id}
              className="brand-showcase-card"
            >
              <div
                className="brand-showcase-logo-box"
                style={{
                  background: brand.id === 'diamond' ? '#e7f5ff' : brand.id === 'black-decker' ? '#fff5eb' : brand.id === 'jcb' ? '#fff9db' : brand.id === 'ferreterro' ? '#fff5f0' : '#f7f9fc'
                }}
              >
                {brand.img ? (
                  <img
                    src={brand.img}
                    alt={brand.name}
                    style={{ maxHeight: '70px', maxWidth: '180px', margin: '0 auto 16px' }}
                  />
                ) : (
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: '36px',
                      fontWeight: 900,
                      color: brand.color || 'var(--navy-deep)',
                      marginBottom: '10px'
                    }}
                  >
                    {brand.name}
                  </div>
                )}
                <span className="home-brand-badge" style={{ fontSize: '12px' }}>
                  {brand.badge}
                </span>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '10px' }}>
                  {brand.certifications}
                </p>
              </div>

              <div className="brand-showcase-content">
                <div className="kicker">{brand.kicker}</div>
                <h2>{brand.name}</h2>
                <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.65, marginBottom: '16px' }}>
                  {brand.desc}
                </p>

                <div style={{ background: '#f4f7fb', padding: '16px', borderRadius: '6px', marginBottom: '20px' }}>
                  <strong style={{ color: 'var(--navy-deep)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                    Supplied Product Lines:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {brand.productLines.map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: '#ffffff',
                          border: '1px solid var(--line)',
                          padding: '4px 9px',
                          borderRadius: '3px',
                          fontSize: '12.5px',
                          color: 'var(--ink)'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    className="btn btn-amber"
                    onClick={() => onOpenRfq(`${brand.name} Wholesale Inquiry`)}
                  >
                    Request {brand.name} Quote
                  </button>
                  <Link className="btn btn-ghost-dark" to="/products">
                    View in Catalog
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
