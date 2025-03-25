"use client";

import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const FAQSection = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqData = [
        {
            question: "What services does ISP COMMUNICATION  offer?",
            answer: "ISP COMMUNICATION  provides broadband internet, corporate solutions, VPN services, IP Telephony, web hosting, server colocation, video conferencing licenses, and enterprise networking solutions."
        },
        {
            question: "Where is ISP COMMUNICATION 's internet service available?",
            answer: "Our broadband services cover all 64 districts in Bangladesh, with dedicated fiber optic and radio connectivity. We have 55 local offices for last-mile support."
        },
        {
            question: "How can I check my internet speed?",
            answer: "You can check your internet speed using Speedtest by Ookla (https://www.speedtest.net/) or similar services."
        },
        {
            question: "Do you provide Real IP?",
            answer: "Yes, ISP COMMUNICATION  offers Dynamic Real IP to customers by default. Static Real IP is available upon request for business and enterprise users."
        },
        {
            question: "How do I pay my ISP COMMUNICATION  internet bill?",
            answer: "Payments can be made via bKash, Rocket, Nagad, bank transfers, and online payment gateways. Bank transactions take up to 2 working hours, while mobile financial services (MFS) update within 10 minutes."
        },
        {
            question: "Does ISP COMMUNICATION  have an FTP server?",
            answer: "Yes, ISP COMMUNICATION  maintains an FTP server offering movies, TV series, software, and more. Contact support for access details."
        },
        {
            question: "What video conferencing solutions do you offer?",
            answer: "We provide licensed video conferencing solutions for Zoom, Google Meet, and Microsoft Teams."
        },
        {
            question: "Do you offer business internet solutions?",
            answer: "Yes, we provide corporate internet, VPN services, IP Telephony, dedicated bandwidth, and colocation services tailored for businesses."
        },
        {
            question: "Do you provide SSL Certificates?",
            answer: "Yes, we offer Digicert SSL certificates – including OV, DV, and EV SSL – along with full installation support."
        },
        {
            question: "How can I get a new connection?",
            answer: "You can apply for a new connection via our Registration Page or visit any of our local offices for assistance."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach us 24/7 at support@icc-communication.com or call us at 09639123000 / 09639123123."
        },
        {
            question: "What is your support availability?",
            answer: "Our dedicated support team is available 24/7 to assist with any queries or issues you may encounter."
        },
        {
            question: "Do you offer bulk SMS and email services?",
            answer: "Yes, we provide a proprietary software solution for efficient bulk SMS and email services, ensuring reliable communication for businesses."
        },
        {
            question: "What measures ensure the security of your network?",
            answer: "We employ state-of-the-art fiber optic and radio connectivity, advanced VPN solutions, and strict security protocols to ensure a secure and reliable network."
        }
    ];

    return (
        <Box sx={{ px: { xs: 0, lg: 10 }, bgcolor: '#F8F9FA' }}>
            <Container maxWidth="xl" component="section" sx={{
                py: { xs: 6, md: 8 },
            }}>
                <h1 className="lg:text-[2.3rem] text-3xl font-semibold mb-2 text-center">
                    Frequently Asked Questions
                </h1>
                <Typography variant="subtitle1" textAlign="center" sx={{ mb: 5, color: '#757F95' }}>
                    Find answers to common queries about our services, connectivity, and support.
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        {faqData.slice(0, 7).map((faq, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    mb: 2,
                                    boxShadow: 'none',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 1,
                                    '&:before': {
                                        display: 'none'
                                    }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        bgcolor: expanded === `panel${index}` ? 'action.hover' : 'background.paper',
                                        borderRadius: 1
                                    }}
                                >
                                    <Typography variant="subtitle1" fontWeight={500}>
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ bgcolor: 'background.default' }}>
                                    <Typography variant="body1" color="#757F95">
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {faqData.slice(7).map((faq, index) => (
                            <Accordion
                                key={index + 7}
                                expanded={expanded === `panel${index + 7}`}
                                onChange={handleChange(`panel${index + 7}`)}
                                sx={{
                                    mb: 2,
                                    boxShadow: 'none',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 1,
                                    '&:before': {
                                        display: 'none'
                                    }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        bgcolor: expanded === `panel${index + 7}` ? 'action.hover' : 'background.paper',
                                        borderRadius: 1
                                    }}
                                >
                                    <Typography variant="subtitle1" fontWeight={500}>
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ bgcolor: 'background.default' }}>
                                    <Typography variant="body1">
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FAQSection;