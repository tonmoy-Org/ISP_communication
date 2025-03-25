"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from '@/public/logo/isp-logo.webp';
import partners from '@/public/logo/ssl-partners.jpeg';
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
            <Box component="footer" sx={{ backgroundColor: "white", pt: { xs: 5, lg: 10 }, pb: 2, px: { xs: 4, md: 10 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} display="flex" justifyContent="space-between">
                        {/* Left Section: Logo & Info */}
                        <Grid item xs={12} md={6} lg={3}>
                            <Box mb={2}>
                                <Link href="/" passHref>
                                    <Image src={logo} alt="ISP COMMUNICATION" width={120} height={50} />
                                </Link>
                            </Box>
                            <Typography variant="body2" color="#757F95">
                                ISP COMMUNICATION is a nationwide ISP, providing high-speed internet, corporate solutions, VPN, and IP Telephony with 24/7 support across Bangladesh.
                            </Typography>
                            <Typography variant="body2" color="#757F95" mt={1}>
                                E-TIN: 259574727994
                            </Typography>
                            {/* Social Links */}
                            <Box display="flex" gap={2} mt={2}>
                                <Link href="https://www.facebook.com/iccbroadband/" target="_blank" rel="noopener noreferrer">
                                    <FacebookIcon sx={{ color: "#757F95", "&:hover": { color: "green" } }} />
                                </Link>
                                <Link href="https://www.linkedin.com/company/icc-communication-ltd/?originalSubdomain=bd" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon sx={{ color: "#757F95", "&:hover": { color: "green" } }} />
                                </Link>
                                <Link href="https://www.youtube.com/c/icccommunicationltd" target="_blank" rel="noopener noreferrer">
                                    <YouTubeIcon sx={{ color: "#757F95", "&:hover": { color: "green" } }} />
                                </Link>
                            </Box>
                        </Grid>

                        {/* Links Section 1 */}
                        <Grid item xs={6} md={3} lg={2}>
                            {["About us", "Services", "Packages", "SME", "FTP", "Registration", "Terms and Conditions", "Privacy Policy", "Return & Refund Policy"].map((link, index) => (
                                <Typography
                                    sx={{
                                        textDecoration: 'none',
                                        color: '#757F95',
                                        "&:hover": { color: "green" },
                                        lineHeight: 1.8, mb: 1
                                    }}
                                    key={index}
                                    variant="body2">
                                    <Link
                                        href={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                                        passHref
                                    >
                                        {link}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>

                        {/* Links Section 2 */}
                        <Grid item xs={6} md={3} lg={2}>
                            {["Graph", "Resellers", "Portal", "IP Telephony Registration", "Contacts"].map((link, index) => (
                                <Typography
                                    sx={{
                                        textDecoration: 'none',
                                        color: '#757F95',
                                        "&:hover": { color: "green" },
                                        lineHeight: 1.8, mb: 1
                                    }}
                                    key={index}
                                    variant="body2">
                                    <Link
                                        href={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                                        passHref
                                    >
                                        {link}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>

                        {/* Contact Section */}
                        <Grid item xs={12} md={6} lg={3}>
                            <Typography variant="h6" fontSize="16px" fontWeight="bold" mb={2}>
                                Contact Us 24/7
                            </Typography>
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <PhoneIcon sx={{ color: "green" }} />
                                <Link href="tel:09639123123" style={{ color: '#757F95', textDecoration: 'none' }}>
                                    09639123123
                                </Link>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <EmailIcon sx={{ color: "green" }} />
                                <Link href="mailto:support@icc-communication.com" style={{ color: '#757F95', textDecoration: 'none' }}>
                                    support@icc-communication.com
                                </Link>
                            </Box>
                            <Typography variant="body2" color="#757F95" mt={2}>
                                Network & Operations:
                            </Typography>
                            <Link href="mailto:noc@icc-communication.com" style={{ color: '#757F95', textDecoration: 'none' }}>
                                noc@icc-communication.com
                            </Link>
                            <Typography variant="h6" fontSize="16px" fontWeight="bold" mt={2}>
                                Address
                            </Typography>
                            <Box display="flex" alignItems="center" gap={1} mt={1}>
                                <LocationOnIcon sx={{ color: "green" }} />
                                <Typography variant="body2" color="#757F95">
                                    12/D, Road: 6, Plot: I/15-18, Pallabi, Mirpur, Dhaka-1216.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* SSL Partner Image */}
                    <Box sx={{ mt: { xs: 6, lg: 12 }, mb: 2 }} textAlign="center">
                        <Image
                            src={partners}
                            alt="SSL Partners"
                            width={1600}
                            height={400}
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: "contain"
                            }}
                        />
                    </Box>
                </Container>
            </Box>

            {/* Copyright */}
            <Box textAlign="center" pt={3} py={2.5} sx={{ backgroundColor: "black" }}>
                <Typography variant="body1" color="white">
                    © {currentYear} ISP COMMUNICATION Limited. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;