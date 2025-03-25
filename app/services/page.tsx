"use client";

import {
    Container,
    Typography,
    Tabs,
    Tab,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Link as MuiLink,
    Box,
    useMediaQuery,
    useTheme,
    TableContainer
} from "@mui/material";
import {

    CheckCircle,
} from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle/SectionTitle";



const ServicesPage = () => {
    const [mainTab, setMainTab] = useState(0);
    const [internetSubTab, setInternetSubTab] = useState(0);
    const [solutionSubTab, setSolutionSubTab] = useState(0);
    const [iptspSubTab, setIptspSubTab] = useState(0);
    const [insightsSubTab, setInsightsSubTab] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMainTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
    };

    const handleInternetSubTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setInternetSubTab(newValue);
    };

    const handleSolutionSubTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSolutionSubTab(newValue);
    };

    const handleIptspSubTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setIptspSubTab(newValue);
    };

    const handleInsightsSubTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setInsightsSubTab(newValue);
    };

    const internetContent = [
        {
            title: "Home",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  Limited offers a range of broadband packages tailored to meet diverse
                        household needs, combining high-quality bandwidth, unlimited data, and competitive
                        pricing. We provide home packages through our branch offices in major cities across
                        Bangladesh.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Nationwide Coverage: Reliable service in urban and semi-urban areas.",
                            "Hybrid Technology: Fiber, wireless, and satellite integration for consistent speeds.",
                            "99.9% Uptime: Redundant infrastructure and 24/7 network monitoring.",
                            "No Hidden Costs: Transparent pricing with unlimited data.",
                            "24/7 Support: Instant technical assistance via phone, email, or chat."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>

                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table sx={{
                            mb: 2,
                            border: '1px solid #e0e0e0', // Add border to the table
                            '& .MuiTableCell-root': {
                                border: '1px solid #e0e0e0'
                            },
                            bgcolor: 'white',

                        }}>
                            <TableBody>
                                <TableRow>
                                    {["Free Installation*", "Bundled Services", "Flexible Contracts", "Advanced Security"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography variant="body2">*Condition apply.</Typography>
                </Box>
            )
        },
        {
            title: "Corporate",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  empowers businesses with robust and scalable corporate broadband
                        solutions. Our advanced network infrastructure, built on cutting-edge fiber, wireless,
                        and satellite technologies, ensures seamless connectivity, enabling your organization to
                        operate at peak performance.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Bundle Package: Broadband Internet and IPTSP (Phone)",
                            "Nationwide Network Coverage: Enjoy consistent, reliable connectivity across Bangladesh.",
                            "99.9% Uptime Guarantee: Our redundant infrastructure and 24/7 Network Operations Center minimize downtime.",
                            "Advanced Technology: Leverage state-of-the-art fiber optics and wireless solutions.",
                            "Dedicated Corporate Support: Our team is always on standby, providing personalized assistance.",
                            "OTC: One-time cost"
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>

                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table sx={{
                            mb: 2,
                            border: '1px solid #e0e0e0', // Add border to the table
                            '& .MuiTableCell-root': {
                                border: '1px solid #e0e0e0'
                            },
                            bgcolor: 'white',

                        }}>
                            <TableBody>
                                <TableRow>
                                    {["Cloud Integration", "Industry-Specific Compliance", "Bundled Discounts", "IoT Readiness"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        },
        {
            title: "Small & Medium Enterprise",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  delivers tailor-made SME broadband solutions designed to fuel your
                        business growth. Our advanced network, built on state-of-the-art fiber and wireless
                        technologies, ensures reliable, high-speed connectivity to keep your operations running
                        smoothly and efficiently.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Industry-Specific Solutions: Custom setups for retail, healthcare, and education sectors.",
                            "SME-Tailored Bundles: Flexible plans for startups and growing businesses",
                            "Nationwide Coverage: Seamless connectivity across Bangladesh.",
                            "High-Speed Performance: Optimized for critical business applications.",
                            "99.9% Uptime Guarantee: A redundant network infrastructure ensures uninterrupted service.",
                            "Dedicated SME Support: Personalized, round-the-clock customer assistance.",
                            "Competitive Pricing: Cost-effective packages that deliver superior performance."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table sx={{
                            mb: 2,
                            border: '1px solid #e0e0e0', // Add border to the table
                            '& .MuiTableCell-root': {
                                border: '1px solid #e0e0e0'
                            },
                            bgcolor: 'white'
                        }}>
                            <TableBody>
                                <TableRow>
                                    {["Industry-Specific Solutions", "Cost-Effective Plans", "Quick Deployment", "Cybersecurity"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        },
        {
            title: "Internet Dedicated",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  delivers enterprise-grade dedicated internet connectivity engineered
                        for high-demand environments. Our solutions leverage advanced fiber and wireless
                        technologies to ensure consistent, uninterrupted performance across Bangladesh.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Robust Infrastructure: Our state-of-the-art network and redundant systems guarantee seamless connectivity.",
                            "99.9% Uptime Guarantee: A 24/7 Network Operations Center ensures real-time monitoring.",
                            "Nationwide Coverage: Reliable, dedicated service no matter where your business is located.",
                            "Competitive Pricing: Cost-effective packages that deliver superior performance and value."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>

                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table sx={{
                            mb: 2,
                            border: '1px solid #e0e0e0', // Add border to the table
                            '& .MuiTableCell-root': {
                                border: '1px solid #e0e0e0'
                            },
                            bgcolor: 'white'
                        }}>
                            <TableBody>
                                <TableRow>
                                    {["Custom SLAs", "Dedicated Support", "Redundant Fiber Backbone", "Advanced Security"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        },
        {
            title: "Business Broadband",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  delivers high-speed, enterprise-grade broadband solutions engineered
                        with advanced fiber, wireless, and satellite technologies. Designed for modern
                        businesses, our services ensure seamless connectivity, scalability, and security to
                        power your operations across Bangladesh.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "99.9% Uptime Guarantee: Enjoy uninterrupted business operations with our redundant network infrastructure.",
                            "Nationwide Coverage: Connect your business seamlessly across all regions.",
                            "Dedicated Corporate Support: Benefit from personalized, round-the-clock assistance.",
                            "Competitive Pricing: Access premium connectivity solutions at cost-effective rates.",
                            "Scalable Solutions: Our broadband services are designed to grow with your business."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table sx={{
                            mb: 2,
                            border: '1px solid #e0e0e0', // Add border to the table
                            '& .MuiTableCell-root': {
                                border: '1px solid #e0e0e0'
                            },
                            bgcolor: 'white'
                        }}>
                            <TableBody>
                                <TableRow>
                                    {["Custom SLAs", "Dedicated Support", "Cost-Effective Excellence", "Advanced Security"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        }
    ];

    const solutionContent = [
        {
            title: "Business Service",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  delivers end-to-end ICT solutions designed to integrate seamlessly into your business environment.
                        Beyond connectivity, we provide strategic network design, deployment, and 24/7 support tailored to your unique operational needs.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Specialized Services:</Typography>
                    <Typography variant="body1" color="#757F95" paragraph>
                        Our Business Solutions include{' '}
                        <MuiLink component={Link} href="/register" sx={{ color: '#1B8633', textDecoration: 'none' }}>Lan Managed</MuiLink>,{' '}
                        <MuiLink component={Link} href="/register" sx={{ color: '#1B8633', textDecoration: 'none' }}>WAN Managed</MuiLink>,{' '}
                        <MuiLink component={Link} href="/register" sx={{ color: '#1B8633', textDecoration: 'none' }}>IP Telephony Service</MuiLink>,{' '}
                        <MuiLink component={Link} href="/register" sx={{ color: '#1B8633', textDecoration: 'none' }}>Video Communications</MuiLink>,{' '}
                        <MuiLink component={Link} href="/register" sx={{ color: '#1B8633', textDecoration: 'none' }}>Bulk SMS and Email</MuiLink>,{' '}
                        <MuiLink component={Link} href="/register" sx={{ color: '#1B8633', textDecoration: 'none' }}>Domain Hosting</MuiLink> etc.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Custom-Tailored Solutions: ICT strategies aligned with your business goals, from SMEs to enterprises.",
                            "Expert Integration & Deployment: Advanced technology implementation with minimal downtime.",
                            "24/7 Dedicated Support: Round-the-clock technical assistance for uninterrupted operations.",
                            "Scalability & Future-Proofing: Solutions that evolve with your business growth.",
                            "Competitive Pricing: Premium services at cost-effective rates, with no hidden fees."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table sx={{
                            mb: 2,
                            border: '1px solid #e0e0e0', // Add border to the table
                            '& .MuiTableCell-root': {
                                border: '1px solid #e0e0e0'
                            },
                            bgcolor: 'white'
                        }}>
                            <TableBody>
                                <TableRow>
                                    {["Cloud Integration", "Industry-Specific Compliance", "Bundled Discounts", "IoT Readiness"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        },
        {
            title: "Business Solution",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  delivers end-to-end business solutions that transcend basic connectivity,
                        empowering enterprises with tailored ICT strategies for reliability, scalability, and future-ready growth.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Specialized Solutions:</Typography>
                    <Typography variant="body1" color="#757F95" paragraph>
                        Our Business Solutions include{' '}
                        <MuiLink component={Link} sx={{ color: '#1B8633', textDecoration: 'none' }} href="/register">Lan Managed</MuiLink>,{' '}
                        <MuiLink component={Link} sx={{ color: '#1B8633', textDecoration: 'none' }} href="/register">WAN Managed</MuiLink>,{' '}
                        <MuiLink component={Link} sx={{ color: '#1B8633', textDecoration: 'none' }} href="/register">IP Telephony Service</MuiLink>,{' '}
                        <MuiLink component={Link} sx={{ color: '#1B8633', textDecoration: 'none' }} href="/register">Video Communications</MuiLink>,{' '}
                        <MuiLink component={Link} sx={{ color: '#1B8633', textDecoration: 'none' }} href="/register">Bulk SMS and Email</MuiLink>,{' '}
                        <MuiLink component={Link} sx={{ color: '#1B8633', textDecoration: 'none' }} href="/register">Domain Hosting</MuiLink> etc.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Customized ICT Solutions: Tailored services that align with your unique business needs.",
                            "Unmatched Network Reliability: 99.9% uptime backed by redundant, state-of-the-art network infrastructure.",
                            "Nationwide Coverage: Seamless, high-speed connectivity across Bangladesh.",
                            "24/7 Expert Support: Dedicated, round-the-clock technical assistance ensuring uninterrupted operations.",
                            "Competitive Pricing: Premium performance at cost-effective rates, with no hidden fees."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table
                            sx={{
                                mb: 2,
                                border: '1px solid #e0e0e0', // Add border to the table
                                '& .MuiTableCell-root': {
                                    border: '1px solid #e0e0e0'
                                },
                                bgcolor: 'white'
                            }}>
                            <TableBody>
                                <TableRow>
                                    {["SME-Focused Bundles", "Industry-Specific SLAs", "Cybersecurity Add-Ons", "IoT Readiness"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        },
        {
            title: "Enterprise",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  offers a comprehensive suite of enterprise services designed to meet the dynamic needs of modern businesses.
                        Leveraging advanced technologies, we provide seamless connectivity and enhanced operational efficiency.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Specialized Services:</Typography>
                    <List dense>
                        {[
                            "Manage Network Services: We design, build, and maintain tailored network architectures.",
                            "Comprehensive Service Portfolio: Beyond internet connectivity, our offerings include IP telephony services.",
                            "Network Security Solutions: Advanced cybersecurity measures such as firewalls, intrusion detection systems.",
                            "Dedicated Customer Support: Our commitment to excellence is reflected in our 24/7 customer support."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>

                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table
                            sx={{
                                mb: 2,
                                border: '1px solid #e0e0e0', // Add border to the table
                                '& .MuiTableCell-root': {
                                    border: '1px solid #e0e0e0'
                                },
                                bgcolor: 'white'
                            }}>
                            <TableBody>
                                <TableRow>
                                    {["Innovative Solutions", "Industry-Specific SLAs", "Value-Driven Packages", "Proactive Maintenance"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        },
        {
            title: "Public Sector",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        Broadband internet providers in Bangladesh have developed specialized services to empower public sector organizations—such as government bodies,
                        educational institutions, and public service agencies—with reliable and secure ICT solutions.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Specialized Services:</Typography>
                    <List dense>
                        {[
                            "Tailored Network Architectures: Providers design, build, and maintain network infrastructures specifically for the public sector.",
                            "IP Telephony Services: Our IP telephony solutions offer attractive minute rates and additional savings.",
                            "Enhanced Cybersecurity and Data Protection: Advanced security measures to safeguard sensitive data.",
                            "Extensive FTP Server Access: We provide access to a vast repository of digital content."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>

                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table
                            sx={{
                                mb: 2,
                                border: '1px solid #e0e0e0', // Add border to the table
                                '& .MuiTableCell-root': {
                                    border: '1px solid #e0e0e0'
                                },
                                bgcolor: 'white'
                            }}>
                            <TableBody>
                                <TableRow>
                                    {["Innovative Solutions", "Proactive 24/7 Support", "Competitive Features", "Value-Added Services"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        }
    ];

    const iptspContent = [
        {
            title: "Home",
            content: (
                <Box>
                    <Typography variant="body1" color="#757F95" paragraph>
                        ISP COMMUNICATION  offers a diverse range of Internet Protocol Telephony Service Provider (IPTSP)
                        and Telecommunication Value-Added Services (TVAS) solutions, tailored to meet the unique requirements of various customer segments.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Specialized Services:</Typography>
                    <List dense>
                        {[
                            "IP Telephony: Affordable voice communication services over the internet.",
                            "Value-Added Services: Access to entertainment options such as IPTV, online gaming platforms."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        },
        {
            title: "Corporate",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Specialized Services:</Typography>
                    <List dense>
                        {[
                            "Unified Communications: Integrated voice, video, and messaging services.",
                            "Advanced Call Management: Features like auto-attendant, call routing."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        },
        {
            title: "Small & Medium Enterprise",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Specialized Services:</Typography>
                    <List dense>
                        {[
                            "Scalable Telephony Solutions: Cost-effective IP telephony services.",
                            "Business TVAS: Services such as virtual fax, call recording."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        },
        {
            title: "Group of Industry",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Specialized Services:</Typography>
                    <List dense>
                        {[
                            "Inter-Branch Connectivity: Secure and reliable communication channels.",
                            "Customized Solutions: Tailored IPTSP and TVAS packages."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        },
        {
            title: "Distributor & Reseller",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Specialized Services:</Typography>
                    <List dense>
                        {[
                            "White-Label Services: Opportunities to rebrand and offer our IPTSP and TVAS solutions.",
                            "Training and Support: Comprehensive training programs and ongoing support."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>

                    <TableContainer
                        sx={{
                            width: {
                                xs: '350px',
                                sm: '350px',
                                md: '100%',
                            },
                        }}
                    >
                        <Table sx={{
                            mb: 2,
                            border: '1px solid #e0e0e0', // Add border to the table
                            '& .MuiTableCell-root': {
                                border: '1px solid #e0e0e0'
                            },
                            bgcolor: 'white'
                        }}>
                            <TableBody>
                                <TableRow>
                                    {["Innovative Solutions", "Proactive 24/7 Support", "Competitive Features", "Value-Added Services"].map((item) => (
                                        <TableCell key={item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )
        }
    ];

    const insightsContent = [
        {
            title: "Key Benefits",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Key Benefits:</Typography>
                    <List dense>
                        {[
                            "Reliable High-Speed Connectivity: ICC delivers cutting-edge high-speed internet via a nationwide MPLS network.",
                            "Simplified Service Provisioning: Streamlined ordering, provisioning, and support processes.",
                            "Comprehensive Service Portfolio: Offers broadband internet, IP telephony, VPN, web hosting, and more.",
                            "Nationwide Coverage: Extensive network coverage spans major urban centers.",
                            "Enhanced Security & Redundancy: Advanced technology and backup systems.",
                            "Competitive Pricing & Value-Added Services: Affordable packages with benefits.",
                            "Robust Distribution Network: Direct sales and indirect channels.",
                            "Proven Industry Reputation: Over a decade of market presence (since 2012)."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        },
        {
            title: "Key Features",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Advanced MPLS Infrastructure: State-of-the-art MPLS backbone with high-end equipment.",
                            "Compliance & Certifications: Licensed by BTRC and ISO 9001:2008 certified.",
                            "24/7 Network Operations Center (NOC): Round-the-clock monitoring.",
                            "User-Friendly Self-Service Portals: Simplify account management.",
                            "Integrated IT Solutions: IP telephony, VPN, web hosting, and value-added services."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        },
        {
            title: "Addressing Customer",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Slow/Unstable Internet: High-speed MPLS network minimizes downtime.",
                            "Complex Setup & Billing: Streamlined processes and self-service portals.",
                            "Security Concerns: Advanced safeguards and 24/7 NOC support.",
                            "Limited Remote Reach: Multi-channel distribution ensures accessibility."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        },
        {
            title: "Certifications & Affiliations",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Licenses: BTRC (ISP, IPTSP, TVAS).",
                            "Certifications: ISO 9001:2008.",
                            "Industry Memberships: ISPAB, APNIC, BDIX."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        },
        {
            title: "Competitive Edge",
            content: (
                <Box>
                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <List dense>
                        {[
                            "Cutting-Edge Technology: MPLS infrastructure and partnerships with global tech leaders.",
                            "Customer-centric Approach: Focus on affordability, security, and ease of use.",
                            "Strategic Distribution: Direct and indirect channels ensure nationwide reach."
                        ].map((item, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32, color: '#1B8633' }}>
                                    <CheckCircle fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{ color: '#757F95' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )
        }
    ];


    const tabStyles = {
        mx: 1,
        minHeight: 'auto',
        color: '#1B8633',
        fontWeight: 500,
        '&.Mui-selected': {
            bgcolor: '#1B8633',
            color: 'common.white',
            borderRadius: 10
        }
    };


    return (
        <Box>
            <SectionTitle
                title="Our Services"
                shortTitle="What We Offer"
                route={[
                    { name: 'Services', path: '/services' },
                    { name: 'Internet', path: '/services/internet' }
                ]}
            />
            <Box component="section" sx={{
                py: { xs: 4, md: 8 },
                bgcolor: '#F8F9FA'
            }}>
                <Container maxWidth="lg">
                    <h1 className="lg:text-[2.3rem] text-3xl font-semibold mb-4 text-center py-5">
                        Comprehensive Digital & Connectivity Solutions
                    </h1>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Tabs
                            value={mainTab}
                            onChange={handleMainTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                '& .MuiTabs-indicator': {
                                    display: 'none'
                                }
                            }}
                        >
                            <Tab sx={tabStyles} label="Internet" iconPosition="start" />
                            <Tab sx={tabStyles} label="Solution" iconPosition="start" />
                            <Tab sx={tabStyles} label="IPTSP / TVAS" iconPosition="start" />
                            <Tab sx={tabStyles} label="Key Insights" iconPosition="start" />
                        </Tabs>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box sx={{
                            width: { md: 240 },
                            flexShrink: 0,
                            mb: { xs: 3, md: 0 },
                            mr: { md: 3 }
                        }}>
                            <Box sx={{ p: 0 }}>
                                {mainTab === 0 && (
                                    <Tabs
                                        orientation={isMobile ? 'horizontal' : 'vertical'}
                                        variant="scrollable"
                                        value={internetSubTab}
                                        onChange={handleInternetSubTabChange}
                                        sx={{
                                            borderRight: 1,
                                            borderColor: 'divider',
                                            '& .MuiTabs-indicator': {
                                                backgroundColor: '#1B8633',
                                                width: '3px'
                                            },
                                            '& .MuiTab-root.Mui-selected': {
                                                color: '#1B8633',
                                            },
                                            '& .MuiTab-root': {
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                textAlign: 'right',
                                                alignItems: 'end',
                                                '&:hover': {
                                                    color: '#1B8633',
                                                },
                                            },
                                        }}
                                    >
                                        <Tab label="Home" iconPosition="start" />
                                        <Tab label="Corporate" iconPosition="start" />
                                        <Tab label="Small & Medium Enterprise" iconPosition="start" />
                                        <Tab label="Internet Dedicated" iconPosition="start" />
                                        <Tab label="Business Broadband" iconPosition="start" />
                                    </Tabs>
                                )}
                                {mainTab === 1 && (
                                    <Tabs
                                        orientation={isMobile ? 'horizontal' : 'vertical'}
                                        variant="scrollable"
                                        value={solutionSubTab}
                                        onChange={handleSolutionSubTabChange}
                                        sx={{
                                            borderRight: 1,
                                            borderColor: 'divider',
                                            '& .MuiTabs-indicator': {
                                                backgroundColor: '#1B8633',
                                                width: '3px'
                                            },
                                            '& .MuiTab-root.Mui-selected': {
                                                color: '#1B8633',
                                            },
                                            '& .MuiTab-root': {
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                textAlign: 'right',
                                                alignItems: 'end',
                                                '&:hover': {
                                                    color: '#1B8633',
                                                },
                                            },
                                        }}
                                    >
                                        <Tab label="Business Service" iconPosition="start" />
                                        <Tab label="Business Solution" iconPosition="start" />
                                        <Tab label="Enterprise" iconPosition="start" />
                                        <Tab label="Public Sector" iconPosition="start" />
                                    </Tabs>
                                )}
                                {mainTab === 2 && (
                                    <Tabs
                                        orientation={isMobile ? 'horizontal' : 'vertical'}
                                        variant="scrollable"
                                        value={iptspSubTab}
                                        onChange={handleIptspSubTabChange}
                                        sx={{
                                            borderRight: 1,
                                            borderColor: 'divider',
                                            '& .MuiTabs-indicator': {
                                                backgroundColor: '#1B8633',
                                                width: '3px'
                                            },
                                            '& .MuiTab-root.Mui-selected': {
                                                color: '#1B8633',
                                            },
                                            '& .MuiTab-root': {
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                textAlign: 'right',
                                                alignItems: 'end',
                                                '&:hover': {
                                                    color: '#1B8633',
                                                },
                                            },
                                        }}
                                    >
                                        <Tab label="Home" iconPosition="start" />
                                        <Tab label="Corporate" iconPosition="start" />
                                        <Tab label="Small & Medium Enterprise" iconPosition="start" />
                                        <Tab label="Group of Industry" iconPosition="start" />
                                        <Tab label="Distributor & Reseller" iconPosition="start" />
                                    </Tabs>
                                )}
                                {mainTab === 3 && (
                                    <Tabs
                                        orientation={isMobile ? 'horizontal' : 'vertical'}
                                        variant="scrollable"
                                        value={insightsSubTab}
                                        onChange={handleInsightsSubTabChange}
                                        sx={{
                                            borderRight: 1,
                                            borderColor: 'divider',
                                            '& .MuiTabs-indicator': {
                                                backgroundColor: '#1B8633',
                                                width: '3px'
                                            },
                                            '& .MuiTab-root.Mui-selected': {
                                                color: '#1B8633',
                                            },
                                            '& .MuiTab-root': {
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                textAlign: 'right',
                                                alignItems: 'end',
                                                '&:hover': {
                                                    color: '#1B8633',
                                                },
                                            },
                                        }}
                                    >
                                        <Tab label="Key Benefits" iconPosition="start" />
                                        <Tab label="Key Features" iconPosition="start" />
                                        <Tab label="Addressing Customer" iconPosition="start" />
                                        <Tab label="Certifications & Affiliations" iconPosition="start" />
                                        <Tab label="Competitive Edge" iconPosition="start" />
                                    </Tabs>
                                )}
                            </Box>
                        </Box>

                        {/* Content area */}
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ p: 3 }}>
                                {mainTab === 0 && internetContent[internetSubTab].content}
                                {mainTab === 1 && solutionContent[solutionSubTab].content}
                                {mainTab === 2 && iptspContent[iptspSubTab].content}
                                {mainTab === 3 && insightsContent[insightsSubTab].content}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default ServicesPage;