import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { productsData } from '../data/products';

export default function Products({ onOpenRfq }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (urlCategory) {
      setActiveCategory(urlCategory);
    }
  }, [urlCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat });
    }
  };

  const filteredProducts = productsData.filter(product => {
    const matchesCat = (activeCategory === 'all' || product.category === activeCategory);
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = !q ||
      product.title.toLowerCase().includes(q) ||
      product.desc.toLowerCase().includes(q) ||
      product.brand.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <>
      {/* PAGE HERO */}
      <section className="band band-dark" style={{ padding: '60px 0 45px', background: 'linear-gradient(180deg, #18283d 0%, #111e2f 100%)' }}>
        <div className="wrap">
          <div className="head">
            <div className="kicker">Industrial Inventory</div>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(30px, 3.8vw, 42px)', marginBottom: '12px' }}>
              Complete Industrial Hardware &amp; Equipment Catalog
            </h1>
            <p className="lead" style={{ color: '#b3c5d8' }}>
              Filter by category or search our complete stock of lifting hoists, certified slings, precision De Neers hand tools, Delta Plus PPE, safety footwear, and roller chains.
            </p>
          </div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section className="band band-light">
        <div className="wrap">
          <div className="catalog-toolbar">
            <div className="filter-tabs">
              <button
                className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                All Products
              </button>
              <button
                className={`filter-tab ${activeCategory === 'lifting' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('lifting')}
              >
                Lifting &amp; Hoists
              </button>
              <button
                className={`filter-tab ${activeCategory === 'tools' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('tools')}
              >
                Hand Tools
              </button>
              <button
                className={`filter-tab ${activeCategory === 'safety' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('safety')}
              >
                Safety Shoes &amp; PPE
              </button>
              <button
                className={`filter-tab ${activeCategory === 'chains' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('chains')}
              >
                Chains &amp; Transmission
              </button>
              <button
                className={`filter-tab ${activeCategory === 'wire-ropes' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('wire-ropes')}
              >
                Wire Ropes &amp; Slings
              </button>
            </div>

            <div className="search-box">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search by tool name, size or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px', fontSize: '14px', color: 'var(--muted)' }}>
            Showing <b>{filteredProducts.length}</b> industrial products
          </div>

          <div className="product-grid">
            {filteredProducts.map((prod) => (
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
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
