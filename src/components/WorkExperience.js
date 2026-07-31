import { Grid, Container, Typography, List, ListItem, Divider, Link, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const workExperience = [
    {
        company: "Paxform",
        title: "Full-Stack & DevOps Engineer (Team Lead)",
        available: true,
        link: "https://www.paxform.com",
        period: "Mar 2025 - Present",
        location: "Australia · Remote",
        type: "Contract",
        responsibilities: [
            "Transformed Paxform’s multi-repo architecture into a fully Dockerized monorepo running 7 integrated services: React (frontend & backoffice), Laravel API, Node.js (Socket.IO), Redis, MySQL, phpMyAdmin, and Mailpit.",
            "Orchestrated services with Traefik reverse proxy and Nginx for production-grade routing and SSL management.",
            "Unified frontend, backoffice, and API repositories into a monorepo for streamlined CI/CD, dependency management, and collaboration.",
            "Built green-blue deployment pipelines using GitLab CI/CD, ensuring zero-downtime releases and versioned rollbacks.",
            "Developed a conditional form builder with grouped sections, dynamic logic, and feature-based toggles.",
            "Delivered multi-tenant architecture with custom domains, isolated databases/storage, and automatic SSL provisioning.",
            "Created Makefile automation scripts for one-command service setup and environment management.",
            "Implemented feature flagging and annotation-based configuration for modular control across tenants.",
            "Led a cross-functional team, improving DevOps discipline, delivery velocity, and system stability."
        ]
    },
    {
        company: "DoviLearn",
        title: "Senior Full Stack Developer",
        link: "https://www.dovilearn.com",
        responsibilities: [
            "Revived and transformed DoviLearn.com into a SaaS platform (BulletLMS.com).",
            "Migrated to a high-performance server, optimizing speed and reliability.",
            "Implemented CI/CD pipelines for automated deployment.",
            "Dockerized the platform for better scalability.",
            "Integrated multiple learning formats (Excel, DOCX, SCORM, xAPI).",
            "Developed business automation workflows using SendPulse."
        ]
    },
    {
        company: "The Coding Machine",
        title: "Full Stack Engineer",
        link: "https://www.thecodingmachine.com",
        responsibilities: [
            "Developed SaaS applications, crowdfunding platforms, and mobile apps.",
            "Worked with Laravel, React, Vue.js, Symfony, and REST API development.",
            "Designed and implemented scalable front-end and back-end solutions.",
            "Managed MySQL databases and optimized performance."
        ]
    },
    {
        company: "Freelance",
        title: "Senior Web Application Developer",
        responsibilities: [
            "Designed and maintained web and mobile applications.",
            "Built scalable solutions with modern technologies.",
            "Provided full-stack development services to various clients."
        ]
    },
    {
        company: "Adaptive Technology and Engineering Services",
        title: "Project Support Officer",
        responsibilities: [
            "Planned and designed electrical switchgear panels and motor control centers.",
            "Supervised installation of electrical components.",
            "Prepared project documentation and cost quotations.",
            "Conducted training sessions and workshops."
        ]
    },
    {
        company: "Premium Communication",
        title: "Network Engineer",
        responsibilities: [
            "Installed and configured Cisco routers.",
            "Managed Microsoft server environments (Windows Server 2008-2012).",
            "Performed hardware repair and maintenance."
        ]
    }
];

const WorkExperience = () => {
    return (
        <Grid item xs={12} md={12}>
            <Container maxWidth="lg">
                <Typography variant="h5" sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
                    <WorkIcon sx={{ marginRight: 1 }} /> Work Experience
                </Typography>
                <List>
                    {workExperience.map((job, index) => (
                        <div key={index}>
                            <ListItem>
                                {job.link ? (
                                    <Link href={job.link} target="_blank" rel="noopener noreferrer" underline="hover">
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            {job.title} | {job.company} {job.type ? `· ${job.type}` : ''}
                                            {job?.available && (
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        ml: 1,
                                                        px: 1.5,
                                                        py: 0.3,
                                                        fontSize: 12,
                                                        fontWeight: 'bold',
                                                        borderRadius: 1,
                                                        backgroundColor: '#4caf50',
                                                        color: '#fff',
                                                    }}
                                                >
                                                    Available
                                                </Box>
                                            )}
                                        </Typography>

                                        {job.period && (
                                            <Typography variant="body2" color="text.secondary">
                                                {job.period} {job.location ? `· ${job.location}` : ''}
                                            </Typography>
                                        )}
                                    </Link>
                                ) : (
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {job.title} | {job.company}
                                    </Typography>
                                )}
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2" component="div">
                                    <ul>
                                        {job.responsibilities.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </Typography>
                            </ListItem>
                            <Divider sx={{ marginTop: 1 }} />
                        </div>
                    ))}
                </List>
            </Container>
        </Grid>
    );
};

export default WorkExperience;
