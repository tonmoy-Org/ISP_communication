import { Box, Container, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function ReturnRefundPolicy() {
    return (
        <div>
            <SectionTitle
                title="Return & Refund Policy"
                shortTitle="Customer Satisfaction Guarantee"
                route={[
                    { name: 'Home', path: '/' },
                    { name: 'Return & Refund Policy', path: '/return-refund-policy' }
                ]}
            />
            <Box sx={{ bgcolor: 'background.paper', py: 8, px: { xs: 0, lg: 10 } }}>
                <Container maxWidth="xl">
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 4 }}>
                        Return & Refund Policy
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        Last Updated: {new Date().toLocaleDateString()}
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        1. General Policy
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        We strive for complete customer satisfaction. If you're not satisfied with our services, you may be eligible for a refund under the following conditions.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        2. Eligibility for Refunds
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        Refunds may be issued for:
                    </Typography>
                    <ul>
                        <li><Typography sx={{ color: '#757F95' }}>Service outages lasting more than 24 consecutive hours</Typography></li>
                        <li><Typography sx={{ color: '#757F95' }}>Billing errors on our part</Typography></li>
                        <li><Typography sx={{ color: '#757F95' }}>Cancellation within the first 30 days of service (prorated)</Typography></li>
                    </ul>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        3. Non-Refundable Items
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        The following are not eligible for refunds:
                    </Typography>
                    <ul>
                        <li><Typography sx={{ color: '#757F95' }}>Installation fees (unless service is canceled within 3 days)</Typography></li>
                        <li><Typography sx={{ color: '#757F95' }}>Equipment purchases (unless defective)</Typography></li>
                        <li><Typography sx={{ color: '#757F95' }}>Partial months of service after the first 30 days</Typography></li>
                    </ul>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        4. How to Request a Refund
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        To request a refund:
                    </Typography>
                    <ol>
                        <li><Typography sx={{ color: '#757F95' }}>Contact our billing department at billing@yourisp.com</Typography></li>
                        <li><Typography sx={{ color: '#757F95' }}>Include your account number and reason for refund</Typography></li>
                        <li><Typography sx={{ color: '#757F95' }}>Allow 5-7 business days for processing</Typography></li>
                    </ol>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        5. Equipment Returns
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        If returning equipment:
                    </Typography>
                    <ul>
                        <li><Typography sx={{ color: '#757F95' }}>Must be within 14 days of cancellation</Typography></li>
                        <li><Typography sx={{ color: '#757F95' }}>Original packaging required for full refund</Typography></li>
                        <li><Typography sx={{ color: '#757F95' }}>A restocking fee may apply for opened packages</Typography></li>
                    </ul>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        6. Refund Methods
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        Refunds will be issued via the original payment method. For credit card payments, please allow 1-2 billing cycles for the refund to appear on your statement.
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }} gutterBottom mt={4}>
                        7. Disputes
                    </Typography>
                    <Typography sx={{ color: '#757F95' }} paragraph>
                        If you disagree with our refund decision, you may appeal by contacting customer relations at disputes@yourisp.com.
                    </Typography>

                    <Typography sx={{ color: '#757F95' }} paragraph mt={4}>
                        For any questions regarding this policy, please contact our customer support team.
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}