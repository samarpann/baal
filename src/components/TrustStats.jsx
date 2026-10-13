import React from 'react';
import { Award, Package, ShieldCheck, CheckCircle } from 'lucide-react';

const icons = [Award, Package, ShieldCheck, CheckCircle];

export default function TrustStats({ stats }) {
  return (
    <div className="trust-band">
      <div className="wrap">
        <div className="trust-band-grid">
          {stats.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="trust-band-item">
                <div className="trust-band-icon">
                  <Icon size={26} />
                </div>
                <div>
                  <div className="trust-band-val">{item.val}</div>
                  <div className="trust-band-lbl">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
