import React from 'react';
import profilePic from '../assets/images/profile-beach-bright.webp';
import VisitorAnalytics from './VisitorAnalytics';

const capabilities = [
  {
    number: '01',
    title: 'Product engineering',
    text: 'End-to-end SaaS products built with Laravel, React, Vue, Node.js and clean, maintainable APIs.',
    tags: ['Laravel', 'React', 'Vue', 'Node.js'],
  },
  {
    number: '02',
    title: 'Platform & DevOps',
    text: 'Cloud-ready infrastructure, containerized services and automated delivery designed for dependable releases.',
    tags: ['Docker', 'AWS', 'CI/CD', 'Nginx'],
  },
  {
    number: '03',
    title: 'SaaS & IoT architecture',
    text: 'Secure multi-tenant and connected-device systems with isolated data, real-time communication, custom infrastructure and feature-based access.',
    tags: ['IoT', 'Multi-tenancy', 'WebSockets', 'PostgreSQL'],
  },
];

const roles = [
  {
    dates: '2026 — PRESENT',
    role: 'Senior Full Stack & DevOps Engineer',
    company: 'Independent / Freelance',
    location: 'Remote',
    text: 'Delivering and operating production products for clients, including OnPadel—a real-time web and mobile padel platform—and the Dockerized, IoT-enabled ARD Fleet Operations platform deployed on Oracle Cloud.',
    stat: '2026',
    statLabel: 'latest production delivery work',
  },
  {
    dates: 'MAR 2025 — PRESENT',
    role: 'Full Stack & DevOps Engineer',
    company: 'Paxform',
    location: 'Remote · Australia',
    text: 'Leading platform modernization across a multi-tenant form and workflow product. Shipped plan-based access control, tenant-isolated domains, databases and storage, a GrapesJS email builder, and a Dockerized monorepo with zero-downtime delivery.',
    stat: '35%',
    statLabel: 'API performance improvement',
  },
  {
    dates: 'JUN 2024 — MAR 2025',
    role: 'Senior Full Stack & DevOps Engineer',
    company: 'DoviLearn / BulletLMS',
    location: 'Remote · Nigeria',
    text: 'Rebuilt a broken LMS as a scalable SaaS platform, added international payments, automated deployments and backups, and migrated the infrastructure for greater reliability.',
    stat: '80%',
    statLabel: 'fewer manual deployment errors',
  },
  {
    dates: 'APR 2019 — MAY 2024',
    role: 'Full Stack Engineer',
    company: 'The Coding Machine',
    location: 'Remote · France',
    text: 'Built enterprise web and mobile products with Laravel, Symfony, Node.js, React and Vue, supporting Dockerized workloads and AWS infrastructure across distributed teams.',
    stat: '25%',
    statLabel: 'reduction in production errors',
  },
];

const selectedWork = [
  {
    type: 'RECENT FREELANCE · PADEL PLATFORM',
    name: 'OnPadel',
    description: 'A full-stack padel platform with real-time WebSocket experiences, secure user and admin journeys, a dedicated mobile-app API and production infrastructure on AWS.',
    stack: 'Laravel · Next.js · MySQL · WebSockets · Mobile API · AWS',
    links: [{ label: 'Visit OnPadel', href: 'https://onpadel.net/' }],
    className: 'project-onpadel',
  },
  {
    type: 'RECENT FREELANCE · IOT & FLEET OPERATIONS',
    name: 'ARD Fleet Operations',
    description: 'A Dockerized IoT fleet-operations ecosystem connecting managed devices to a Next.js interface, NestJS services and PostgreSQL, routed through Traefik on Oracle Cloud.',
    stack: 'IoT · Next.js · NestJS · Docker · Traefik · PostgreSQL · Oracle Cloud',
    links: [
      { label: 'Operations portal', href: 'http://94.250.203.125/login' },
      { label: 'Device console', href: 'http://94.250.203.125:8082/login/' },
      { label: 'API documentation', href: 'http://94.250.203.125:3010/api' },
    ],
    className: 'project-ard',
  },
  {
    type: 'MULTI-TENANT SAAS',
    name: 'Paxform',
    description: 'An adaptive forms and workflow platform built with Laravel and React, containerized with Docker and released through green-blue deployments for safe, low-risk updates.',
    stack: 'Laravel · React · Docker · MySQL · Green-blue deployment',
    links: [{ label: 'Visit Paxform', href: 'https://www.paxform.com' }],
    className: 'project-paxform',
  },
  {
    type: 'LEARNING PLATFORM',
    name: 'BulletLMS',
    description: 'A resilient SaaS learning platform supporting rich learning formats, global payments, automated deployments and business workflows.',
    stack: 'Laravel · Vue.js · DigitalOcean',
    links: [{ label: 'Visit BulletLMS', href: 'https://www.bulletlms.com' }],
    className: 'project-bullet',
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;
const WhatsAppIcon = () => (
  <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true">
    <path fill="currentColor" d="M16.04 3C8.86 3 3.02 8.75 3.02 15.82c0 2.26.6 4.47 1.74 6.4L3 28.58l6.56-1.7a13.1 13.1 0 0 0 6.47 1.66h.01c7.18 0 13.02-5.75 13.02-12.82C29.06 8.75 23.22 3 16.04 3Zm0 23.38h-.01a10.9 10.9 0 0 1-5.55-1.5l-.4-.23-3.89 1.01 1.04-3.74-.26-.4a10.6 10.6 0 0 1-1.7-5.7c0-5.88 4.83-10.66 10.77-10.66 5.94 0 10.77 4.78 10.77 10.66 0 5.88-4.83 10.66-10.77 10.66Zm5.9-7.98c-.32-.16-1.91-.93-2.2-1.03-.3-.11-.51-.16-.73.16-.21.32-.83 1.03-1.02 1.24-.19.22-.38.24-.7.08-.33-.16-1.37-.5-2.61-1.58a9.8 9.8 0 0 1-1.81-2.22c-.19-.32-.02-.5.14-.66.15-.14.33-.37.49-.56.16-.18.21-.32.32-.53.11-.22.06-.4-.02-.56-.08-.16-.73-1.73-1-2.37-.26-.63-.53-.55-.73-.56h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.67 0 1.57 1.16 3.09 1.32 3.3.16.21 2.28 3.43 5.52 4.81.77.33 1.37.52 1.84.67.77.24 1.48.21 2.03.13.62-.09 1.91-.77 2.18-1.51.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38Z" />
  </svg>
);

export default function Home({ profile }) {
  return (
    <>
      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <div className="availability"><i /> Available for select projects</div>
          <p className="eyebrow">SENIOR FULL STACK & DEVOPS ENGINEER</p>
          <h1>I build digital products that <em>scale.</em></h1>
          <p className="hero-intro">
            I’m Uchenna, a product-minded engineer with 9+ years of experience turning ambitious ideas and legacy systems into reliable SaaS platforms.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
            <a className="text-link" href="#contact">Let’s work together <Arrow /></a>
          </div>
          <div className="hero-meta">
            <div><span>BASED IN</span><strong>{profile.location}</strong></div>
            <div><span>WORKING</span><strong>Worldwide / Remote</strong></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of Uchenna Ihe">
          <div className="portrait-frame">
            <img src={profilePic} alt="Uchenna Ihe smiling on the beach" />
          </div>
          <div className="experience-stamp">
            <strong>9+</strong>
            <span>YEARS OF<br />EXPERIENCE</span>
          </div>
          <div className="code-card" aria-hidden="true">
            <span>UCHENNA.PROFILE</span>
            <code>architecture: <b>“scalable”</b></code>
            <code>delivery: <b>“automated”</b></code>
            <code>mindset: <b>“product-first”</b></code>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Core expertise">
        <div>SAAS ARCHITECTURE <span>✦</span> IOT SYSTEMS <span>✦</span> FULL STACK ENGINEERING <span>✦</span> DEVOPS AUTOMATION <span>✦</span> MULTI-TENANT SYSTEMS</div>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-heading">
          <p className="eyebrow">WHAT I DO</p>
          <h2>Engineering beyond<br />the <em>feature.</em></h2>
        </div>
        <div className="about-copy">
          <p>I bring product thinking, hands-on engineering and infrastructure discipline into one workflow—so the systems I build are as dependable behind the scenes as they are intuitive to use.</p>
          <p>From architecture and APIs to interfaces and release pipelines, I help teams move from complexity to confident delivery.</p>
        </div>
      </section>

      <section className="capabilities section-pad">
        {capabilities.map((item) => (
          <article className="capability" key={item.number}>
            <span className="cap-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading light">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>A track record of<br /><em>meaningful impact.</em></h2>
        </div>
        <div className="timeline">
          {roles.map((item) => (
            <article className="role" key={item.company}>
              <div className="role-date">{item.dates}</div>
              <div className="role-main">
                <h3>{item.role}</h3>
                <p className="company">{item.company} <span>·</span> {item.location}</p>
                <p>{item.text}</p>
              </div>
              <div className="role-stat"><strong>{item.stat}</strong><span>{item.statLabel}</span></div>
            </article>
          ))}
        </div>
        <a className="button button-light" href={`${process.env.PUBLIC_URL}/Uchenna_Ihe_CV.pdf`} download>Download full CV <span aria-hidden="true">↓</span></a>
      </section>

      <section className="work section-pad" id="work">
        <div className="work-title">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Products built<br />to <em>perform.</em></h2>
          </div>
          <a className="text-link" href="https://github.com/urchihe" target="_blank" rel="noreferrer">View GitHub <Arrow /></a>
          <span className="swipe-hint" aria-hidden="true">Swipe projects →</span>
        </div>
        <div className="project-grid">
          {selectedWork.map((project) => (
            <article className={`project-card ${project.className}`} key={project.name}>
              <span className="project-type">{project.type}</span>
              <div className="project-number" aria-hidden="true">0{selectedWork.indexOf(project) + 1}</div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="project-stack">{project.stack}</span>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label} <Arrow />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials section-pad">
        <div>
          <p className="eyebrow">FOUNDATION</p>
          <h2>Built on curiosity.<br /><em>Proven in practice.</em></h2>
        </div>
        <div className="credential-list">
          <div><span>EDUCATION</span><strong>B.Tech, Mathematics & Computer Science</strong><p>Federal University of Technology, Owerri</p></div>
          <div><span>CERTIFICATION</span><strong>Scrum Master Certified (SMC)</strong><p>Agile team leadership and delivery</p></div>
          <div><span>LANGUAGES</span><strong>English & French</strong><p>Professional English · Elementary French</p></div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let’s build something<br /><em>exceptional.</em></h2>
        <p>Whether you’re scaling a SaaS product, modernizing a platform or strengthening delivery infrastructure, I’d love to hear what you’re working on.</p>
        <a
          className="contact-email"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('Project enquiry from your portfolio')}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Email ${profile.email} using Gmail`}
        >
          {profile.email} <Arrow />
        </a>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/uchenna-ihe" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/urchihe" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a
            className="whatsapp-link"
            href={`https://wa.me/${profile.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Uchenna, I found your portfolio and would like to discuss a project.')}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Uchenna on WhatsApp"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </section>

      <VisitorAnalytics />
    </>
  );
}
