import React from 'react';
import { Building2, Factory, Warehouse, Flame, Anchor, Zap } from 'lucide-react';
import { industriesServed } from '../data/siteData';

const iconMap = {
  Building: Building2,
  Factory: Factory,
  Warehouse: Warehouse,
  Flame: Flame,
  Anchor: Anchor,
  Zap: Zap
};

export default function IndustriesGrid() {
  return (
    <section className="band band-white" id="industries">
      <div className="wrap">
        <div className="head">
          <div className="kicker">Core Sectors</div>
          <h2>Industries We Serve</h2>
          <p className="lead">
            Supporting mission-critical operations across diverse industrial, construction, and engineering sectors nationwide.
          </p>
        </div>

        <div className="ind-grid">
          {industriesServed.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <div key={idx} className="ind-card">
                <div className="ind-icon">
                  <Icon size={24} />
                </div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
