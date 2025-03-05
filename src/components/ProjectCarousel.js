import React from "react";
import Slider from "react-slick";
import { Container, Typography, Card, CardMedia, CardContent, Link, Grid } from "@mui/material";
import { FolderOpen } from "@mui/icons-material";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample project data (Replace with actual project details)
const projects = [
  { name: "BS2BO", url: "https://www.bs2bo.com/", image: "https://www.bs2bo.com/img/logo.40ca5aed.svg" },
  { name: "Leasepar", url: "https://www.leasepar.fr/", image: "https://static.wixstatic.com/media/ccdeec_d92560a1717e46e680bbe3a4839bf9d3~mv2.png/v1/fill/w_438,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Leasepar-2021.png" },
  { name: "ViewzMe", url: "https://viewzme.com/", image: "https://viewzme.com/assets/logo-viewzme-opti.b0e2aa61.png" },
  { name: "Leroy Seafood", url: "https://www.leroyseafood.fr/", image: "https://www.leroyseafood.fr/_ipx/f_webp,q_100,s_117x60/logo_leroy.svg" },
   { name: "Dovilearn", url: "https://www.dovilearn.com/", image: "https://dovilearn-presigned.s3.eu-west-2.amazonaws.com/media-assets/logo.png" },
    { name: "BulletLMS", url: "https://www.bulletlms.com/", image: "https://bulletlms.com/wp-content/uploads/2024/05/bullet-lms-logo.png" }
];

// Carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Adjust for mobile
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ProjectCarousel = () => {
  return (
    <Grid item xs={12} md={12}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ marginBottom: 2, display: "flex", alignItems: "center" }}>
          <FolderOpen sx={{ marginRight: 1 }} /> Some Projects I Worked On
        </Typography>
        
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card sx={{ maxWidth: 345, margin: "0 auto", borderRadius: "10px", boxShadow: 3 }}>
                <CardMedia component="img" height="180" width="80" image={project.image} alt={project.name} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" underline="hover">
                      {project.name}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Container>
    </Grid>
  );
};

export default ProjectCarousel;
