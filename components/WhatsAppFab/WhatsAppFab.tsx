// components/WhatsAppFab.tsx
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab, Tooltip } from '@mui/material';

export default function WhatsAppFab() {
    return (
        <Tooltip title="Chat with us" arrow>
            <Fab
                color="success"
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    bgcolor: '#25D366',
                    '&:hover': { bgcolor: '#128C7E' }
                }}
                href="https://wa.me/1234567890?text=Hello%20I%20need%20help"
                target="_blank"
            >
                <WhatsAppIcon sx={{ color: 'white', fontSize: 28 }} />
            </Fab>
        </Tooltip>
    );
}