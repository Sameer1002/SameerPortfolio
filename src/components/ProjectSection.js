'use client';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const projects = [
  { image: '/assets/krishithon.webp', link: 'https://www.krishithon.com/' },
  { image: '/assets/media.webp', link: 'https://www.mediaexhibitors.com/' },
  { image: '/assets/thakkars.webp', link: 'https://www.thakkersdevelopers.com/' },
  { image: '/assets/techmark.webp', link: 'https://www.techmarkfze.com/' },
];

export default function ProjectSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 900, margin: 'auto' }}>
      <Typography variant="h5" className="subheading" gutterBottom>
        Projects
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Link href={project.link} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                    cursor: 'pointer',
                  }}
                />
              </a>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
