import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function FloatingActions() {
  return (
    <div className="ps-fabs">
      <a href={`tel:${siteInfo.phonePrimary}`} aria-label="Call Balkishan Dass">
        <Phone size={22} />
        <span className="fab-label">Call {siteInfo.phonePrimary}</span>
      </a>

      <a
        href={`https://wa.me/${siteInfo.whatsappNumber}?text=Hello%20Balkishan%20Dass%2C%20I%20am%20interested%20in%20an%20industrial%20quotation.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Quick RFQ"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5s-.6-1.6-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.7.7-1 1.6-1 2.7 0 1.6 1.1 3.1 1.3 3.4.2.2 2.3 3.5 5.5 4.8 2 .8 2.7.9 3.7.7.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15l-1.3 4.7L7 20.4A10 10 0 1 0 12 2z" />
        </svg>
        <span className="fab-label">WhatsApp Quick RFQ</span>
      </a>

      <a href={`mailto:${siteInfo.email}`} aria-label="Email Balkishan Dass">
        <Mail size={22} />
        <span className="fab-label">Email Us</span>
      </a>
    </div>
  );
}
