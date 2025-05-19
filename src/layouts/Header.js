'use client';

import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container,
    Stack,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = ['home', 'experience', 'education', 'projects', 'contact'];

export default function ButtonAppBar() {
    const [activeSection, setActiveSection] = React.useState('home');
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md = 960px

    React.useEffect(() => {
        const handleScroll = () => {
            let current = 'home';
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Opens or closes the drawer
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // Handles menu item click and scrolls to section
    const handleDrawerItemClick = (sec) => {
        setDrawerOpen(false);
        document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <Box className='header_bg_main' id="nav">
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="sticky" className="header_bg" elevation={1}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Explore Me...
                            </Typography>

                            {isMobile ? (
                                <>
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        aria-label="menu"
                                        onClick={toggleDrawer(true)}
                                    >
                                        <MenuIcon />
                                    </IconButton>

                                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                                            <List>
                                                {sections.map((sec) => (
                                                    <ListItem key={sec} disablePadding>
                                                        <ListItemButton onClick={() => handleDrawerItemClick(sec)}>
                                                            <ListItemText primary={sec.charAt(0).toUpperCase() + sec.slice(1)} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                    </Drawer>
                                </>
                            ) : (
                                <Stack direction="row" spacing={2}>
                                    {sections.map((sec) => (
                                        <Button
                                            key={sec}
                                            href={`#${sec}`}
                                            variant="text"
                                            color="inherit"
                                            disableRipple
                                            sx={{
                                                textTransform: 'capitalize',
                                                color: activeSection === sec ? '#ffffff' : 'grey.500',
                                                borderBottom: activeSection === sec ? '1px solid' : 'none',
                                                borderColor: activeSection === sec ? '#ffffff' : 'transparent',
                                                borderRadius: 0,
                                            }}
                                        >
                                            {sec}
                                        </Button>
                                    ))}
                                </Stack>
                            )}
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
        </Box>
    );
}
