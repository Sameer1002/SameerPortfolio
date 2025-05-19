import React from 'react';
import { Container, Typography, Box, Stack, Grid, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';

const Footer = () => {
    return (
        <Box className="footer_bg_main" id="contact">
            <Container maxWidth="lg">
                <Box className='footer_bg'>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" alignItems="center">
                            <Typography variant="h2" className='footer_name' >
                                SAMEER
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                01. ABOUT ME
                            </Typography>
                            <Box
                                sx={{
                                    width: '50px',
                                    height: '2px',
                                    bgcolor: '#ffffff',
                                    my: 1,
                                }}
                            />
                            <Typography variant="body2" color="gray">
                                Experienced React Developer with hands-on experience in identifying web-based user
                                interactions along with designing & implementing highly-responsive user interface
                                components by deploying React concepts.
                                JavaScript and ReactJS workflows.
                            </Typography>
                            <Stack direction="row" spacing={1} mt={2}>
                                <a href="https://www.linkedin.com/in/sameer-ahire-549598216/" target="_blank" rel="noopener noreferrer">
                                    <IconButton color="inherit">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a href="https://www.instagram.com/ahire_sameer_/" target="_blank" rel="noopener noreferrer">
                                    <IconButton color="inherit">
                                        <InstagramIcon />
                                    </IconButton>
                                </a>
                                <a href="https://wa.me/918669860987" target="_blank" rel="noopener noreferrer">
                                    <IconButton color="inherit">
                                        <WhatsAppIcon />
                                    </IconButton>
                                </a>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                02. CONTACTS
                            </Typography>
                            <Box
                                sx={{
                                    width: '50px',
                                    height: '2px',
                                    bgcolor: '#ffffff',
                                    my: 1,
                                }}
                            />
                            <Typography variant="body2" color="gray" mb={2}>
                                Your feedback and inquiries matter to me. Feel free to reach out using the contact
                                information provided, and I'll get back to you as soon as possible.
                            </Typography>

                            <Stack spacing={1}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <PhoneIcon fontSize="small" />
                                    <Typography variant="body2">+91 8669860987</Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <EmailIcon fontSize="small" />
                                    <Typography variant="body2">ahiresameernsk@gmail.com</Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <RoomIcon fontSize="small" />
                                    <Typography variant="body2">Nashik, Maharashtra</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
