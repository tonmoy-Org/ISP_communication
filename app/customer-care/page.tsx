'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import {
    Box,
    Container,
    Tabs,
    Tab,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider
} from '@mui/material';
import {
    Phone as PhoneIcon,
    Email as EmailIcon,
    Chat as ChatIcon,
    Business as BusinessIcon,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

export default function CustomerCare() {
    const [activeTab, setActiveTab] = useState('support');
    const [expandedFaq, setExpandedFaq] = useState<string | false>(false);

    const handleFaqChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedFaq(isExpanded ? panel : false);
    };

    const faqs = [
        {
            id: 'faq1',
            question: "How do I reset my router?",
            answer: "Unplug your router for 30 seconds, then plug it back in. Wait 2 minutes for full reboot."
        },
        {
            id: 'faq2',
            question: "Why is my internet slow?",
            answer: "Check if multiple devices are connected, try restarting your router, or contact us for line testing."
        },
        {
            id: 'faq3',
            question: "How can I upgrade my package?",
            answer: "Log in to your customer portal or call our sales department at 123-456-7890."
        },
        {
            id: 'faq4',
            question: "When will service be restored in my area?",
            answer: "Check our outage map or call our 24/7 support line for updates on your specific area."
        }
    ];

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
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


    return (
        <div>
            <SectionTitle
                title="Customer Care"
                shortTitle="We're here to help 24/7"
                route={[
                    { name: 'Home', path: '/' },
                    { name: 'Customer Care', path: '/Customer Care' }
                ]}
            />
            <Box sx={{ bgcolor: '#F8F9FA', px: { xs: 0, lg: 10 } }}>
                <Container maxWidth="xl">
                    <Box py={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
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
                                    label="Support Options"
                                    value="support"
                                    sx={tabStyles}
                                />
                                <Tab
                                    label="Contact Us"
                                    value="contact"
                                    sx={tabStyles}
                                />
                                <Tab
                                    label="FAQs"
                                    value="faq"
                                    sx={tabStyles}
                                />
                            </Tabs>
                        </Box>

                        {/* Tab Content */}
                        <Box sx={{ bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 4 }}>
                            {/* Support Options */}
                            {activeTab === 'support' && (
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box display="flex" alignItems="center" mb={2}>
                                                    <Box sx={{ bgcolor: '#E8F5E9', p: 1.5, borderRadius: '50%', mr: 2 }}>
                                                        <PhoneIcon sx={{ color: '#1B8633' }} />
                                                    </Box>
                                                    <Typography variant="h6" component="h3">
                                                        24/7 Phone Support
                                                    </Typography>
                                                </Box>
                                                <Typography color="text.secondary" mb={2}>
                                                    Call our support team anytime
                                                </Typography>
                                                <Typography variant="h4" sx={{ color: '#1B8633' }} fontWeight="bold">
                                                    123-456-7890
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box display="flex" alignItems="center" mb={2}>
                                                    <Box sx={{ bgcolor: '#E8F5E9', p: 1.5, borderRadius: '50%', mr: 2 }}>
                                                        <EmailIcon sx={{ color: '#1B8633' }} />
                                                    </Box>
                                                    <Typography variant="h6" component="h3">
                                                        Email Support
                                                    </Typography>
                                                </Box>
                                                <Typography color="text.secondary" mb={2}>
                                                    We respond within 24 hours
                                                </Typography>
                                                <Typography variant="h6" sx={{ color: '#1B8633' }} fontWeight="medium">
                                                    support@yourisp.com
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box display="flex" alignItems="center" mb={2}>
                                                    <Box sx={{ bgcolor: '#E8F5E9', p: 1.5, borderRadius: '50%', mr: 2 }}>
                                                        <ChatIcon sx={{ color: '#1B8633' }} />
                                                    </Box>
                                                    <Typography variant="h6" component="h3">
                                                        Live Chat
                                                    </Typography>
                                                </Box>
                                                <Typography color="text.secondary" mb={2}>
                                                    Available 8AM-10PM daily
                                                </Typography>
                                                <Button
                                                    variant="contained"
                                                    sx={{ color: 'white', bgcolor: '#1B8633', borderRadius: 10 }}
                                                >
                                                    Start Chat
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Box display="flex" alignItems="center" mb={2}>
                                                    <Box sx={{ bgcolor: '#E8F5E9', p: 1.5, borderRadius: '50%', mr: 2 }}>
                                                        <BusinessIcon sx={{ color: '#1B8633' }} />
                                                    </Box>
                                                    <Typography variant="h6" component="h3">
                                                        Visit Our Office
                                                    </Typography>
                                                </Box>
                                                <Typography color="text.secondary" mb={2}>
                                                    Monday-Friday, 9AM-5PM
                                                </Typography>
                                                <Typography>
                                                    123 ISP Street<br />
                                                    Your City, State 12345
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            )}

                            {/* Contact Form */}
                            {activeTab === 'contact' && (
                                <Box maxWidth="md" mx="auto">
                                    <Box component="form" sx={{ '& .MuiTextField-root': { my: 2 } }}>
                                        <TextField
                                            size='small'
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': { borderColor: 'default' },
                                                    '&:hover fieldset': { borderColor: '#1B8633' },
                                                    '&.Mui-focused fieldset': { borderColor: '#1B8633' },
                                                },
                                                '& .MuiInputLabel-root': { color: 'default' },
                                                '&:hover .MuiInputLabel-root': { color: '#1B8633' },
                                                '& .MuiInputLabel-root.Mui-focused': { color: '#1B8633' },
                                            }}
                                            fullWidth
                                            label="Full Name"
                                            id="name"
                                            variant="outlined"
                                        />
                                        <TextField
                                            size='small'
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': { borderColor: 'default' },
                                                    '&:hover fieldset': { borderColor: '#1B8633' },
                                                    '&.Mui-focused fieldset': { borderColor: '#1B8633' },
                                                },
                                                '& .MuiInputLabel-root': { color: 'default' },
                                                '&:hover .MuiInputLabel-root': { color: '#1B8633' },
                                                '& .MuiInputLabel-root.Mui-focused': { color: '#1B8633' },
                                            }}
                                            fullWidth
                                            label="Email Address"
                                            id="email"
                                            type="email"
                                            variant="outlined"
                                        />
                                        <TextField
                                            size='small'
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': { borderColor: 'default' },
                                                    '&:hover fieldset': { borderColor: '#1B8633' },
                                                    '&.Mui-focused fieldset': { borderColor: '#1B8633' },
                                                },
                                                '& .MuiInputLabel-root': { color: 'default' },
                                                '&:hover .MuiInputLabel-root': { color: '#1B8633' },
                                                '& .MuiInputLabel-root.Mui-focused': { color: '#1B8633' },
                                            }}
                                            fullWidth
                                            label="Account Number (optional)"
                                            id="account"
                                            variant="outlined"
                                        />
                                        <FormControl fullWidth sx={{ my: 2 }}>
                                            <InputLabel
                                                size='small'
                                                sx={{
                                                    color: '#1B8633',
                                                    '&.Mui-focused': {
                                                        color: '#1B8633',
                                                    },
                                                }}
                                                id="issue-label"
                                            >
                                                Issue Type
                                            </InputLabel>
                                            <Select
                                                labelId="issue-label"
                                                id="issue"
                                                size='small'
                                                label="Issue Type"
                                                sx={{
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#1B8633',
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#1B8633',
                                                        borderWidth: '2px',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#1B8633',
                                                        borderWidth: '2px',
                                                    },
                                                }}
                                            >
                                                <MenuItem value="">Select an issue</MenuItem>
                                                <MenuItem value="billing">Billing Inquiry</MenuItem>
                                                <MenuItem value="technical">Technical Support</MenuItem>
                                                <MenuItem value="outage">Service Outage</MenuItem>
                                                <MenuItem value="account">Account Management</MenuItem>
                                                <MenuItem value="other">Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            size='small'
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': { borderColor: 'default' },
                                                    '&:hover fieldset': { borderColor: '#1B8633' },
                                                    '&.Mui-focused fieldset': { borderColor: '#1B8633' },
                                                },
                                                '& .MuiInputLabel-root': { color: 'default' },
                                                '&:hover .MuiInputLabel-root': { color: '#1B8633' },
                                                '& .MuiInputLabel-root.Mui-focused': { color: '#1B8633' },
                                            }}
                                            fullWidth
                                            label="Message"
                                            id="message"
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            size="medium"
                                            sx={{ mt: 2, color: 'white', bgcolor: '#1B8633', borderRadius: 10 }}
                                        >
                                            Submit Request
                                        </Button>
                                    </Box>
                                </Box>
                            )}

                            {/* FAQs */}
                            {activeTab === 'faq' && (
                                <Box maxWidth="lg" mx="auto">
                                    <Box>
                                        {faqs.map((faq) => (
                                            <Accordion
                                                key={faq.id}
                                                expanded={expandedFaq === faq.id}
                                                onChange={handleFaqChange(faq.id)}
                                                elevation={0}
                                                sx={{ mb: 1 }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    sx={{
                                                        '&:hover': {
                                                            bgcolor: 'action.hover'
                                                        }
                                                    }}
                                                >
                                                    <Typography fontWeight="medium">{faq.question}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography color="text.secondary">{faq.answer}</Typography>
                                                </AccordionDetails>
                                                <Divider />
                                            </Accordion>
                                        ))}
                                    </Box>

                                    <Box
                                        sx={{
                                            bgcolor: '#E8F5E9',
                                            p: 3,
                                            borderRadius: 1,
                                            mt: 4
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ color: '#1B8633' }} gutterBottom>
                                            Still need help?
                                        </Typography>
                                        <Typography sx={{ color: '#1B8633' }} mb={2}>
                                            Our support team is available 24/7 to assist you with any issues.
                                        </Typography>
                                        <Button
                                            onClick={() => setActiveTab('support')}
                                            variant="contained"
                                            sx={{ color: 'white', bgcolor: '#1B8633', borderRadius: 10 }}
                                        >
                                            Contact Support
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}