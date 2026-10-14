import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function Contact({ onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    product: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, company, product, message } = formData;
    const waText = encodeURIComponent(
      `Hello Balkishan Dass Ashok Kumar,\nI would like an inquiry from your contact page:\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Email: ${email}\n` +
      (company ? `• Company: ${company}\n` : '') +
      `• Product / Brand: ${product}\n` +
      `• Message: ${message}`
    );
    const waUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${waText}`;

    if (onToast) {
      onToast(`Thank you, ${name}! Your inquiry has been logged. Opening WhatsApp...`);
    }

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="band band-dark" style={{ padding: '60px 0 45px', background: 'linear-gradient(180deg, #18283d 0%, #111e2f 100%)' }}>
        <div className="wrap">
          <div className="head">
            <div className="kicker">Get In Touch</div>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(30px, 3.8vw, 42px)', marginBottom: '12px' }}>
              Contact Balkishan Dass Ashok Kumar
            </h1>
            <p className="lead" style={{ color: '#b3c5d8' }}>
              Speak with our technical sales engineers for wholesale pricing, dealer agreements, technical data sheets, and custom rigging fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS & FORM */}
      <section className="band band-white">
        <div className="wrap">
          <div className="contact-page-grid">

            {/* Left: Contact Information Cards */}
            <div>
              <div className="kicker">Direct Reach</div>
              <h2>Head Office &amp; Distribution Hub</h2>
              <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.65, marginBottom: '24px' }}>
                Located in Delhi’s historic industrial trading center inside Ajmeri Gate, we offer quick local pickups and daily consolidated dispatches across all Indian industrial corridors.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#f7f9fc', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
                  <div className="trust-band-icon" style={{ background: '#eaf1f8', color: 'var(--navy)' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-deep)', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                      Physical Address
                    </strong>
                    <p style={{ color: 'var(--text-body)', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>
                      {siteInfo.address}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#f7f9fc', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
                  <div className="trust-band-icon" style={{ background: 'var(--amber-light)', color: 'var(--amber-ink)' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-deep)', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                      Telephone &amp; WhatsApp
                    </strong>
                    <p style={{ color: 'var(--text-body)', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
                      Mobile / WhatsApp: <a href={`tel:${siteInfo.phonePrimary}`} style={{ color: 'var(--navy)', fontWeight: 600 }}>{siteInfo.phonePrimary}</a><br />
                      Landline: <a href={`tel:${siteInfo.phoneSecondary}`} style={{ color: 'var(--navy)', fontWeight: 600 }}>{siteInfo.phoneSecondary}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#f7f9fc', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
                  <div className="trust-band-icon" style={{ background: '#eaf1f8', color: 'var(--navy)' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-deep)', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                      Official Email
                    </strong>
                    <p style={{ color: 'var(--text-body)', fontSize: '14px', margin: 0 }}>
                      <a href={`mailto:${siteInfo.email}`} style={{ color: 'var(--navy)', fontWeight: 600 }}>{siteInfo.email}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#f7f9fc', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
                  <div className="trust-band-icon" style={{ background: '#eaf1f8', color: 'var(--navy)' }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-deep)', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                      Business Hours
                    </strong>
                    <p style={{ color: 'var(--text-body)', fontSize: '14px', margin: 0 }}>
                      Monday – Saturday: 09:30 AM to 07:30 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-card">
              <div className="kicker">Inquiry Form</div>
              <h2 style={{ marginBottom: '8px' }}>Send a Direct Message</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '24px' }}>
                Complete the form below to receive a response from our sales team within 2 hours.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="contactName">Your Name *</label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactPhone">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 9212086465"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactEmail">Email Address *</label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactCompany">Company / Organization</label>
                    <input
                      type="text"
                      id="contactCompany"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Infrastructure Ltd"
                    />
                  </div>

                  <div className="form-group full">
                    <label htmlFor="contactProduct">Product or Brand of Interest</label>
                    <select
                      id="contactProduct"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Industrial Inquiry</option>
                      <option value="Ferreterro Lifting Equipment">Ferreterro Lifting Gear &amp; Slings</option>
                      <option value="JCB Hoists &amp; Clamps">JCB Material Handling &amp; Beam Clamps</option>
                      <option value="De Neers Hand Tools">De Neers Precision Industrial Tools</option>
                      <option value="Delta Plus PPE">Delta Plus PPE &amp; Safety Helmets</option>
                      <option value="UrbanLift Rigging Hardware">UrbanLift Rigging Gear, Shackles &amp; Clamps</option>
                      <option value="Diamond Roller Chains">Diamond Roller Chains &amp; Sprockets</option>
                      <option value="Mahadev Wire Rope Slings">Mahadev Steel Wire Ropes</option>
                      <option value="Custom JCB Re-engineering">Custom Re-engineering &amp; Rigging</option>
                    </select>
                  </div>

                  <div className="form-group full">
                    <label htmlFor="contactMsg">Message / Specifications *</label>
                    <textarea
                      id="contactMsg"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please detail your required sizes, quantities, tonnage capacity, or destination pin code..."
                    />
                  </div>

                  <div className="form-group full">
                    <button type="submit" className="btn btn-amber" style={{ width: '100%' }}>
                      Submit Inquiry &amp; Launch WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
