import React from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';
import { clientsData } from '../data/clients';

export default function Clients({ onOpenRfq }) {
  return (
    <>
      {/* PAGE HERO */}
      <section className="band band-dark" style={{ padding: '60px 0 45px', background: 'linear-gradient(180deg, #18283d 0%, #111e2f 100%)' }}>
        <div className="wrap">
          <div className="head">
            <div className="kicker">Our Clients</div>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(30px, 3.8vw, 42px)', marginBottom: '12px' }}>
              Our Happy Clients &amp; Proven Project History
            </h1>
            <p className="lead" style={{ color: '#b3c5d8' }}>
              For over 40 years, Balkishan Dass Company has supplied construction and industrial sites throughout the world with top quality, reliable lifting and rigging solutions. We tailor our clients’ rigging, lifting, and fall protection equipment to meet the demands of each job.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS GRID */}
      <section className="band band-white">
        <div className="wrap">
          <div className="head center">
            <div className="kicker">Corporate Partners</div>
            <h2>Enterprise Clients Relying On Our Equipment</h2>
            <p className="lead">
              We supply premier engineering conglomerates, public sector undertakings, infrastructure developers, and specialized manufacturing plants.
            </p>
          </div>

          <div className="client-logo-grid" style={{ marginBottom: '60px' }}>
            {clientsData.map((client) => (
              <div key={client.id} className="client-logo-card">
                <img src={client.img} alt={client.name} />
              </div>
            ))}
          </div>

          {/* VALUE DELIVERED ACCREDITATION */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#f7f9fc', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '32px 26px' }}>
              <div className="trust-band-icon" style={{ marginBottom: '18px' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>Zero-Failure Rigging Integrity</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Every batch of wire rope slings, chain pulley blocks, and electric hoists undergoes stringent proof load testing with certified documentation for site compliance.
              </p>
            </div>

            <div style={{ background: '#f7f9fc', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '32px 26px' }}>
              <div className="trust-band-icon" style={{ marginBottom: '18px' }}>
                <Clock size={26} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>Same-Day Emergency Dispatch</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Centrally situated inside Ajmeri Gate Delhi, our rapid response inventory dispatch keeps critical projects on schedule during emergency maintenance shutdowns.
              </p>
            </div>

            <div style={{ background: '#f7f9fc', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '32px 26px' }}>
              <div className="trust-band-icon" style={{ marginBottom: '18px' }}>
                <Users size={26} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>Dedicated Account Engineers</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: '1.6' }}>
                Our seasoned technical team consults with site engineers, offering customized load-rating recommendations, tooling kits, and special fabrication setups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
