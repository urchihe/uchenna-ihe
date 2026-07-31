import { useEffect, useMemo, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import ConsentBanner from './ConsentBanner';
import { db, auth } from '../utils/firebase';

const API_URL = 'https://ipapi.co/json/';
const COLORS = ['#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#64748b'];

export default function VisitorAnalytics() {
  const [consentGiven, setConsentGiven] = useState(
    () => localStorage.getItem('visitor_analytics_consent') === 'true'
  );
  const [expanded, setExpanded] = useState(false);
  const [visitorData, setVisitorData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalVisitors = useMemo(
    () => visitorData.reduce((total, item) => total + item.value, 0),
    [visitorData]
  );

  const allowAnalytics = () => {
    localStorage.setItem('visitor_analytics_consent', 'true');
    setConsentGiven(true);
  };

  useEffect(() => {
    if (!consentGiven) return undefined;
    let cancelled = false;

    const loadAnalytics = async () => {
      setLoading(true);
      setError('');

      try {
        await signInAnonymously(auth);

        try {
          const fingerprint = await FingerprintJS.load();
          const result = await fingerprint.get();
          const response = await fetch(API_URL);
          const data = await response.json();

          await setDoc(
            doc(db, 'visitors', result.visitorId),
            { country: data.country_name || 'Unknown' },
            { merge: true }
          );
        } catch (trackingError) {
          console.error('Visitor tracking unavailable:', trackingError);
        }

        const snapshot = await getDocs(collection(db, 'visitors'));
        const countryCounts = {};

        snapshot.forEach((visitor) => {
          const country = visitor.data().country || 'Unknown';
          countryCounts[country] = (countryCounts[country] || 0) + 1;
        });

        const chartData = Object.entries(countryCounts)
          .map(([name, value]) => ({ name, value }))
          .sort((a, b) => b.value - a.value);

        if (!cancelled) setVisitorData(chartData);
      } catch (analyticsError) {
        console.error('Visitor analytics unavailable:', analyticsError);
        if (!cancelled) setError('Country analytics are temporarily unavailable.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadAnalytics();
    return () => { cancelled = true; };
  }, [consentGiven]);

  return (
    <>
      {!consentGiven && <ConsentBanner onConsent={allowAnalytics} />}

      <section className={expanded ? 'analytics-panel is-expanded' : 'analytics-panel'}>
        <button
          className="analytics-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls="visitor-country-chart"
          onClick={() => setExpanded((current) => !current)}
        >
          <span className="analytics-icon" aria-hidden="true">◎</span>
          <span className="analytics-title">
            <small>PROFILE REACH</small>
            <strong>Visitors around the world</strong>
          </span>
          {consentGiven && totalVisitors > 0 && (
            <span className="analytics-total"><strong>{totalVisitors}</strong> recorded visits</span>
          )}
          <span className="analytics-chevron" aria-hidden="true">⌄</span>
        </button>

        <div className="analytics-content" id="visitor-country-chart" aria-hidden={!expanded}>
          {!consentGiven ? (
            <div className="analytics-message">
              <p>Allow anonymous analytics to view the countries represented in this portfolio’s audience.</p>
              <button type="button" onClick={allowAnalytics}>Enable analytics</button>
            </div>
          ) : loading ? (
            <div className="analytics-message"><span className="analytics-loader" /> Loading country insights…</div>
          ) : error ? (
            <div className="analytics-message">{error}</div>
          ) : visitorData.length === 0 ? (
            <div className="analytics-message">No country data has been recorded yet.</div>
          ) : (
            <div className="analytics-grid">
              <div className="chart-wrap" aria-label={`Donut chart showing ${totalVisitors} visitors across ${visitorData.length} countries`}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={visitorData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius="58%"
                      outerRadius="86%"
                      paddingAngle={3}
                      stroke="none"
                    >
                      {visitorData.map((entry, index) => (
                        <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value} visitor${value === 1 ? '' : 's'}`, 'Reach']}
                      contentStyle={{ background: '#111c2b', border: '1px solid #26364a', borderRadius: 0, fontSize: 12 }}
                      itemStyle={{ color: '#fff' }}
                      labelStyle={{ color: '#93c5fd', marginBottom: 4 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="chart-total"><strong>{totalVisitors}</strong><span>TOTAL VISITORS</span></div>
              </div>

              <div className="country-list">
                <div className="country-list-heading"><span>COUNTRY</span><span>VISITORS</span></div>
                {visitorData.map((country, index) => (
                  <div className="country-row" key={country.name}>
                    <i style={{ background: COLORS[index % COLORS.length] }} />
                    <strong>{country.name}</strong>
                    <span>{country.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
