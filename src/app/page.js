import React from 'react';
import { Box, Container } from '@mui/material';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import EducationSection from '@/components/EducationSection';
import ProjectSection from '@/components/ProjectSection';

export default function HomePage() {
    return (
        <>
            <Container maxWidth="lg">
                <Box className="main_bg">
                    <Box id="home">
                        <HeroSection />
                    </Box>
                    <Box id="experience">
                        <ExperienceSection />
                    </Box>
                    <Box id="education">
                        <EducationSection />
                    </Box>
                    <Box id="projects">
                        <ProjectSection />
                    </Box>
                </Box>
            </Container> 
        </>
    );
}