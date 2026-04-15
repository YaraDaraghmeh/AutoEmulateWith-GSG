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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
    marginTop: '3rem',
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
  },
  p: {
    color: 'rgba(44, 44, 42, 0.7)',
    fontSize: '1rem',
    lineHeight: 1.8,
    fontWeight: 400,
    marginBottom: '1rem',
  },
  card: {
    background: '#fff',
    border: '1px solid rgba(127, 119, 221, 0.15)',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(83, 74, 183, 0.04)',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.1rem',
    marginBottom: '0.75rem',
    color: '#AFA9EC',
  },
  cardText: {
    color: 'rgba(44, 44, 42, 0.65)',
    fontSize: '0.9rem',
    lineHeight: 1.7,
    fontWeight: 400,
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  link: {
    color: '#7F77DD',
    fontWeight: 500,
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  },
};

const cards = [
  {
    title: 'What is AutoEmulate?',
    text: 'An open-source Python library that builds fast ML emulators to replace expensive simulations — making scientific computing more accessible.',
  },
  {
    title: 'Gaza Sky Geeks',
    text: 'A tech hub and incubator in Palestine providing mentorship, training, and opportunities for Palestinian developers to contribute globally.',
  },
  {
    title: 'Alan Turing Institute',
    text: "The UK's national institute for data science and AI, home to world-class research and open-source projects like AutoEmulate.",
  },
];

export default function About() {
  return (
    <section style={styles.section} id="about">
      <p style={styles.label}>About</p>
      <div style={styles.grid}>
        <div>
          <h2 style={styles.h2}>Who we are &amp; what we're doing</h2>
          <p style={styles.p}>
            We are a cohort of developers from Gaza participating in a structured
            mentorship programme run by <strong style={{ color: '#000', fontWeight: 600 }}>Gaza Sky Geeks</strong> in
            partnership with the <strong style={{ color: '#000', fontWeight: 600 }}>Alan Turing Institute</strong>.
          </p>
          <p style={styles.p}>
            Our mission is to contribute meaningful, production-quality code to{' '}
            <a href="https://github.com/alan-turing-institute/autoemulate" target="_blank" rel="noopener noreferrer" style={styles.link}>AutoEmulate</a>,
            build real open-source credentials, and grow as engineers under the guidance of world-class researchers.
          </p>
          <p style={styles.p}>
            This page is our public portfolio — a place for recruiters, researchers, and collaborators
            to see what we've built and connect with our team.
          </p>
        </div>
        <div style={styles.cards}>
          {cards.map((c) => (
            <div key={c.title} style={styles.card}>
              <p style={styles.cardTitle}>{c.title}</p>
              <p style={styles.cardText}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
