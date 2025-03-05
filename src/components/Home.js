import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-scroll';
import Resume from './Resume';
import profilePic from '../assets/images/pic.png';
import vueLogo from '../assets/images/vue.svg';
import reactLogo from '../assets/images/react.svg';
import pythonLogo from '../assets/images/Python.png';
import phpLogo from '../assets/images/php.png';
import jqueryLogo from '../assets/images/jquery.png';
import nodeLogo from '../assets/images/node.png';
import uiLogo from '../assets/images/ux-iu.png';
import redisLogo from '../assets/images/redis.png';
import saasNovaLogo from '../assets/images/saasnova.webp';
import databaseLogo from '../assets/images/database.svg';
import BuildIcon from "@mui/icons-material/Build";
import Contact from "./Contact";

const skills = [
    { name: 'Python', level: 60 },
    { name: 'C#', level: 60 },
    { name: 'PHP', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'SASS/SCSS', level: 90 },
    { name: 'Bootstrap', level: 90 },
    { name: 'SQL', level: 90 }
];

const frameworks = [
    { name: 'Vue', level: 98 },
    { name: 'Vuex', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Redux', level: 90 },
    { name: 'Redux-Saga', level: 90 },
    { name: 'Node (Express)', level: 80 },
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 90 },
    { name: 'React Native', level: 90 }
];

const techStack = [
    { title: 'Vue', logo: vueLogo, skills: ['Vue', 'Vuex', 'Vue Router', 'Axios', 'Pina'] },
    { title: 'React', logo: reactLogo, skills: ['React', 'Redux', 'Redux-Saga', 'React-Router'] },
    { title: 'UX/UI', logo: uiLogo, skills: ['Material-UI', 'Vuetify', 'SASS/SCSS'] },
    { title: 'jQuery', logo: jqueryLogo, skills: ['jQuery'] }
];

const backendStack = [
    { title: 'PHP', logo: phpLogo, skills: ['Laravel', 'Symfony', 'Core PHP', 'CodeIgniter'] },
    { title: 'Node', logo: nodeLogo, skills: ['Node.js', 'Express.js', 'Nest.js'] },
    { title: 'Python', logo: pythonLogo, skills: ['Python', 'Django'] },
    { title: 'Database', logo: databaseLogo, skills: ['SQL', 'MySQL', 'MariaDB', 'MongoDB', 'Elasticsearch'] },
    { title: 'Caching & Messaging', logo: redisLogo, skills: ['Redis', 'RabbitMQ', 'Kafka'] },
    { title: 'SaaS & LMS', logo: saasNovaLogo, skills: ['SaaS Nova', 'Moodle LMS'] }
];

const Home = ({ contacts }) => {
    return (
        <div>
            <div className="home-container">
                <Grid container justifyContent="center">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '800px',
                            padding: 3,
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            marginBottom: 4,
                        }}
                    >
                        {/* Image Section */}
                        <Box sx={{ flexShrink: 0, marginRight: 2 }}>
                            <img
                                src={profilePic}
                                alt="Profile"
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                }}
                            />
                        </Box>

                        {/* Text Section */}
                        <Box>
                            <Link to="contact" smooth={true} duration={200}>
                                <Typography variant="h5" gutterBottom>
                                    Hello! My name is Uchenna Ihe
                                </Typography>
                                <Typography variant="body1">
                                    I am a Senior Full-Stack Engineer with expertise in SaaS, <strong>Laravel Nova</strong>, <strong>React</strong>,
                                    <strong>Vue</strong>, <strong>Symfony</strong>, <strong>Multi-Tenancy</strong>, <strong>DevOps</strong> (Docker, CI/CD),
                                    and <strong>Business Automation</strong>. Based in <strong>Lagos State, Nigeria</strong>.
                                    <br /><br />
                                    Need a project done? <strong>CONTACT ME!</strong>
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </div>

            <Container maxWidth="md">
                <Resume />
            </Container>

            {/* Skills Section */}
            <Container maxWidth="md" id="skills" sx={{ marginTop: 4 }}>
                <Typography variant="h5" sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
                    <BuildIcon sx={{ marginRight: 1 }} /> Skills
                </Typography>
                <Grid container spacing={4}>
                    {[skills, frameworks].map((list, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            {list.map(skill => (
                                <Box key={skill.name} my={2}>
                                    <Typography variant="body1">
                                        {skill.name} - {skill.level}%
                                    </Typography>
                                    <Box sx={{ width: '100%', bgcolor: '#ddd', borderRadius: '5px' }}>
                                        <Box sx={{ width: `${skill.level}%`, bgcolor: 'primary.main', height: 10, borderRadius: '5px' }} />
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Frontend Section */}
            <Container maxWidth="md" id="frontend" sx={{ marginTop: 4 }}>
                <Typography variant="h4" gutterBottom align="center">FRONTEND DEVELOPMENT</Typography>
                <Grid container spacing={4}>
                    {techStack.map(({ title, logo, skills }) => (
                        <Grid item xs={12} sm={6} lg={3} key={title}>
                            <Box textAlign="center">
                                <Typography variant="h6">{title}</Typography>
                                <img src={logo} alt={title} width={100} />
                                <Typography variant="body2">{skills.join(', ')}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Backend Section */}
            <Container maxWidth="md" id="backend" sx={{ marginTop: 4 }}>
                <Typography variant="h4" gutterBottom align="center">BACKEND DEVELOPMENT</Typography>
                <Grid container spacing={4}>
                    {backendStack.map(({ title, logo, skills }) => (
                        <Grid item xs={12} sm={6} lg={3} key={title}>
                            <Box textAlign="center">
                                <Typography variant="h6">{title}</Typography>
                                <img src={logo} alt={title} width={100} />
                                <Typography variant="body2">{skills.join(', ')}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Contact Section */}
            <Container maxWidth="md" id="contact" sx={{ marginTop: 4 }}>
                <Contact contacts={contacts}/>
            </Container>
        </div>
    );
};

export default Home;
