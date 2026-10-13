import React from 'react';
import { Link } from 'react-router-dom';
import { brandsData } from '../data/brands';

export default function BrandGrid() {
  return (
    <section className="band band-white" id="brands">
      <div className="wrap">
        <div className="head">
          <div className="kicker">Authorized Partnerships</div>
          <h2>Brands We Supply</h2>
          <p className="lead">
            We partner with internationally respected manufacturers to deliver uncompromised safety, verified tolerances, and maximum operational uptime.
          </p>
        </div>

        <div className="home-brand-grid">
          {brandsData.map((brand) => (
            <Link key={brand.id} className="home-brand" to={`/brands#${brand.id}`}>
              {brand.img ? (
                <img src={brand.img} alt={brand.name} />
              ) : (
                <div
                  className="home-brand-name"
                  style={{
                    color: brand.color || 'var(--navy-deep)',
                    backgroundColor: brand.bgBadge || 'transparent',
                    padding: brand.bgBadge ? '2px 10px' : '0',
                    borderRadius: brand.bgBadge ? '4px' : '0'
                  }}
                >
                  {brand.name}
                </div>
              )}
              {brand.img && <div className="home-brand-name">{brand.name}</div>}
              <span className="home-brand-badge">{brand.badge}</span>
              <div className="home-brand-sub">{brand.tagline}</div>
            </Link>
          ))}

          {/* 8th Brand Card: 40+ Years */}
          <Link className="home-brand" to="/about">
            <div className="home-brand-name" style={{ color: 'var(--navy-deep)' }}>
              40+ YEARS
            </div>
            <span className="home-brand-badge" style={{ background: '#eaf1f8', color: 'var(--navy)' }}>
              Balkishan Dass
            </span>
            <div className="home-brand-sub">Custom Fabrication &amp; Proof Testing</div>
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '35px' }}>
          <Link to="/brands" className="btn btn-navy">
            View All Authorized Brands &amp; Official Certifications &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
