import React from 'react';

export default function Footer() {
  return (
    <footer>
      <a className="wordmark footer-mark" href="#top"><span>UI</span><strong>UCHENNA IHE</strong></a>
      <p>© {new Date().getFullYear()} Uchenna Ihe. Built with care.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
