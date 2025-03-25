import { Box, Container, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function TermsAndConditions() {
    return (
        <div>
            <SectionTitle
                title="Terms and Conditions"
                shortTitle="Legal Agreement"
                route={[
                    { name: 'Home', path: '/' },
                    { name: 'Terms and Conditions', path: '/terms-and-conditions' }
                ]}
            />
            <Box sx={{ bgcolor: 'background.paper', py: 8, px: { xs: 0, lg: 10 } }}>
                <Container maxWidth="xl">
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 4 }} gutterBottom>
                        Terms and Conditions
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        Last Updated: {new Date().toLocaleDateString()}
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        1. Acceptance of Terms
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        By accessing and using our services, you accept and agree to be bound by these Terms and Conditions.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        2. Service Description
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        We provide internet services including but not limited to broadband connectivity, Wi-Fi access, and related services.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        3. User Responsibilities
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        You agree to use our services lawfully and not to engage in any prohibited activities including copyright infringement, spamming, or distribution of malicious software.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        4. Payment Terms
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        All services are billed monthly in advance. Late payments may result in service suspension.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        5. Termination
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        Either party may terminate service with 30 days written notice. Early termination fees may apply.
                    </Typography>

                    <Typography sx={{ color: '#757F95' }} paragraph mt={4}>
                        For any questions regarding these terms, please contact our customer support.
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}