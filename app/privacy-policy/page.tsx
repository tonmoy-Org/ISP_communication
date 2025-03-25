import { Box, Container, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function PrivacyPolicy() {
    return (
        <div>
            <SectionTitle
                title="Privacy Policy"
                shortTitle="Your Data Protection"
                route={[
                    { name: 'Home', path: '/' },
                    { name: 'Privacy Policy', path: '/privacy-policy' }
                ]}
            />
            <Box sx={{ bgcolor: 'background.paper', py: 8, px: { xs: 0, lg: 10 } }}>
                <Container maxWidth="xl">
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 4 }} gutterBottom>
                        Privacy Policy
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        Effective Date: {new Date().toLocaleDateString()}
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        1. Information We Collect
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        We collect personal information including name, address, contact details, payment information, and service usage data.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        2. How We Use Information
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        Your information is used to provide services, process payments, improve our offerings, and comply with legal obligations.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        3. Data Sharing
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        We do not sell your data. We may share information with service providers, law enforcement, or as required by law.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        4. Data Security
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        We implement industry-standard security measures to protect your information from unauthorized access.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        5. Your Rights
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        You have the right to access, correct, or delete your personal information, subject to legal limitations.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        6. Cookies and Tracking
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        We use cookies to improve user experience. You can manage cookie preferences in your browser settings.
                    </Typography>

                    <Typography sx={{ color: '#757F95' }} paragraph mt={4}>
                        For any privacy-related inquiries, please contact our Data Protection Officer at privacy@yourisp.com.
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}