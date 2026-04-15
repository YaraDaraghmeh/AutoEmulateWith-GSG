import React from 'react';

const styles = {
  section: {
    padding: '7rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  label: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    color: '#7F77DD',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    marginBottom: '0.75rem',
  },
  sub: {
    color: 'rgba(44, 44, 42, 0.7)',
    fontSize: '1rem',
    fontWeight: 400,
    marginBottom: '3.5rem',
    maxWidth: '500px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#fff',
    border: '1px solid rgba(127, 119, 221, 0.15)',
    borderRadius: '16px',
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
  },
  type: {
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#7F77DD',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.4,
  },
  desc: {
    fontSize: '0.85rem',
    color: 'rgba(44, 44, 42, 0.6)',
    fontWeight: 400,
    lineHeight: 1.6,
    flex: 1,
  },
  arrow: {
    alignSelf: 'flex-end',
    fontSize: '1.1rem',
    color: 'rgba(127,119,221,0.5)',
    transition: 'color 0.2s, transform 0.2s',
  },
  empty: {
    border: '1px dashed rgba(127, 119, 221, 0.25)',
    borderRadius: '16px',
    padding: '2.5rem',
    textAlign: 'center',
    color: 'rgba(44, 44, 42, 0.5)',
    fontSize: '0.9rem',
    fontWeight: 400,
    gridColumn: '1 / -1',
  },
};

const resources = [
  // Add your resources here once available
  // { type: 'Blog Post', title: 'Getting started with AutoEmulate', desc: '...', url: '#' },
];

export default function Resources() {
  return (
    <section style={styles.section} id="resources">
      <p style={styles.label}>Resources</p>
      <h2 style={styles.h2}>Dissemination &amp; writeups</h2>
      <p style={styles.sub}>Blog posts, presentations, and demos from our team.</p>
      <div style={styles.grid}>
        {resources.length === 0 ? (
          <div style={styles.empty}>
            Coming soon — blog posts, slides, and demos will appear here as we produce them.
          </div>
        ) : (
          resources.map((r) => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(127,119,221,0.35)';
                e.currentTarget.style.background = 'rgba(127,119,221,0.03)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(83, 74, 183, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(127,119,221,0.15)';
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <p style={styles.type}>{r.type}</p>
              <p style={styles.title}>{r.title}</p>
              <p style={styles.desc}>{r.desc}</p>
              <span style={styles.arrow}>↗</span>
            </a>
          ))
        )}
      </div>
    </section>
  );
}
