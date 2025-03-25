"use client";

import { Container, Typography, Box, Grid, Button, List, ListItem, ListItemText, Paper, ListItemIcon } from "@mui/material";
import { CheckCircle, Star } from "@mui/icons-material";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Link from "next/link";

const SMEPricing = () => {
    const plans = [
        {
            name: "SME Silver",
            price: 3675,
            features: [
                "50 Mbps Internet",
                "Free Talk Time 200 Min",
                "High Availability",
                "FTTH Technology",
                "Selfcare Portal",
                "24/7 Customer Support",
                "Real IP - 1",
                "Payment: Bkash / Rocket",
                "OTC - 2000 Taka",
                "Condition Apply"
            ],
            featured: false
        },
        {
            name: "SME Gold",
            price: 5250,
            features: [
                "75 Mbps Internet",
                "Free Talk Time 200 Min",
                "High Availability",
                "FTTH Technology",
                "Selfcare Portal",
                "24/7 Customer Support",
                "Real IP - 1",
                "Payment: Bkash / Rocket",
                "OTC - 2000 Taka",
                "Condition Apply"
            ],
            featured: false
        },
        {
            name: "SME Platinum",
            price: 7350,
            features: [
                "100 Mbps Internet",
                "Free Talk Time 200 Min",
                "High Availability",
                "FTTH Technology",
                "Selfcare Portal",
                "24/7 Customer Support",
                "Real IP - 2",
                "Payment: Bkash / Rocket",
                "OTC - 2000 Taka",
                "Condition Apply"
            ],
            featured: true
        }
    ];

    return (
        <Box>
            <SectionTitle
                title="SME Internet Solutions"
                shortTitle="Tailored for Small & Medium Businesses"
                route={[
                    { name: 'Home', path: '/' },
                    { name: 'Services', path: '/services' },
                    { name: 'SME Solutions', path: '/services/sme' }
                ]}
            />
            <Box component="section" sx={{
                py: { xs: 6, md: 10 },
                bgcolor: '#F8F9FA'
            }}>
                <Container maxWidth="lg">
                    <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                position: 'relative',
                                pb: 2,
                                fontSize: { xs: '1.8rem', md: '2.5rem' },
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '3px',
                                    bgcolor: '#1B8633'
                                }
                            }}
                        >
                            Reliable SME Internet Solutions
                        </Typography>
                        <Typography variant="subtitle1" sx={{ pt: 2, color: '#757F95' }}>
                            Empowering Enterprises with high-speed, secure, and uninterrupted <br />
                            internet connectivity tailored for business success.
                        </Typography>
                    </Box>

                    <Grid container spacing={4} justifyContent="center">
                        {plans.map((plan, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: plan.featured ? '2px solid' : 'none',
                                        borderColor: plan.featured ? '#1B8633' : 'transparent',
                                        transform: plan.featured ? 'scale(1.02)' : 'none',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            bgcolor: '#1B8633',
                                            color: 'common.white',
                                            textAlign: 'center',
                                            py: 2,
                                            px: 2,
                                            position: 'relative'
                                        }}
                                    >
                                        <Typography variant="h5" component="h3">
                                            {plan.name}
                                            {plan.featured && (
                                                <Star
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 8,
                                                        right: 8,
                                                        color: 'warning.main'
                                                    }}
                                                />
                                            )}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ p: 3, flexGrow: 1 }}>
                                        <Typography variant="h4" component="div" textAlign="center" sx={{ my: 2 }}>
                                            <Typography component="span" variant="h5">৳</Typography>
                                            {plan.price}
                                            <Typography component="span" variant="body1" color="#1B8633" sx={{ ml: 0.5 }}>
                                                / month
                                            </Typography>
                                        </Typography>

                                        <List dense>
                                            {plan.features.map((feature, i) => (
                                                <ListItem key={i} sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                                        <CheckCircle fontSize="small" />
                                                    </ListItemIcon>
                                                    <ListItemText sx={{ color: '#757F95' }} primary={feature} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>

                                    <Box sx={{ p: 2, textAlign: 'center' }}>
                                        <Button
                                            component={Link}
                                            href='/registration'
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                py: 1.5,
                                                fontWeight: 'bold',
                                                color: 'white',
                                                bgcolor: '#1B8633'
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default SMEPricing;