import React from 'react';
import members from '../data/team.json';

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
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#fff',
    border: '1px solid rgba(127, 119, 221, 0.15)',
    borderRadius: '16px',
    padding: '1.75rem',
    transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
    cursor: 'default',
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1.25rem',
    border: '2px solid rgba(127, 119, 221, 0.1)',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: 'rgba(127, 119, 221, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.1rem',
    color: '#AFA9EC',
    marginBottom: '1.25rem',
  },
  name: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.05rem',
    marginBottom: '0.25rem',
    color: '#000',
  },
  role: {
    fontSize: '0.85rem',
    color: 'rgba(44, 44, 42, 0.6)',
    fontWeight: 400,
    marginBottom: '1rem',
  },
  links: {
    display: 'flex',
    gap: '0.6rem',
    flexWrap: 'wrap',
  },
  linkBtn: {
    fontSize: '0.75rem',
    fontWeight: 500,
    padding: '0.3rem 0.75rem',
    borderRadius: '999px',
    border: '1px solid rgba(127, 119, 221, 0.25)',
    color: '#AFA9EC',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'background 0.2s, border-color 0.2s',
    fontFamily: 'var(--font-body)',
    textDecoration: 'none',
    display: 'inline-block',
  },
};


function initials(name) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
}

export default function Team() {
  return (
    <section style={styles.section} id="team">
      <p style={styles.label}>Team</p>
      <h2 style={styles.h2}>Meet the contributors</h2>
      <p style={styles.sub}>Developers from Gaza building open-source ML tools for the world.</p>
      <div style={styles.grid}>
        {members.map((m) => (
          <div
            key={m.name}
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
            {m.image ? (
              <img src={m.image} alt={m.name} style={styles.img} />
            ) : (
              <div style={styles.avatar}>{initials(m.name)}</div>
            )}
            <p style={styles.name}>{m.name}</p>
            <p style={styles.role}>{m.role}</p>
            <div style={styles.links}>
              {m.github && (
                <a
                  href={`https://github.com/${m.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.linkBtn}
                >
                  GitHub
                </a>
              )}
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.linkBtn}
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
