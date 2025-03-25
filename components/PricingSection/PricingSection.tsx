import { Box, Button, Container, Stack } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';

interface Package {
    speed: string;
    price: number;
    talkTime: string;
    popular: boolean;
}

const packages: Package[] = [
    {
        speed: '13Mbps',
        price: 635,
        talkTime: '100 Min',
        popular: false,
    },
    {
        speed: '18Mbps',
        price: 850,
        talkTime: '200 Min',
        popular: false,
    },
    {
        speed: '22Mbps',
        price: 1060,
        talkTime: '250 Min',
        popular: true,
    },
    {
        speed: '28Mbps',
        price: 1275,
        talkTime: '300 Min',
        popular: true,
    },
    {
        speed: '35Mbps',
        price: 1590,
        talkTime: '400 Min',
        popular: true,
    },
    {
        speed: '45Mbps',
        price: 2120,
        talkTime: '450 Min',
        popular: true,
    },
    {
        speed: '70Mbps',
        price: 2650,
        talkTime: '500 Min',
        popular: true,
    },
    {
        speed: '110Mbps',
        price: 3180,
        talkTime: '500 Min',
        popular: true,
    },
];

const PricingSection: React.FC = () => {
    return (
        <Box id="packages" sx={{ py: 10, px: { xs: 0, lg: 10 } }}>
            <Container maxWidth="xl">
                <section className="packages lg:py-16 py-8">
                    <div className="container mx-auto">
                        <h2 className="lg:text-[3rem] text-3xl text-center mb-10">Find the Best Internet Plan for Your Needs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-lg relative"
                                >
                                    {pkg.popular && (
                                        <div className="absolute top-0 right-0 bg-[#1B8633] text-white py-1 px-3 text-sm rounded-tr-lg rounded-bl-lg">
                                            Popular
                                        </div>
                                    )}
                                    <h4 className="text-2xl font-bold text-primary mb-4 text-[#1B8633]">{pkg.speed}</h4>

                                    {/* Speed & Price Section */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div className='w-1/2'>
                                            <p className="text-sm text-[#757F95]">Upto</p>
                                            <span className="text-4xl font-semibold text-gray-900">{pkg.speed.split('Mbps')[0]}</span>
                                            <span>Mbps</span>
                                        </div>
                                        <div className="border-l-2 text-right w-1/2">
                                            <div>
                                                <span className="text-sm text-[#757F95]">BDT</span>
                                                <span className="text-3xl font-bold text-gray-900 pl-2">{pkg.price}</span>
                                                <div className="mt-0 text-[14px] text-gray-500">Per Month</div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-center text-sm text-[#757F95] mt-2">*Including VAT</p>
                                    <p className="flex items-center justify-center text-sm text-[#757F95] mt-10 mb-4">
                                        <CheckCircleIcon sx={{ color: '#1B8633', mr: 1 }} />
                                        Free {pkg.talkTime} TalkTime
                                    </p>
                                    <div className="flex justify-center">
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
                                                component={Link}
                                                href='/registration'
                                                variant="contained"
                                                className="animated-button"
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
                                                Get this package
                                            </Button>
                                            <Button
                                                variant="contained"
                                                component={Link}
                                                href='/registration'
                                                className="animated-button animated-arrow"
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
                            ))}
                        </div>
                    </div>
                </section>
            </Container>
        </Box>
    );
};

export default PricingSection;
