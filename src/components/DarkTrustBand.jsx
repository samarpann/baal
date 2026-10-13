import React from 'react';
import { ShieldCheck, CheckCircle2, Wrench, Zap } from 'lucide-react';

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "40+ Years of Field Proven Reliability",
    desc: "For more than four decades, Balkishan Dass has supplied premier construction, heavy engineering, and infrastructure sites with certified lifting and rigging hardware."
  },
  {
    icon: CheckCircle2,
    title: "100% Genuine Authorized Sourcing",
    desc: "Direct supply from industry-defining manufacturers including De Neers, Ferreterro, JCB, Delta Plus, and Mahadev Wire Ropes with factory warranties and test certificates."
  },
  {
    icon: Wrench,
    title: "Engineering Customization & Re-engineering",
    desc: "We re-engineer JCB material handling equipment and custom-rig slings, clamps, and tow straps to meet the exact load parameters of our clients' challenging lifting projects."
  },
  {
    icon: Zap,
    title: "Rapid Dispatch from Delhi Hub",
    desc: "Strategically situated inside Ajmeri Gate Delhi with extensive warehouse inventory ready for immediate shipment across Delhi NCR, pan-India, and international exports."
  }
];

export default function DarkTrustBand() {
  return (
    <section className="band band-dark" id="trust">
      <div className="wrap">
        <div className="head">
          <div className="kicker">Why Balkishan Dass</div>
          <h2>Why Industry Leaders Choose Balkishan Dass</h2>
          <p className="lead">
            Built on four decades of technical integrity, direct factory partnerships, and uncompromising safety standards for heavy industrial operations.
          </p>
        </div>

        <div className="trust-grid">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="trust">
                <div className="ico">
                  <Icon size={26} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
