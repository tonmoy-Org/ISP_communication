'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider,
    Box,
    Container,
    ListItemButton,
} from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import logo from '@/public/logo/isp-logo.webp';

const MainHeader: React.FC = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [isClient, setIsClient] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const closeDrawer = () => setOpenDrawer(false);

    const handleAnchorClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (isClient) {
                window.history.pushState({}, '', `#${id}`);
            }
        }
    };

    const linkStyles = (path: string) => {
        if (!isClient) return {
            color: 'black',
            fontWeight: 500,
            cursor: 'pointer',
            '&:hover': { color: '#1B8633' },
            textDecoration: 'none',
        };

        return {
            color: pathname === path || (path.startsWith('#') && window.location.hash === path) ? '#1B8633' : 'black',
            fontWeight: pathname === path || (path.startsWith('#') && window.location.hash === path) ? 600 : 500,
            cursor: 'pointer',
            '&:hover': { color: '#1B8633' },
            textDecoration: 'none',
        };
    };

    return (
        <Box sx={{ px: { xs: 2, md: 8.5 } }}>
            <Container maxWidth="xl">
                <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', py: { xs: 1, lg: 0.9 } }}>
                    <Toolbar sx={{ padding: { xs: '0 !important', md: '0 16px !important' }, justifyContent: { xs: 'space-between', md: 'flex-start' } }}>
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: { md: 5 } }}>
                            <Link href="/" passHref legacyBehavior>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Image src={logo} alt="Logo" width={80} height={80} />
                                </Box>
                            </Link>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, flexGrow: 0 }}>
                            <Link href="/" passHref>
                                <Typography component="span" sx={linkStyles('/')}>Home</Typography>
                            </Link>

                            <Typography component="span" sx={linkStyles('#about')} onClick={(e) => handleAnchorClick(e, 'about')}>About Us</Typography>

                            <Link href="/services" passHref>
                                <Typography component="span" sx={linkStyles('/services')}>Services</Typography>
                            </Link>

                            <Typography component="span" sx={linkStyles('#packages')} onClick={(e) => handleAnchorClick(e, 'packages')}>Packages</Typography>

                            <Link href="/sme" passHref>
                                <Typography component="span" sx={linkStyles('/sme')}>SME</Typography>
                            </Link>

                            <Link href="http://10.10.10.3/" passHref>
                                <Typography component="span" sx={linkStyles('/ftp')}>FTP</Typography>
                            </Link>

                            <Link href="/registration" passHref>
                                <Typography component="span" sx={linkStyles('/registration')}>Registration</Typography>
                            </Link>

                            <Link href="/customer-care" passHref>
                                <Typography component="span" sx={linkStyles('/customer-care')}>Customer Care</Typography>
                            </Link>

                            <Link href="/contacts" passHref>
                                <Typography component="span" sx={linkStyles('/contacts')}>Contacts</Typography>
                            </Link>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => setOpenDrawer(true)}>
                            <MenuIcon sx={{ fontSize: 45 }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={openDrawer}
                    onClose={closeDrawer}
                    PaperProps={{ sx: { width: { xs: '80%', sm: '60%' }, maxWidth: 320 } }}
                >
                    <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Image src={logo} alt="Logo" width={80} height={80} />
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
                            {[
                                { path: '/', label: 'Home' },
                                { path: '#about', label: 'About Us' },
                                { path: '/services', label: 'Services' },
                                { path: '#packages', label: 'Packages' },
                                { path: '/sme', label: 'SME' },
                                { path: 'http://10.10.10.3/', label: 'FTP' },
                                { path: '/registration', label: 'Registration' },
                                { path: '/customer-care', label: 'Customer Care' },
                                { path: '/contacts', label: 'Contacts' }
                            ].map((item) => (
                                <ListItem key={item.path} disablePadding>
                                    {item.path.startsWith('#') ? (
                                        <ListItemButton
                                            onClick={(e) => {
                                                e.preventDefault();
                                                closeDrawer();
                                                const id = item.path.substring(1);
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    if (isClient) {
                                                        window.history.pushState({}, '', item.path);
                                                    }
                                                }
                                            }}
                                            sx={{ px: 2 }}
                                        >
                                            <ListItemText primary={item.label} primaryTypographyProps={{ sx: linkStyles(item.path) }} />
                                        </ListItemButton>
                                    ) : (
                                        <ListItemButton component={Link} href={item.path} onClick={closeDrawer} sx={{ px: 2 }}>
                                            <ListItemText primary={item.label} primaryTypographyProps={{ sx: linkStyles(item.path) }} />
                                        </ListItemButton>
                                    )}
                                </ListItem>
                            ))}
                        </List>
                        <Box sx={{ mt: 'auto', p: 2 }}>
                            <Typography variant="body2" color="text.secondary" textAlign="center">
                                ISP Communication
                            </Typography>
                        </Box>
                    </Box>
                </Drawer>
            </Container>
        </Box>
    );
};

export default MainHeader;