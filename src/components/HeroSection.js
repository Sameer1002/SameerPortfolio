'use client';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';

export default function HeroSection() {
    return (
        <Box className='center'>
            <Avatar alt="SAMEER AHIRE" src="/assets/sameer.jpg" className='profile_img' />
            <Typography variant="h5" fontWeight="bold" color="grey.100">
                SAMEER AHIRE
            </Typography>
            <Typography variant="body1" color="grey.400" sx={{ mb: 2 }}>
                Experienced Frontend Developer | React & Next.js Developer
            </Typography>
            <a href="/assets/pdf/Sameer_Ahire_CV.pdf" download style={{ textDecoration: 'none' }}>
                <Button variant="contained" className='btn_wt'>
                    Download CV
                </Button>
            </a>
            <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
                Creative and detail-oriented Frontend Developer with over 4 years of professional experience in web design and user interface development. Specialized in crafting responsive, user-friendly web applications that deliver seamless user experiences across all devices. Proven expertise in analyzing, designing, and developing high-quality, scalable business applications using modern web technologies. Adept at translating business requirements into intuitive, functional digital interfaces. Passionate about clean code, performance optimization, and staying updated with industry trends and best practices.
            </Typography>
        </Box>
    );
}
