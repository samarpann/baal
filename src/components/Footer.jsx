import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          {/* Col 1: Brand & Heritage */}
          <div className="foot-col foot-about">
            <div className="brand" style={{ marginBottom: '16px' }}>
              <div className="logo-chip">
                <img src="/assets/logo.png" alt="Balkishan Dass Logo" width="40" height="40" />
              </div>
              <div className="brand-text">
                <div className="brand-mark">BALKISHAN <span>DASS</span></div>
                <div className="brand-tagline">{siteInfo.established} • Delhi, India</div>
              </div>
            </div>
            <p>
              For over 40 years, Balkishan Dass Company has supplied construction and industrial sites throughout India and worldwide with top quality, reliable lifting, rigging, hand tools, and fall protection equipment.
            </p>
            <div className="foot-badges">
              <span className="foot-badge">Authorized Distributor</span>
              <span className="foot-badge">Proof Tested</span>
              <span className="foot-badge">Wholesale &amp; Retail</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="foot-col">
            <h4>Navigation</h4>
            <ul className="foot-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Bal Kishan Das</Link></li>
              <li><Link to="/products">All Products Catalog</Link></li>
              <li><Link to="/brands">Authorized Brands</Link></li>
              <li><Link to="/clients">Our Happy Clients</Link></li>
              <li><Link to="/blog">Technical Blog &amp; Guides</Link></li>
              <li><Link to="/contact">Contact Us &amp; RFQ</Link></li>
            </ul>
          </div>

          {/* Col 3: Product Divisions */}
          <div className="foot-col">
            <h4>Product Divisions</h4>
            <ul className="foot-links">
              <li><Link to="/products?cat=lifting">Lifting &amp; Hoists (JCB/Ferreterro)</Link></li>
              <li><Link to="/products?cat=tools">De Neers Precision Hand Tools</Link></li>
              <li><Link to="/products?cat=safety">Safety Shoes &amp; Helmets (Delta Plus)</Link></li>
              <li><Link to="/products?cat=chains">Diamond Roller Chains &amp; Sprockets</Link></li>
              <li><Link to="/products?cat=wire-ropes">Mahadev Steel Wire Rope Slings</Link></li>
              <li><Link to="/about#customization">Custom Rigging &amp; Re-engineering</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="foot-col">
            <h4>Contact &amp; Location</h4>
            <div className="foot-contact-list">
              <div className="fc-item">
                <MapPin size={18} style={{ color: 'var(--amber)', flexShrink: 0, marginTop: '3px' }} />
                <span>{siteInfo.address}</span>
              </div>
              <div className="fc-item">
                <Phone size={18} style={{ color: 'var(--amber)', flexShrink: 0, marginTop: '3px' }} />
                <span>
                  <a href={`tel:${siteInfo.phonePrimary}`}>{siteInfo.phonePrimary}</a><br />
                  <a href={`tel:${siteInfo.phoneSecondary}`}>{siteInfo.phoneSecondary}</a>
                </span>
              </div>
              <div className="fc-item">
                <Mail size={18} style={{ color: 'var(--amber)', flexShrink: 0, marginTop: '3px' }} />
                <span><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <div>&copy; 2024–2026 Bal Kishan Das (Balkishan Dass Company). All Rights Reserved.</div>
          <div>Supplying Quality Industrial Hardware, Lifting &amp; Safety Equipment Across India &amp; Globally.</div>
        </div>
      </div>
    </footer>
  );
}
