'use client';

import React from 'react';
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
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    const pathname = usePathname();

    const closeDrawer = () => setOpenDrawer(false);

    // Smooth scroll function for anchor links
    const handleAnchorClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Update URL without page reload
            window.history.pushState({}, '', `#${id}`);
        }
    };

    const linkStyles = (path: string) => ({
        color: pathname === path || (path.startsWith('#') && window.location.hash === path) ? '#1B8633' : 'black',
        fontWeight: pathname === path || (path.startsWith('#') && window.location.hash === path) ? 600 : 500,
        cursor: 'pointer',
        '&:hover': { color: '#1B8633' },
        textDecoration: 'none'
    });

    return (
        <Box sx={{ px: { xs: 2, md: 8.5 } }}>
            <Container maxWidth="xl">
                <AppBar position="static" sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    py: { xs: 1.4, lg: 0.9 }
                }}>
                    <Toolbar sx={{
                        padding: { xs: '0 !important', md: '0 16px !important' },
                        justifyContent: { xs: 'space-between', md: 'flex-start' }
                    }}>
                        {/* Logo (Left side - both mobile & desktop) */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: { md: 5 } }}>
                            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                        maxWidth: '80px',
                                        maxHeight: '80px'
                                    }}
                                />
                            </Link>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        {/* Desktop Navigation Links */}
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 5,
                            flexGrow: 0
                        }}>
                            <Link href="/" style={linkStyles('/')}>Home</Link>
                            <a
                                href="#about"
                                style={linkStyles('#about') as React.CSSProperties}
                                onClick={(e) => handleAnchorClick(e, 'about')}
                            >
                                About Us
                            </a>
                            <Link href="/services" style={linkStyles('/services')}>Services</Link>
                            <a
                                href="#packages"
                                style={linkStyles('#packages') as React.CSSProperties}
                                onClick={(e) => handleAnchorClick(e, 'packages')}
                            >
                                Packages
                            </a>
                            <Link href="/sme" style={linkStyles('/sme')}>SME</Link>
                            <Link href="http://10.10.10.3/" style={linkStyles('/ftp')}>FTP</Link>
                            <Link href="/registration" style={linkStyles('/registration')}>Registration</Link>
                            <Link href="/customer-care" style={linkStyles('/customer-care')}>Customer Care</Link>
                            <Link href="/contacts" style={linkStyles('/contacts')}>Contacts</Link>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={() => setOpenDrawer(true)}
                        >
                            <MenuIcon sx={{ fontSize: 45 }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={openDrawer}
                    onClose={closeDrawer}
                    PaperProps={{
                        sx: {
                            width: { xs: '80%', sm: '60%' },
                            maxWidth: 320
                        }
                    }}
                >
                    <Box
                        sx={{
                            p: 2,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Image
                                src={logo}
                                alt="Logo"
                                width={80}
                                height={80}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '80px',
                                    maxHeight: '80px'
                                }}
                            />
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
                                    <ListItemButton
                                        onClick={() => {
                                            closeDrawer();
                                            if (item.path.startsWith('#')) {
                                                const id = item.path.substring(1);
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    element.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start',
                                                    });
                                                    window.history.pushState({}, '', item.path);
                                                }
                                            }
                                        }}
                                        sx={{ px: 2 }}
                                    >
                                        {item.path.startsWith('#') ? (
                                            <a
                                                href={item.path}
                                                style={{
                                                    textDecoration: 'none',
                                                    width: '100%',
                                                    color: 'inherit'
                                                }}
                                            >
                                                <ListItemText
                                                    primary={item.label}
                                                    primaryTypographyProps={{
                                                        sx: linkStyles(item.path)
                                                    }}
                                                />
                                            </a>
                                        ) : (
                                            <Link
                                                href={item.path}
                                                style={{
                                                    textDecoration: 'none',
                                                    width: '100%',
                                                    color: 'inherit'
                                                }}
                                            >
                                                <ListItemText
                                                    primary={item.label}
                                                    primaryTypographyProps={{
                                                        sx: linkStyles(item.path)
                                                    }}
                                                />
                                            </Link>
                                        )}
                                    </ListItemButton>
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