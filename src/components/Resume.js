import React from 'react';
import { Container, Box, Typography, Card, CardContent, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'
import DescriptionIcon from '@mui/icons-material/Description';
import ProjectCarousel from './ProjectCarousel';
import WorkExperience from "./WorkExperience";


const Resume = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                {/* About Me Section */}
                <Grid item xs={12}>
                    <Container maxWidth="lg" id="about-me">
                        <Typography
                            variant="h5"
                            sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}
                        >
                            <DescriptionIcon sx={{ marginRight: 1 }} /> Professional Summary
                        </Typography>

                        Experienced Full-Stack & DevOps Engineer with strong expertise in SaaS, Multi-Tenancy, and DevOps. Skilled in building scalable platforms, automating workflows, and optimizing system performance.<br /><br />

                        🔹 <strong>Current Role (Mar 2025 - Present): Paxform | Contract | Australia · Remote</strong><br />
                        As Technical Lead & DevOps Architect, transformed Paxform’s multi-repo architecture into a fully Dockerized monorepo running seven integrated services — React (frontend & backoffice), Laravel API, Node.js (Socket.IO), Redis, MySQL, phpMyAdmin, Mailpit — orchestrated via Traefik and Nginx for production-grade routing and SSL management.<br /><br />
                        <strong>Key Achievements:</strong><br />
                        ✅ Dockerized the full application stack with Traefik reverse proxy, automated routing, and Nginx configuration<br />
                        ✅ Unified three repositories (frontend, backoffice, API) into a monorepo for seamless CI/CD and dependency management<br />
                        ✅ Built green-blue deployment pipelines with GitLab CI/CD for zero-downtime releases and rollbacks<br />
                        ✅ Developed a conditional form builder with GrapesJS, grouped sections, dynamic logic, and feature-based toggles<br />
                        ✅ Delivered multi-tenant architecture supporting custom domains, isolated databases/storage, and automated SSL provisioning<br />
                        ✅ Created Makefile automation scripts for one-command service setup and environment management<br />
                        ✅ Implemented feature flagging and annotation-based configuration for modular tenant control<br />
                        ✅ Led a cross-functional team, improving delivery velocity, system stability, and DevOps discipline<br /><br />

                        🔹 <strong>Previous Achievements:</strong><br />
                        Revived and transformed <strong>DoviLearn</strong> into <strong>BulletLMS</strong>, a SaaS platform, by:<br />
                        ✅ Migrating to faster, optimized servers<br />
                        ✅ Implementing CI/CD and Dockerization<br />
                        ✅ Automating business processes with <strong>SendPulse</strong><br />
                        ✅ Adding new learning formats (Excel, DOCX, SCORM, xAPI)<br />
                        ✅ Integrating advanced reporting dashboards and analytics<br />
                        ✅ Managing per-tenant SSL and custom domain setup<br /><br />

                        🔹 <strong>Tech Stack & Tools:</strong><br />
                        💻 <strong>Laravel</strong>, <strong>Nova</strong>, <strong>Symfony</strong>, <strong>React</strong>, <strong>Vue.js</strong> (2 & 3), <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>GrapesJS</strong><br />
                        📦 <strong>Docker</strong>, <strong>CI/CD</strong>, <strong>MariaDB</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>Redis</strong>, <strong>Traefik</strong>, <strong>Nginx</strong><br />
                        🔗 <strong>Multi-Tenancy</strong>, <strong>Geolocation</strong>, <strong>Electronic Signatures</strong>, <strong>Data Encryption</strong>, <strong>Tenant Isolation</strong>, <strong>Feature Flags</strong><br /><br />

                        🔹 Passionate about delivering high-quality, scalable applications, driving DevOps excellence, and mentoring teams to accelerate product delivery.
                    </Container>
                </Grid>


                {/* Education Section */}
                <Grid item xs={12} md={12}>
                    <Container maxWidth="lg">
                        <Typography variant="h5" sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
                            <SchoolIcon sx={{ marginRight: 1 }} /> Education
                        </Typography>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Bachelor of Technology in Mathematics and Computer Science</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Federal University Of Technology Owerri, Imo State, Nigeria.
                                </Typography>
                                <Typography variant="body2" sx={{ marginTop: 1 }}>
                                    - Second Class Upper Division Honours
                                </Typography>
                                <Typography variant="body2">
                                    - Final Year Project: Developed an Electronic Voting System using C#
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>

                {/* Work Experience Section */}
                 <WorkExperience />
                <ProjectCarousel />
            </Grid>
        </Box>
    );
}

export default Resume;
