import React from 'react';

const styles = {
  section: {
    padding: '7rem 2rem 5rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(83,74,183,0.2) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  inner: {
    maxWidth: '600px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
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
    marginBottom: '1rem',
  },
  p: {
    color: 'rgba(44, 44, 42, 0.7)',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.7,
    marginBottom: '3rem',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '5rem',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.75rem',
    borderRadius: '999px',
    border: '1px solid rgba(127, 119, 221, 0.25)',
    color: '#AFA9EC',
    fontSize: '0.9rem',
    fontWeight: 500,
    fontFamily: 'var(--font-body)',
    transition: 'background 0.2s, border-color 0.2s',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  divider: {
    borderTop: '1px solid rgba(127, 119, 221, 0.2)',
    paddingTop: '2rem',
    color: 'rgba(44, 44, 42, 0.5)',
    fontSize: '0.8rem',
    fontWeight: 400,
  },
};

const links = [
  { label: 'GitHub Org', url: 'https://github.com', icon: '⌥' },
  { label: 'AutoEmulate Repo', url: 'https://github.com/alan-turing-institute/autoemulate', icon: '↗' },
  { label: 'Gaza Sky Geeks', url: 'https://gazaskygeeks.com', icon: '↗' },
];

export default function Connect() {
  return (
    <section style={styles.section} id="connect">
      <div style={styles.bg} />
      <div style={styles.inner}>
        <p style={styles.label}>Connect</p>
        <h2 style={styles.h2}>Get in touch with us</h2>
        <p style={styles.p}>
          Interested in our work, want to collaborate, or looking to hire? 
          Reach out through our GitHub or connect with us individually on LinkedIn.
        </p>
        <div style={styles.links}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(127,119,221,0.06)';
                e.currentTarget.style.borderColor = 'rgba(127,119,221,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(127,119,221,0.25)';
              }}
            >
              {l.icon} {l.label}
            </a>
          ))}
        </div>
        <div style={styles.divider}>
          © {new Date().getFullYear()} AutoEmulate Team · Gaza Sky Geeks × Alan Turing Institute
        </div>
      </div>
    </section>
  );
}
