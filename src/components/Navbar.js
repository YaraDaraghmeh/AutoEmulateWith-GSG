import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'background 0.3s ease',
  },
  navScrolled: {
    background: 'rgba(248, 247, 255, 0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(127, 119, 221, 0.15)',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '1.2rem',
    color: '#534AB7',
    letterSpacing: '-0.02em',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  link: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'rgba(44, 44, 42, 0.7)',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
};

const navItems = ['About', 'Team', 'Contributions', 'Resources', 'Connect'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <span style={styles.logo}>AutoEmulate ×</span>
      <ul style={styles.links}>
        {navItems.map((item) => (
          <li key={item}>
            <span
              style={styles.link}
              onClick={() => scrollTo(item)}
              onMouseEnter={(e) => (e.target.style.color = '#534AB7')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(44, 44, 42, 0.7)')}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
