import React, { useState } from 'react';

export default function ConsentBanner({ onConsent }) {
  const [show, setShow] = useState(true);

  const accept = () => {
    localStorage.setItem('visitor_analytics_consent', 'true');
    setShow(false);
    onConsent();
  };

  const decline = () => {
    localStorage.setItem('visitor_analytics_consent', 'false');
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside className="consent-banner" aria-label="Analytics consent">
      <div>
        <strong>Your privacy matters.</strong>
        <p>I use anonymous analytics to understand which countries visit this portfolio.</p>
      </div>
      <div className="consent-actions">
        <button type="button" onClick={decline}>No thanks</button>
        <button className="consent-accept" type="button" onClick={accept}>Allow analytics</button>
      </div>
    </aside>
  );
}
