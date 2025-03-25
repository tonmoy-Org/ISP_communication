"use client";

import {
    Construction,
    Business,
    Wifi,
    SatelliteAlt,
    Campaign,
    Build,
    Security,
    Router,
    AccountTree,
    Sync
} from "@mui/icons-material";
import { Box, Container, Grid, Tab, Tabs, Typography, Link } from "@mui/material";
import { useState } from "react";
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import DuoIcon from '@mui/icons-material/Duo';

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const tabStyles = {
        mx: 1,
        minHeight: 'auto',
        color: '#1B8633',
        fontWeight: 500,
        
        '&.Mui-selected': {
            bgcolor: '#1B8633',
            color: 'common.white',
            borderRadius: 10,
        }
    };

    const serviceItems = [
        [
            {
                icon: <Wifi sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Lan Managed",
                description: "ISP COMMUNICATION  delivers expert Wired and Wireless LAN solutions tailored to business needs. Our specialists assess requirements and design efficient, reliable network setups for seamless connectivity."
            },
            {
                icon: <SatelliteAlt sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "WAN Managed",
                description: "ISP COMMUNICATION  offers high-speed dedicated internet with #1B8633 and secondary links, WAN solutions, and nationwide coverage across all 64 districts, backed by 24/7 support."
            },
            {
                icon: <PhonelinkRingIcon sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "IP Telephony Service",
                description: "ISP COMMUNICATION , a BTRC-approved IPTSP provider, offers reliable IP Telephony with advanced VoIP infrastructure, ensuring seamless domestic and international calls via ICX and IGW connectivity."
            },
            {
                icon: <Campaign sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Bulk SMS and Email",
                description: "ISP COMMUNICATION  provides a proprietary software solution for efficient bulk SMS and email services, ensuring seamless and reliable communication for businesses."
            },
            {
                icon: <DuoIcon sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Video Communications",
                description: "ISP COMMUNICATION  offers licensed video conferencing solutions, including Google Meet, Microsoft Teams, Zoom, and more, ensuring secure and seamless virtual communication."
            },
            {
                icon: <PhonelinkSetupIcon sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Domain Hosting",
                description: "ISP COMMUNICATION  provides comprehensive web services, including web development, hosting, domain registration, interactive database-driven websites, and B2C/B2B solutions tailored to your business needs."
            }
        ],
        // Business Services
        [
            {
                icon: <Sync sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Server or H/W Colocation",
                description: "ISP COMMUNICATION  offers server and hardware colocation services at secure third-party data center facilities, ensuring reliable performance and scalability for your business."
            },
            {
                icon: <Build sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Local Hosting",
                description: "ISP COMMUNICATION  offers a complete range of web services tailored to meet all your digital needs with reliability and efficiency."
            },
            {
                icon: <Security sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Firewall",
                description: "ISP COMMUNICATION  is a trusted hardware and appliance provider, partnering with leading brands like Cisco Meraki, Juniper, Barracuda, and Fortinet for secure and scalable networking solutions."
            },
            {
                icon: <Security sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "SSL Certifications",
                description: "ISP COMMUNICATION  offers Digicert SSL certificates with full installation support, including OV, DV, and EV SSL solutions for enhanced website security and trust."
            },
            {
                icon: <Router sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Broadband & Custom Internet Service",
                description: "ISP COMMUNICATION  provides Digicert SSL certificates with expert installation support, offering OV, DV, and EV SSL solutions to ensure secure and trusted online transactions."
            },
            {
                icon: <AccountTree sx={{ fontSize: 60, color: '#1B8633' }} />,
                title: "Data Connectivity",
                description: "ISP COMMUNICATION  provides secure VPN data services tailored for banks and corporations, offering competitive pricing and unmatched data security assurance."
            }
        ]
    ];

    return (
        <Box component="section" id="services" py={{ xs: 6, md: 10 }} sx={{ bgcolor: 'background.paper', px: { xs: 0, lg: 7 } }}>
            <Container maxWidth="xl">
                <h1 className="lg:text-[2.3rem] text-3xl font-semibold mb-4 text-center py-5">
                    Comprehensive Digital & Connectivity Solutions
                </h1>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 5 } }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"                       
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none'
                            }
                        }}
                    >
                        <Tab
                            icon={<Construction />}
                            iconPosition="start"
                            label="Business Solutions"
                            sx={tabStyles}
                        />
                        <Tab
                            icon={<Business />}
                            iconPosition="start"
                            label="Business Services"
                            sx={tabStyles}
                        />
                    </Tabs>
                </Box>
                <Box sx={{ my: 2 }}>
                    <Grid container spacing={3}>
                        {serviceItems[activeTab].map((service, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Box sx={{ p: 3, height: '100%' }}>
                                    <Box display="flex" gap={3}>
                                        <Box>
                                            {service.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" component="h3" gutterBottom>
                                                <Link href="/registration" sx={{ color: 'black', textDecoration: 'none', fontWeight: 500, '&:hover': { color: '#1B8633' } }}>
                                                    {service.title}
                                                </Link>
                                            </Typography>
                                            <Typography variant="body1" color="#757F95">
                                                {service.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box textAlign="center" pt={4}>
                    <Link
                        href="/services"
                        sx={{
                            color: '#1B8633',
                            borderBottom: 2,
                            borderColor: '#1B8633',
                            borderRadius: 0,
                            px: 2,
                            pb: 1,
                            textDecoration: 'none',
                        }}
                    >
                        More details
                    </Link>
                </Box>
            </Container>
        </Box >
    );
};

export default ServicesSection;