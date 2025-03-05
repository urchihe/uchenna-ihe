import React from 'react';
import { Container, Box, Typography, Card, CardContent, List, ListItem, Divider, Grid, Link } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import ProjectCarousel from './ProjectCarousel';


const Resume = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                {/* About Me Section */}
                <Grid item xs={12}>
                    <Container maxWidth="lg">
                            <Typography
                                variant="h5" sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}
                            >
                               <DescriptionIcon sx={{ marginRight: 1 }} /> Professional Summary
                            </Typography>
                            Experienced Full-Stack Developer with a strong background in SaaS, Multi-Tenancy, and DevOps, specializing in highly scalable applications such as crowdfunding platforms, EdTech solutions, and enterprise systems.<br /><br />

                            🔹 <strong>Recent Achievements:</strong><br />
                            Revived and transformed <strong>DoviLearn</strong> into <strong>BulletLMS</strong>, a SaaS platform, by:<br />
                            ✅ Migrating to a faster, optimized server<br />
                            ✅ Implementing CI/CD for smooth deployments<br />
                            ✅ Dockerizing for improved scalability<br />
                            ✅ Automating business processes using <strong>SendPulse</strong><br />
                            ✅ Adding new learning formats (Excel, DOCX, SCORM, xAPI)<br /><br />

                            🔹 <strong>Previous Experience:</strong><br />
                            At <strong>The Coding Machine</strong>, worked on SaaS applications, crowdfunding platforms, and <strong>React Native</strong> mobile apps, gaining expertise in <strong>Laravel Nova</strong>, <strong>React</strong>, <strong>Symfony</strong>, <strong>REST API development</strong>, <strong>MySQL</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>.<br /><br />

                            🔹 <strong>Tech Stack:</strong><br />
                            💻 <strong>Laravel</strong>, <strong>Nova</strong>, <strong>Symfony</strong>, <strong>React</strong>, <strong>Vue.js</strong> (2 & 3), <strong>Node.js</strong>, <strong>TypeScript</strong><br />
                            📦 <strong>Docker</strong>, <strong>CI/CD</strong>, <strong>MariaDB</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>Redis</strong><br />
                            🔗 <strong>Multi-Tenancy</strong>, <strong>Geolocation</strong>, <strong>Electronic Signatures</strong>, <strong>Data Encryption</strong><br /><br />

                            🔹 Passionate about building scalable applications, automating workflows, and optimizing system performance. Always eager to take on new opportunities and challenges!
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
                <Grid item xs={12} md={12}>
                    <Container maxWidth="lg">
                        <Typography variant="h5" sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
                            <WorkIcon sx={{ marginRight: 1 }} /> Work Experience
                        </Typography>
                        <List>
                            <ListItem>
                                <Link
                                    href="https://www.dovilearn.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    >
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        Senior Full Stack Developer | DoviLearn
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2" component="div">
                                    <ul>
                                        <li>Revived and transformed DoviLearn.com into a SaaS platform (BulletLMS.com).</li>
                                        <li>Migrated to a high-performance server, optimizing speed and reliability.</li>
                                        <li>Implemented CI/CD pipelines for automated deployment.</li>
                                        <li>Dockerized the platform for better scalability.</li>
                                        <li>Integrated multiple learning formats (Excel, DOCX, SCORM, xAPI).</li>
                                        <li>Developed business automation workflows using SendPulse.</li>
                                    </ul>
                                </Typography>
                            </ListItem>
                            <Divider sx={{ marginTop: 1 }} />
                            <ListItem>
                               <Link
                                    href="https://www.thecodingmachine.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    >
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        Full Stack Engineer | The Coding Machine
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2" component="div">
                                    <ul>
                                        <li>Developed SaaS applications, crowdfunding platforms, and mobile apps.</li>
                                        <li>Worked with Laravel, React, Vue.js, Symfony, and REST API development.</li>
                                        <li>Designed and implemented scalable front-end and back-end solutions.</li>
                                        <li>Managed MySQL databases and optimized performance.</li>
                                    </ul>
                                </Typography>
                            </ListItem>
                            <Divider sx={{ marginTop: 1 }} />
                            <ListItem>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    Senior Web Application Developer | Freelance
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2" component="div">
                                    <ul>
                                        <li>Designed and maintained web and mobile applications.</li>
                                        <li>Built scalable solutions with modern technologies.</li>
                                        <li>Provided full-stack development services to various clients.</li>
                                    </ul>
                                </Typography>
                            </ListItem>
                            <Divider sx={{ marginTop: 1 }} />
                            <ListItem>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    Project Support Officer | Adaptive Technology and Engineering Services
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2" component="div">
                                    <ul>
                                        <li>Planned and designed electrical switchgear panels and motor control centers.</li>
                                        <li>Supervised installation of electrical components.</li>
                                        <li>Prepared project documentation and cost quotations.</li>
                                        <li>Conducted training sessions and workshops.</li>
                                    </ul>
                                </Typography>
                            </ListItem>
                            <Divider sx={{ marginTop: 1 }} />
                            <ListItem>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    Network Engineer | Premium Communication
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2" component="div">
                                    <ul>
                                        <li>Installed and configured Cisco routers.</li>
                                        <li>Managed Microsoft server environments (Windows Server 2008-2012).</li>
                                        <li>Performed hardware repair and maintenance.</li>
                                    </ul>
                                </Typography>
                            </ListItem>
                        </List>
                    </Container>
                </Grid>
                <ProjectCarousel />
            </Grid>
        </Box>
    );
}

export default Resume;
