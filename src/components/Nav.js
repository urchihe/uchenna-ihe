import React, { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Uchenna Ihe, home">
        <span>UI</span>
        <strong>UCHENNA IHE</strong>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>

      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-resume" href={`${process.env.PUBLIC_URL}/Uchenna_Ihe_CV.pdf`} download>
          Download CV <span aria-hidden="true">↘</span>
        </a>
      </nav>
    </header>
  );
}
