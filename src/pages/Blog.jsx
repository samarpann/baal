import React from 'react';
import { blogsData } from '../data/blogs';

export default function Blog({ onOpenRfq }) {
  return (
    <>
      {/* PAGE HERO */}
      <section className="band band-dark" style={{ padding: '60px 0 45px', background: 'linear-gradient(180deg, #18283d 0%, #111e2f 100%)' }}>
        <div className="wrap">
          <div className="head">
            <div className="kicker">Technical Knowledge</div>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(30px, 3.8vw, 42px)', marginBottom: '12px' }}>
              Industrial Safety &amp; Tool Engineering Guides
            </h1>
            <p className="lead" style={{ color: '#b3c5d8' }}>
              Authoritative technical reviews and field guidelines published by our engineering experts on hand tool longevity, hoist safety protocols, and load rigging.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES CONTAINER */}
      <section className="band band-white">
        <div className="wrap" style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '70px' }}>
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              id={blog.id}
              style={{
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <img
                src={blog.img}
                alt={blog.title}
                style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
              />
              <div className="blog-article-content">
                <div className="blog-meta" style={{ marginBottom: '16px' }}>
                  <span style={{ color: 'var(--amber-ink)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {blog.category} • {blog.date}
                  </span>
                  <span>By {blog.author}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: '20px', color: 'var(--ink)' }}>
                  {blog.title}
                </h2>

                <div style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <p>{blog.excerpt}</p>

                  {blog.sections.map((sec, idx) => (
                    <div key={idx}>
                      <h3 style={{ fontSize: '20px', color: 'var(--navy-deep)', marginTop: '10px', marginBottom: '8px' }}>
                        {sec.heading}
                      </h3>
                      <p>{sec.content}</p>
                    </div>
                  ))}

                  <div style={{ background: '#f4f7fb', borderLeft: '4px solid var(--amber)', padding: '20px', borderRadius: '4px', marginTop: '14px' }}>
                    <strong style={{ color: 'var(--navy-deep)', display: 'block', marginBottom: '6px' }}>
                      Require Assistance or Project Sizing?
                    </strong>
                    <p style={{ margin: 0, fontSize: '14.5px' }}>
                      Our engineering division helps size lifting hoists, certified rigging slings, and workshop toolkits to your exact plant requirements.
                    </p>
                    <button
                      className="btn btn-amber"
                      style={{ marginTop: '14px' }}
                      onClick={() => onOpenRfq(`Blog Inquiry: ${blog.title}`)}
                    >
                      Inquire on this Equipment
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
