import React from 'react';
import banner from '@/public/banner/banner_bg.png'
import { Box, Button, Container, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import Link from 'next/link';

const Banner = () => {
    return (
        <section
            className="banner-area banner-bg relative h-[550px] lg:h-[600px] flex items-center"
            style={{
                backgroundImage: `url(${banner.src})`, // Use the imported image
                backgroundSize: 'cover',
                objectFit: 'cover',
            }}
        >
            {/* Overlay for better readability (optional) */}
            <div className="absolute inset-0  bg-opacity-50"></div>

            <Box sx={{ px: { xs: 0, lg: 10 } }}>
                <Container maxWidth="xl">
                    <div className="relative z-10">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-9">
                                <div className="banner-content text-black lg:w-[580px]">
                                    <h2 className="lg:text-6xl text-4xl font-bold lg:mb-6 mb-4 animate-fade-in-up lg:leading-[70px] leading-[50px]">
                                        Fast, Reliable, and Affordable Internet
                                    </h2>
                                    <p className="lg:text-[17px] mb-8 animate-fade-in-up delay-200 leading-[26px]">
                                        Experience uninterrupted high-speed broadband with ISP COMMUNICATION . Whether for home, business, or
                                        corporate needs – we deliver seamless connectivity with unlimited data, low latency, and 24/7 support.
                                    </p>
                                    <Stack
                                        direction="row"
                                        spacing={0}
                                        alignItems="center"
                                        sx={{
                                            '&:hover .animated-button': {
                                                backgroundColor: '#555555', // Darker background on hover
                                            },
                                            '&:hover .animated-arrow': {
                                                transform: 'translateX(5px)', // Move the arrow button to the right
                                            },
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            className="animated-button"
                                            component={Link}
                                            href="/registration"
                                            sx={{
                                                backgroundColor: '#1B8633',
                                                color: 'white',
                                                padding: '6.5px 24px',
                                                borderRadius: '50px',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                textTransform: 'none',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className="animated-button animated-arrow"
                                            component={Link}
                                            href="/registration"
                                            sx={{
                                                backgroundColor: '#1B8633',
                                                color: 'white',
                                                minWidth: '39px',
                                                padding: '0px',
                                                height: '39px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                                            }}
                                        >
                                            <ArrowForwardIcon sx={{ padding: '0px !important' }} />
                                        </Button>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Box>

            {/* Customer Service Phone Section */}
            <div className="banner-phone absolute -bottom-10 lg:right-28 right-10 flex items-center space-x-4 bg-white rounded-full shadow-md">
                <div className='py-4 px-8 flex items-center justify-center gap-2'>
                    <div>
                        <PhonelinkRingIcon sx={{ color: '#1B8633', fontSize: { xs: 50, lg: 60 } }} />
                    </div>
                    <div className="content text-[#757F95]">
                        <span className="block text-[14px]">Customer Service</span>
                        <h5 className="number text-xl font-semibold">
                            <a href="tel:09639123123" className="text-[#1B8633]">
                                09639123123
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;