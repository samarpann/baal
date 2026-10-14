import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function RfqModal({ isOpen, onClose, initialProduct = '', onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    } else {
      setFormData(prev => ({ ...prev, product: 'General Industrial Equipment' }));
    }
  }, [initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, product, quantity, message } = formData;

    const waText = encodeURIComponent(
      `Hello Balkishan Dass Ashok Kumar,\nI would like an RFQ quote:\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Email: ${email}\n` +
      `• Requirement / Product: ${product}\n` +
      (quantity ? `• Quantity: ${quantity}\n` : '') +
      (message ? `• Details: ${message}` : '')
    );
    const waUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${waText}`;

    if (onToast) {
      onToast(`Thank you, ${name}! Opening WhatsApp with your RFQ details...`);
    }

    onClose();

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <h3>Request Product Quotation</h3>
        <p className="form-note">Get fast wholesale pricing on genuine industrial equipment directly from Balkishan Dass.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group full">
              <label>Selected Product / Requirement</label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="Product name or requirement"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Full Name"
              />
            </div>

            <div className="form-group">
              <label>Phone / WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 9212086465"
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.name@company.com"
              />
            </div>

            <div className="form-group">
              <label>Quantity Needed</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 10 pcs / Bulk"
              />
            </div>

            <div className="form-group full">
              <label>Project Details / Specifications</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Provide any specific capacity ratings, sizes or project timelines..."
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
  );
}
