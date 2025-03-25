'use client';

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const HeaderTop: React.FC = () => {
    return (
        <Box
            sx={{
                display: { xs: 'none', lg: 'flex' }, // Hide on small screens
                backgroundColor: 'white',
                py: 1.5,
                borderBottom: '1px solid #ddd',
                px: 10,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2} alignItems="center">
                    {/* Left Section: Phone & Email */}
                    <Grid item xs={12} md={7} lg={8}>
                        <Box display="flex" gap={3} alignItems="center">
                            <Box display="flex" alignItems="center" gap={1}>
                                <PhoneIcon sx={{ color: 'green', width: '1.5rem', height: '1.5rem' }} />
                                <Typography component="span">
                                    <Link href="tel:09639123123" style={{ textDecoration: 'none', color: 'black', fontSize: '0.9rem' }}>
                                        09639123123
                                    </Link>
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <EmailIcon sx={{ color: 'green', width: '1.5rem', height: '1.5rem' }} />
                                <Typography component="span">
                                    <Link href="mailto:support@icc-communication.com" style={{ textDecoration: 'none', color: 'black', fontSize: '0.9rem' }}>
                                        support@icc-communication.com
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Section: BTRC Approved Tariff */}
                    <Grid item xs={12} md={5} lg={4} textAlign={{ xs: 'center', md: 'right' }}>
                        <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1}>
                            <PersonIcon sx={{ color: 'green', width: '1.5rem', height: '1.5rem' }} />
                            <Typography component="span">
                                <Link href="/BTRC-Approved-Tariff" style={{ textDecoration: 'none', color: 'black', fontSize: '0.9rem' }}>
                                    BTRC Approved Tariff
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeaderTop;
