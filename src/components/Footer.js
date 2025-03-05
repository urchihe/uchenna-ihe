import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Favorite } from '@mui/icons-material';

const Footer = ({ year }) => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#333', padding: '20px 0' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} textAlign="center">
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 300,
                        }}
                    >
                        <Favorite sx={{ color: 'red', verticalAlign: 'middle', marginRight: 1 }} />
                        <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
                        {year} Uchenna Ihe
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
