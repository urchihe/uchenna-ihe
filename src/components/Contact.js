import React, {useState} from 'react';
import {Box, Button, Container, TextField, Typography} from '@mui/material';

const Contact = ({ contacts }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Create the mailto link
        window.location.href = `mailto:${contacts.email}?subject=Message from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    };

    return (
        <Container maxWidth="md" id="contact" sx={{ marginTop: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>CONTACT</Typography>

            {/* Contact Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, textAlign: 'left' }}>
                <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Send Message</Button>
            </Box>
        </Container>
    );
};

export default Contact;
