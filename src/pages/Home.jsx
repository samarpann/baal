import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import TrustStats from '../components/TrustStats';
import CategoryGrid from '../components/CategoryGrid';
import BrandGrid from '../components/BrandGrid';
import DarkTrustBand from '../components/DarkTrustBand';
import IndustriesGrid from '../components/IndustriesGrid';
import { siteInfo, trustStats } from '../data/siteData';
import { productsData } from '../data/products';
import { clientsData } from '../data/clients';
import { blogsData } from '../data/blogs';

export default function Home({ onOpenRfq, onToast }) {

  // RFQ banner form state
  const [bannerForm, setBannerForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Lifting Equipment (Hoists/Clamps/Slings)',
    quantity: '',
    company: '',
    message: ''
  });

  const handleBannerFormChange = (e) => {
    const { name, value } = e.target;
    setBannerForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBannerFormSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, product, quantity, company, message } = bannerForm;
    const waText = encodeURIComponent(
      `Hello Balkishan Dass Ashok Kumar,\nI would like an RFQ quote from your website:\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Email: ${email}\n` +
      (company ? `• Company: ${company}\n` : '') +
      `• Requirement: ${product}\n` +
      (quantity ? `• Quantity: ${quantity}\n` : '') +
      (message ? `• Details: ${message}` : '')
    );
    const waUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${waText}`;

    if (onToast) {
      onToast(`Thank you, ${name}! Opening WhatsApp with your RFQ details...`);
    }

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <>
      {/* 1. HERO SLIDER */}
      <HeroSlider onOpenRfq={onOpenRfq} />

      {/* 2. TRUST STATS STRIP */}
      <TrustStats stats={trustStats} />

      {/* 3. CATEGORIES GRID */}
      <CategoryGrid />

      {/* 4. BRANDS GRID */}
      <BrandGrid />

      {/* 5. DARK TRUST BAND */}
      <DarkTrustBand />

      {/* 6. FEATURED EQUIPMENT HIGHLIGHTS */}
      <section className="band band-light">
        <div className="wrap">
          <div className="head">
            <div className="kicker">Product Showcase</div>
            <h2>Featured Industrial Equipment</h2>
            <p className="lead">
              A sample of our most requested lifting machinery, precision hand tools, rigging hardware, and PPE safety gear. Browse our dedicated catalog page for our complete inventory of 95+ products.
            </p>
          </div>

          <div className="product-grid">
            {productsData.slice(0, 4).map((prod) => (
              <div key={prod.id} className="prod-card" data-category={prod.category}>
                <div className="prod-thumb">
                  <span className="prod-brand-pill">{prod.brand}</span>
                  <img src={prod.img} alt={prod.title} />
                </div>
                <div className="prod-details">
                  <div className="prod-cat-kicker">{prod.categoryName}</div>
                  <h4 className="prod-title">{prod.title}</h4>
                  <p className="prod-desc">{prod.desc}</p>
                  <div className="prod-footer">
                    <span className="prod-status">
                      <span className="prod-status-dot"></span> In Stock
                    </span>
                    <button
                      className="btn-rfq-sm"
                      onClick={() => onOpenRfq(prod.title)}
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/products" className="btn btn-navy">
              View All 95+ Products in Full Catalog <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES SERVED */}
      <IndustriesGrid />

      {/* 8. CLIENT LOGOS STRIP */}
      <section className="band band-light" id="clients">
        <div className="wrap">
          <div className="head center">
            <div className="kicker">Proven Track Record</div>
            <h2>Trusted by Leading Contractors &amp; Enterprises</h2>
            <p className="lead">
              From major engineering EPC contractors to local fabrication facilities, our products power productive and safe work environments every day.
            </p>
          </div>

          <div className="client-logo-grid">
            {clientsData.map((client) => (
              <div key={client.id} className="client-logo-card">
                <img src={client.img} alt={client.name} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '35px' }}>
            <Link to="/clients" className="btn btn-navy">
              View All Enterprise Clients &amp; Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TECHNICAL BLOG HIGHLIGHTS */}
      <section className="band band-white">
        <div className="wrap">
          <div className="head">
            <div className="kicker">Knowledge &amp; Insights</div>
            <h2>Industrial Guides &amp; Technical Articles</h2>
            <p className="lead">
              Expert advice on selecting equipment, ensuring worksite safety, and getting maximum performance from your lifting and hand tools.
            </p>
          </div>

          <div className="blog-grid">
            {blogsData.slice(0, 2).map((blog) => (
              <article key={blog.id} className="blog-card">
                <div className="blog-thumb">
                  <img src={blog.img} alt={blog.title} />
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span>{blog.date}</span>
                    <span>{blog.category}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <Link className="blog-link" to={`/blog#${blog.id}`}>
                    Read Complete Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '35px' }}>
            <Link to="/blog" className="btn btn-navy">
              Read All Technical Guides &amp; Field Articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. RFQ BULK PRICING BANNER */}
      <section className="band band-light" id="contact">
        <div className="wrap">
          <div className="rfq-band">
            <div className="rfq-inner">
              <div className="rfq-info">
                <div className="kicker">Direct Factory Pricing</div>
                <h2>Need Bulk Pricing or a Project Quotation?</h2>
                <p>
                  Whether you need a single hoist or container-load toolkits for major industrial projects, our technical sales engineers offer fast, competitive quotes and dedicated delivery scheduling.
                </p>

                <ul className="rfq-bullets">
                  <li className="rfq-bullet">
                    <Check size={20} style={{ color: 'var(--amber)', flexShrink: 0, marginTop: '2px' }} />
                    <span><b>Certified Quality:</b> Test certificates &amp; proof load inspection reports provided.</span>
                  </li>
                  <li className="rfq-bullet">
                    <Check size={20} style={{ color: 'var(--amber)', flexShrink: 0, marginTop: '2px' }} />
                    <span><b>Competitive Wholesale Rates:</b> Tiered discounting for contractors and dealers.</span>
                  </li>
                  <li className="rfq-bullet">
                    <Check size={20} style={{ color: 'var(--amber)', flexShrink: 0, marginTop: '2px' }} />
                    <span><b>Immediate Stock Dispatch:</b> Fast order fulfillment from our Delhi hub.</span>
                  </li>
                </ul>

                <div className="rfq-direct">
                  <div className="rfq-direct-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="rfq-direct-title">Direct Sales Hotline</div>
                    <div className="rfq-direct-val">{siteInfo.phonePrimary} / {siteInfo.phoneSecondary}</div>
                  </div>
                </div>
              </div>

              <div className="rfq-form-card">
                <h3>Request an Instant Quotation</h3>
                <p className="form-note">Fill in your requirements below for an instant response or quote via WhatsApp / Email.</p>

                <form onSubmit={handleBannerFormSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="rfqName">Your Name *</label>
                      <input
                        type="text"
                        id="rfqName"
                        name="name"
                        value={bannerForm.name}
                        onChange={handleBannerFormChange}
                        required
                        placeholder="e.g. Rajesh Sharma"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="rfqPhone">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        id="rfqPhone"
                        name="phone"
                        value={bannerForm.phone}
                        onChange={handleBannerFormChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="rfqEmail">Email Address *</label>
                      <input
                        type="email"
                        id="rfqEmail"
                        name="email"
                        value={bannerForm.email}
                        onChange={handleBannerFormChange}
                        required
                        placeholder="rajesh@company.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="rfqCategory">Product Division</label>
                      <select
                        id="rfqCategory"
                        name="product"
                        value={bannerForm.product}
                        onChange={handleBannerFormChange}
                      >
                        <option value="Lifting Equipment (Hoists/Clamps/Slings)">Lifting Equipment (Hoists / Clamps / Slings)</option>
                        <option value="UrbanLift Rigging Hardware">UrbanLift Rigging Gear (Shackles / Clamps / Hooks)</option>
                        <option value="De Neers Hand Tools">De Neers Industrial Hand Tools</option>
                        <option value="Delta Plus Safety PPE">Delta Plus PPE (Helmets / Gloves / Harnesses)</option>
                        <option value="Diamond Roller Chains">Diamond Roller Chains &amp; Sprockets</option>
                        <option value="Mahadev Wire Ropes & Slings">Mahadev Wire Ropes &amp; Slings</option>
                        <option value="Custom JCB Re-engineering">Custom Re-engineering &amp; Fabrication</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="rfqQty">Estimated Quantity</label>
                      <input
                        type="text"
                        id="rfqQty"
                        name="quantity"
                        value={bannerForm.quantity}
                        onChange={handleBannerFormChange}
                        placeholder="e.g. 50 pcs / 10 sets"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="rfqCompany">Company / Project Name</label>
                      <input
                        type="text"
                        id="rfqCompany"
                        name="company"
                        value={bannerForm.company}
                        onChange={handleBannerFormChange}
                        placeholder="e.g. Apex Infra Ltd"
                      />
                    </div>

                    <div className="form-group full">
                      <label htmlFor="rfqMsg">Product Specifications / Inquiries</label>
                      <textarea
                        id="rfqMsg"
                        name="message"
                        value={bannerForm.message}
                        onChange={handleBannerFormChange}
                        placeholder="Specify sizes, tonnage capacity, standards or specific model numbers..."
                      />
                    </div>

                    <div className="form-group full">
                      <button type="submit" className="btn btn-amber" style={{ width: '100%' }}>
                        Submit &amp; Open WhatsApp RFQ
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
