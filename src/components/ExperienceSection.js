'use client';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Avatar,
  Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const experiences = [
  {
    role: 'Frontend Developer',
    location: 'Nashik, Maharashtra',
    date: '2025 - Today',
    description: [
      'Currently working on building performant, SEO-friendly web applications using React and Next.js.',
      'Focused on component reusability, API integration, and responsive UI with MUI.'
    ],
    icon: '/assets/experience/dpa.png'
  },
  {
    role: 'Web Developer',
    location: 'Nashik, Maharashtra',
    date: '2024 - 2025',
    description: [
      "Skilled in integrating PHP with HTML, CSS, and JavaScript to build dynamic and responsive user interfaces.",
      "Expertise in working with MySQL and other databases to design, query, and manage data effectively."
    ],
    icon: '/assets/experience/meapl.png'
  },
  {
    role: 'Web Developer',
    location: 'Mumbai, Maharashtra',
    date: '2023 - 2024',
    description: [
      'Designed and developed engaging and effective emailers and newsletters for various campaigns using HTML, CSS.',
      'Designed and developed user interfaces  using  HTML,CSS,  and  JavaScript',
      'Worked on cross-functional teams to ensure the delivery of high-quality products.'
    ],
    icon: '/assets/experience/21n.png'
  }
];

export default function ExperienceSection() {
  return (
    <Box id='exp'>
      <Typography variant="h5" className="subheading" gutterBottom>
        Experience
      </Typography>

      <Stack spacing={2}>
        {experiences.map((exp, index) => (
          <Accordion key={index} sx={{ bgcolor: '#1c1c1e', color: '#fff', borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
              <Avatar
                src={exp.icon}
                alt="company icon"
                sx={{ width: 40, height: 40, mr: 2 }}
              >
                <WorkOutlineIcon />
              </Avatar>
              <Box>
                <Typography variant="subtitle2" color="grey.400">
                  {exp.date}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {exp.role}
                </Typography>
                <Typography variant="body2" color="grey.500">
                  {exp.location}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {Array.isArray(exp.description) ? (
                <Stack spacing={1}>
                  {exp.description.map((line, i) => (
                    <Typography key={i} variant="body2" color="grey.400">
                      {line}
                    </Typography>
                  ))}
                </Stack>
              ) : (
                <Typography variant="body2" color="grey.400">
                  {exp.description}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Box>
  );
}
