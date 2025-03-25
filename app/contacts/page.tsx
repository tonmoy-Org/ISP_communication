"use client";

import { Container, Typography, Box, Grid, Link, List, ListItem, ListItemIcon } from "@mui/material";
import { LocationOn, Phone, Business } from "@mui/icons-material";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const ContactPage = () => {
    const branches = [
        {
            name: "Barishal Service Office",
            address: "416 Police Line Rd, Barisal",
            phone: "01322907136"
        },
        {
            name: "Bheramara Service Office",
            address: "1st floor, halam bisswash super market, Bheramara",
            phone: "09639123141"
        },
        {
            name: "Bogura Service Office",
            address: "Aziz Ahmed Taki Road, Bogra",
            phone: "01322907154"
        },
        {
            name: "Chattogram Service Office",
            address: "318 Sheikh Mujib Rd, Chittagong",
            phone: "01322907132"
        },
        {
            name: "Cox's Bazar Service Office",
            address: "Holding No# 405, Word No # 01,Tower Goli, Chor",
            phone: ["09639123140", "01671454177"]
        },
        {
            name: "Cumilla Service Office",
            address: "Artisan Nasir Center, 8-C Nazrul Ave, Comilla",
            phone: "01322907144"
        },
        {
            name: "Faridpur Service Office",
            address: "House-39,(2nd floor),Kobi, Kabi Jasim Uddin Rd, Faridpur",
            phone: "01322907147"
        },
        {
            name: "Jashore Service Office",
            address: "Shanti Kuthir, 394 Kazipara Road, Puraton Kosbah, Jessore",
            phone: "01322907137"
        },
        {
            name: "Jhenaidah Service Office",
            address: "Jhenaidah",
            phone: "01322907141"
        },
        {
            name: "Khulna Service Office",
            address: "55 KDA Ave, Khulna",
            phone: ["01322907130", "01322907209"]
        },
        {
            name: "Kushtia Service Office",
            address: "Halim Biswas Super Market, High Road, Moddho Bazar, Bheramara, Kushtia",
            phone: "01322907128"
        },
        {
            name: "Mirpur Service Office",
            address: "12/D, Road: 6, Plot: I/15-18, Pallabi, Mirpur, Dhaka",
            phone: ["09639123123", "01322907155"]
        },
        {
            name: "Mymensingh Service Office",
            address: "38 Choto Bazar Rd, Mymensingh",
            phone: "01322907139"
        },
        {
            name: "Pabna Service Office",
            address: "Dr. Imran Biswas Mansion 2nd Floor, A.Hamid Road, Gopalpur, Pabna",
            phone: "01322907135"
        },
        {
            name: "Rajbari Service Office",
            address: "House# 70, R# 710, Manik Mansion, Rajbari",
            phone: "01322907138"
        },
        {
            name: "Rajshahi Service Office",
            address: "H, 340 Veripara Mor, Rajshahi",
            phone: "01322907133"
        },
        {
            name: "Rangpur Service Office",
            address: "Shapla Road, Rangpur",
            phone: "01322907142"
        },
        {
            name: "Savar Service Office",
            address: "Savar",
            phone: "01322907143"
        },
        {
            name: "Sylhet Service Office",
            address: "Al-Hamra Shopping City, Zindabazar Sylhet",
            phone: "01322907140"
        }
    ];

    return (
        <Box>
            <SectionTitle
                title="Contact Us"
                shortTitle="Get in Touch"
                route={[
                    { name: 'Home', path: '/' },
                    { name: 'Contact', path: '/contact' }
                ]}
            />
            <Box component="section" sx={{
                py: { xs: 5, md: 8 },
                px: { xs: 0, lg: 10 },
                bgcolor: '#F8F9FA'
            }}>
                <Container maxWidth="xl">
                    <h1 className="lg:text-[2.5rem] text-3xl font-semibold mb-4 text-center py-5">
                        Our Branches & Contact Details
                    </h1>
                    <Grid container spacing={4}>
                        {branches.map((branch, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box sx={{
                                    p: 3,
                                    height: '100%',
                                    bgcolor: 'background.default',
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    transition: 'all 0.3s ease',
                                }}>
                                    <Typography variant="h6" component="h3" sx={{
                                        mb: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#1B8633',
                                        fontWeight: 'bold'
                                    }}>
                                        <Business sx={{ mr: 1 }} />
                                        {branch.name}
                                    </Typography>
                                    <List dense>
                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36, color: '#1B8633' }}>
                                                <LocationOn />
                                            </ListItemIcon>
                                            <Typography variant="body1" color="#757F95">{branch.address}</Typography>
                                        </ListItem>

                                        <ListItem sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 36, color: '#1B8633' }}>
                                                <Phone />
                                            </ListItemIcon>
                                            <Typography color="#757F95" variant="body1">
                                                For service/support: {' '}
                                                {Array.isArray(branch.phone) ? (
                                                    branch.phone.map((phone, i) => (
                                                        <span key={i}>
                                                            <Link href={`tel:${phone}`} color="#757F95">
                                                                {phone}
                                                            </Link>
                                                            {i < branch.phone.length - 1 ? ', ' : ''}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <Link href={`tel:${branch.phone}`} color="#757F95">
                                                        {branch.phone}
                                                    </Link>
                                                )}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Google Maps Section */}
                </Container>
            </Box>
            <Box sx={{
                height: { xs: '300px', md: '450px' },
                width: '100%',
                overflow: 'hidden',
            }}>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.0625255700257!2d90.32143148561656!3d23.880748480771334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c37ee749ff91%3A0x3ba6f00f068d5883!2sYounus%20Khan%20Scholars&#39;%20Garden%202(A)%20-%20DIU!5e0!3m2!1sen!2sbd!4v1720692354635!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    loading="lazy"
                />
            </Box>
        </Box>
    );
};

export default ContactPage;