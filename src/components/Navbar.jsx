import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function Navbar({ onOpenRfq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileBrandsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileBrandsOpen(false);
  };

  return (
    <>
      {/* TOP STRIP */}
      <div className="topstrip">
        <div className="wrap">
          <div className="topstrip-left">
            <span className="topstrip-item">
              <MapPin size={14} />
              <span>{siteInfo.address}</span>
            </span>
            <span className="topstrip-item topstrip-hours">
              <Clock size={14} />
              <span>{siteInfo.hours}</span>
            </span>
          </div>
          <div className="topstrip-right">
            <span className="topstrip-item">
              <Phone size={14} />
              <a href={`tel:${siteInfo.phonePrimary}`}>{siteInfo.phonePrimary}</a>
            </span>
            <span className="topstrip-item topstrip-email">
              <Mail size={14} />
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            </span>
            <span className="topstrip-badge">40+ Years</span>
          </div>
        </div>
      </div>

      {/* SITE HEADER */}
      <header className="site">
        <div className="wrap">
          <Link className="brand" to="/" onClick={closeMobileMenu}>
            <div className="logo-chip">
              <img src="/assets/logo.png" alt="Balkishan Dass Ashok Kumar Logo" width="44" height="44" />
            </div>
            <div className="brand-text">
              <div className="brand-mark">BALKISHAN DASS <span>ASHOK KUMAR</span></div>
              <div className="brand-tagline">Lifting • Hand Tools • Rigging &amp; Safety</div>
            </div>
          </Link>

          {/* DESKTOP & MOBILE NAVIGATION */}
          <nav className={`main ${mobileMenuOpen ? 'open' : ''}`} id="nav">
            <div className="mobile-nav-header">
              <div className="brand-mark" style={{ fontSize: '16px' }}>
                BALKISHAN DASS <span>ASHOK KUMAR</span>
              </div>
              <button className="mobile-close-btn" onClick={closeMobileMenu} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <NavLink to="/" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`} onClick={closeMobileMenu} end>
              Home
            </NavLink>

            {/* Products Dropdown / Accordion */}
            <div className={`has-dd ${mobileProductsOpen ? 'expanded' : ''}`}>
              <div className="dd-header-row">
                <NavLink to="/products" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
                  Products
                </NavLink>
                <button
                  type="button"
                  className="dd-toggle-btn"
                  onClick={() => setMobileProductsOpen(prev => !prev)}
                  aria-label="Toggle products dropdown"
                >
                  <ChevronDown size={16} className={`caret ${mobileProductsOpen ? 'rotate' : ''}`} />
                </button>
              </div>
              <div className={`dd ${mobileProductsOpen ? 'show-mobile' : ''}`}>
                <Link to="/products?cat=lifting" onClick={closeMobileMenu}>Lifting &amp; Material Handling</Link>
                <Link to="/products?cat=rigging" onClick={closeMobileMenu}>Rigging &amp; Hardware Fittings</Link>
                <Link to="/products?cat=tools" onClick={closeMobileMenu}>Hand Tools &amp; Hardware</Link>
                <Link to="/products?cat=safety" onClick={closeMobileMenu}>Safety Shoes &amp; PPE</Link>
                <Link to="/products?cat=chains" onClick={closeMobileMenu}>Chains &amp; Power Transmission</Link>
                <Link to="/products?cat=wire-ropes" onClick={closeMobileMenu}>Wire Ropes &amp; Rigging Slings</Link>
                <Link to="/products" onClick={closeMobileMenu} style={{ fontWeight: 700, color: 'var(--amber-ink)' }}>
                  View All Products &rarr;
                </Link>
              </div>
            </div>

            {/* Brands Dropdown / Accordion */}
            <div className={`has-dd ${mobileBrandsOpen ? 'expanded' : ''}`}>
              <div className="dd-header-row">
                <NavLink to="/brands" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
                  Brands
                </NavLink>
                <button
                  type="button"
                  className="dd-toggle-btn"
                  onClick={() => setMobileBrandsOpen(prev => !prev)}
                  aria-label="Toggle brands dropdown"
                >
                  <ChevronDown size={16} className={`caret ${mobileBrandsOpen ? 'rotate' : ''}`} />
                </button>
              </div>
              <div className={`dd ${mobileBrandsOpen ? 'show-mobile' : ''}`}>
                <Link to="/brands#de-neers" onClick={closeMobileMenu}>De Neers (Hand Tools)</Link>
                <Link to="/brands#ferreterro" onClick={closeMobileMenu}>Ferreterro (Lifting Equipment)</Link>
                <Link to="/brands#jcb" onClick={closeMobileMenu}>JCB (Lifting &amp; Hoists)</Link>
                <Link to="/brands#urbanlift" onClick={closeMobileMenu}>UrbanLift (Rigging Hardware)</Link>
                <Link to="/brands#delta-plus" onClick={closeMobileMenu}>Delta Plus (Safety &amp; PPE)</Link>
                <Link to="/brands#mahadev" onClick={closeMobileMenu}>Mahadev Wire Ropes</Link>
                <Link to="/brands#diamond" onClick={closeMobileMenu}>Diamond (Roller Chains)</Link>
              </div>
            </div>

            <NavLink to="/about" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              About Us
            </NavLink>

            <NavLink to="/clients" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Our Clients
            </NavLink>

            <NavLink to="/blog" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Blog
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Contact Us
            </NavLink>

            <div className="mobile-menu-footer">
              <button
                className="btn btn-amber"
                style={{ width: '100%', marginBottom: '16px' }}
                onClick={() => {
                  closeMobileMenu();
                  onOpenRfq("Mobile Nav Quote Request");
                }}
              >
                Request a Quote
              </button>

              <div style={{ fontSize: '13px', color: '#c7d5e4', lineHeight: 1.6 }}>
                <div><b>Sales Hotline:</b> <a href={`tel:${siteInfo.phonePrimary}`}>{siteInfo.phonePrimary}</a></div>
                <div><b>Email:</b> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></div>
              </div>
            </div>
          </nav>

          {/* BACKDROP OVERLAY FOR MOBILE DRAWER */}
          {mobileMenuOpen && (
            <div className="mobile-overlay active" onClick={closeMobileMenu}></div>
          )}

          <div className="nav-actions">
            <button className="btn btn-amber nav-quote-btn" onClick={() => onOpenRfq("Navbar Quote Request")}>
              Request a Quote
            </button>
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation" aria-expanded={mobileMenuOpen}>
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
