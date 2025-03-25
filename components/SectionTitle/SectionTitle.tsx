import React from 'react';
import { Container, Box, Typography, Breadcrumbs, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import sectionBg from '@/public/section/section-bg.avif';

interface SectionTitleProps {
    title: string;
    shortTitle: string;
    route: {
        name: string;
        path: string;
    }[];
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, shortTitle, route }) => {
    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 0, lg: 10 },
                backgroundImage: `url(${sectionBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: {xs: '300px', md: '350px'},
                objectFit: 'cover',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                }
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        color: 'common.white',
                        maxWidth: { xs: '100%', md: '60%' }
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                            mb: 3,
                            color: 'white',
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                        }}
                    >
                        {shortTitle}
                    </Typography>

                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" sx={{ color: 'common.white' }} />}
                        aria-label="breadcrumb"
                        sx={{ color: 'common.white' }}
                    >
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': { color: '#1B8633' }
                            }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        {route.map((item, index) => (
                            index === route.length - 1 ? (
                                <Typography key={item.path} color="white">
                                    {item.name}
                                </Typography>
                            ) : (
                                <Link
                                    key={item.path}
                                    underline="hover"
                                    color="inherit"
                                    href={item.path}
                                    sx={{ '&:hover': { color: '#1B8633' } }}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </Breadcrumbs>
                </Box>
            </Container>
        </Box>
    );
};

export default SectionTitle;