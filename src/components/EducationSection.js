'use client';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack
} from '@mui/material';

const educationList = [
  {
    degree: 'BE - Mechanical Engineering',
    institution: 'Indian Institute Of Technical Management, Banglore',
    date: '2021 - 2024',
    details:
      'Developed several mini-projects using React.js, Next.js, and Node.js, emphasizing clean UI and optimized performance.',
  },
  {
    degree: 'Diploma In Mechanical',
    institution: 'Shree Mahaveer Polytechnic, Nashik',
    date: '2017 - 2020',
    details:
      'Transitioned from core mechanical concepts into full-stack web development and system architecture, applying problem-solving skills to software challenges.',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Karmaveer Bhaurao Patil Vidyalaya, Nashik',
    date: '2017',
    details:
      'Completed certifications in User-Centered Design, Wireframing, and Accessibility Standards, which laid the foundation for a UI/UX-focused career.',
  }
];

export default function EducationSection() {
  return (
    <Box>
      <Typography variant="h5" className="subheading" gutterBottom>
        Education
      </Typography>
      <Stack spacing={2}>
        {educationList.map((edu, index) => (
          <Card key={index} className="exp_card">
            <CardContent>
              <Typography variant="subtitle2" color="grey.400">
                {edu.date}
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {edu.degree}
              </Typography>
              <Typography variant="body2" color="grey.500" gutterBottom>
                {edu.institution}
              </Typography>
              <Typography variant="body2" color="grey.400">
                {edu.details}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
