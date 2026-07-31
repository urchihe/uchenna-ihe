import { useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { doc, setDoc } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import ConsentBanner from './ConsentBanner';
import { db, auth } from '../utils/firebase';

const API_URL = 'https://ipapi.co/json/';

export default function VisitorAnalytics() {
  const [consentGiven, setConsentGiven] = useState(
    () => localStorage.getItem('visitor_analytics_consent') === 'true'
  );

  useEffect(() => {
    if (!consentGiven) return undefined;

    const trackVisitor = async () => {
      try {
        await signInAnonymously(auth);
        const fingerprint = await FingerprintJS.load();
        const result = await fingerprint.get();
        const response = await fetch(API_URL);
        const data = await response.json();

        await setDoc(
          doc(db, 'visitors', result.visitorId),
          { country: data.country_name || 'Unknown' },
          { merge: true }
        );
      } catch (error) {
        // Analytics should never interrupt the portfolio experience.
        console.error('Visitor analytics unavailable:', error);
      }
    };

    trackVisitor();
    return undefined;
  }, [consentGiven]);

  if (consentGiven) return null;

  return <ConsentBanner onConsent={() => setConsentGiven(true)} />;
}
