import React from 'react';

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8rem 2rem 4rem',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4rem',
    maxWidth: '1200px',
    width: '100%',
    zIndex: 1,
    flexWrap: 'wrap',
  },
  content: {
    flex: '1 1 500px',
  },
  imageWrapper: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(83, 74, 183, 0.15)',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(83,74,183,0.35) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    pointerEvents: 'none',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(127, 119, 221, 0.12)',
    border: '1px solid rgba(127, 119, 221, 0.3)',
    borderRadius: '999px',
    padding: '0.35rem 1rem',
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#AFA9EC',
    marginBottom: '2rem',
    letterSpacing: '0.02em',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#7F77DD',
    display: 'inline-block',
    animation: 'pulse 2s ease-in-out infinite',
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    marginBottom: '1.5rem',
    maxWidth: '900px',
    color: '#000',
  },
  accent: {
    color: '#7F77DD',
  },
  sub: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(44, 44, 42, 0.7)',
    maxWidth: '600px',
    lineHeight: 1.7,
    marginBottom: '3rem',
    fontWeight: 400,
  },
  ctas: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    background: '#534AB7',
    color: '#fff',
    border: 'none',
    borderRadius: '999px',
    padding: '0.8rem 2rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.15s',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#2C2C2A',
    border: '1px solid rgba(44, 44, 42, 0.2)',
    borderRadius: '999px',
    padding: '0.8rem 2rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'border-color 0.2s, color 0.2s',
  },
  scroll: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.4rem',
    color: 'rgba(44, 44, 42, 0.4)',
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
  },
  line: {
    width: 1,
    height: 40,
    background: 'linear-gradient(to bottom, rgba(127,119,221,0.6), transparent)',
    animation: 'scrollLine 2s ease-in-out infinite',
  },
};

export default function Hero() {
  return (
    <section style={styles.section} id="hero">
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes scrollLine { 0%,100%{opacity:0.6; transform:scaleY(1)} 50%{opacity:0.2; transform:scaleY(0.6)} }
      `}</style>
      <div style={styles.bg} />
      <div style={{ ...styles.orb, width: 400, height: 400, background: 'rgba(83,74,183,0.15)', top: '-100px', right: '-100px' }} />
      <div style={{ ...styles.orb, width: 300, height: 300, background: 'rgba(175,169,236,0.08)', bottom: '0', left: '-50px' }} />

      <div style={styles.container}>
        <div style={styles.content}>


          <h1 style={styles.h1}>
            Building the future of<br />
            <span style={styles.accent}>Machine Learning</span><br />

          </h1>

          <p style={styles.sub}>
            We are a team of developers contributing to{' '}
            <strong style={{ color: '#2C2C2A', fontWeight: 600 }}>AutoEmulate</strong>
            {' '}— an open-source ML project by the Alan Turing Institute —
            through the Gaza Sky Geeks mentorship programme.
          </p>

          <div style={styles.ctas}>
            <button
              style={styles.btnPrimary}
              onClick={() => document.getElementById('contributions')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={(e) => { e.target.style.background = '#3C3489'; }}
              onMouseLeave={(e) => { e.target.style.background = '#534AB7'; }}
            >
              View Our Work
            </button>
            <button
              style={styles.btnSecondary}
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={(e) => { e.target.style.borderColor = 'rgba(127,119,221,0.5)'; e.target.style.color = '#534AB7'; }}
              onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(44, 44, 42, 0.2)'; e.target.style.color = '#2C2C2A'; }}
            >
              Meet the Team
            </button>
          </div>
        </div>

        <div style={styles.imageWrapper}>
          <img src="/AE.v26NTE8o.png" alt="AutoEmulate Dashboard" style={styles.img} />
        </div>
      </div>

      <div style={styles.scroll}>
        <div style={styles.line} />
        SCROLL
      </div>
    </section>
  );
}
