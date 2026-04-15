import React from 'react';
import contributions from '../data/contributions.json';

const styles = {
  section: {
    padding: '7rem 2rem',
    background: '#fff',
    borderTop: '1px solid rgba(127, 119, 221, 0.1)',
    borderBottom: '1px solid rgba(127, 119, 221, 0.1)',
  },
  inner: {
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
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  item: {
    background: '#fff',
    border: '1px solid rgba(127, 119, 221, 0.15)',
    borderRadius: '12px',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    transition: 'border-color 0.2s',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flex: 1,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: '8px',
    background: 'rgba(127, 119, 221, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    flexShrink: 0,
  },
  title: {
    fontWeight: 500,
    fontSize: '0.95rem',
    marginBottom: '0.15rem',
  },
  desc: {
    fontSize: '0.82rem',
    color: 'rgba(44, 44, 42, 0.6)',
    fontWeight: 400,
  },
  badge: {
    fontSize: '0.72rem',
    fontWeight: 500,
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    flexShrink: 0,
  },
  merged: {
    background: 'rgba(26, 157, 117, 0.15)',
    color: '#5DCAA5',
    border: '1px solid rgba(26, 157, 117, 0.2)',
  },
  open: {
    background: 'rgba(127, 119, 221, 0.15)',
    color: '#AFA9EC',
    border: '1px solid rgba(127, 119, 221, 0.2)',
  },
  review: {
    background: 'rgba(239, 159, 39, 0.15)',
    color: '#EF9F27',
    border: '1px solid rgba(239, 159, 39, 0.2)',
  },
};


const statusLabel = { merged: 'Merged ✓', review: 'In Review', open: 'Open' };
const statusStyle = { merged: styles.merged, review: styles.review, open: styles.open };

export default function Contributions() {
  return (
    <section style={styles.section} id="contributions">
      <div style={styles.inner}>
        <p style={styles.label}>Contributions</p>
        <h2 style={styles.h2}>Our work on AutoEmulate</h2>
        <p style={styles.sub}>Pull requests, bug fixes, and features we've shipped to the project.</p>
        <div style={styles.list}>
          {contributions.map((c) => (
            <div
              key={c.pr}
              style={styles.item}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(127,119,221,0.3)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(127,119,221,0.12)')}
            >
              <div style={styles.left}>
                <div style={styles.icon}>{c.icon}</div>
                <div>
                  <p style={styles.title}>{c.title} <span style={{ color: 'rgba(44,44,42,0.4)', fontWeight: 400 }}>{c.pr}</span></p>
                  <p style={styles.desc}>{c.desc}</p>
                </div>
              </div>
              <span style={{ ...styles.badge, ...statusStyle[c.status] }}>{statusLabel[c.status]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
