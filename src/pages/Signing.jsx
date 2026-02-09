// DELETE ALL separate Grid imports. Use only this:
import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material';

function Signing() {
  return (
    // "container" is the wrapper. 
    // We use the classic "item" + "xs/md" props which work on ALL versions.
    <Grid container sx={{ height: '100vh', width: '100vw', m: 0 }}>
      
      {/* Left Side: Form */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#fff' }}>
        <Box 
          sx={{ 
            maxWidth: 400, 
            width: '100%',
            p: 4, 
            border: '1px solid #e0e0e0', 
            borderRadius: 4, 
            boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
            mx: 2
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#D30024', mb: 1 }}>
            SIGN IN
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Access your personalized dashboard to manage your bookings and receive real-time updates.
          </Typography>

          <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>Email Address</Typography>
          <TextField fullWidth size="small" sx={{ mb: 2 }} placeholder="email@example.com" />

          <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>Password</Typography>
          <TextField fullWidth size="small" type="password" sx={{ mb: 4 }} placeholder="••••••••" />

          <Button 
            fullWidth 
            variant="contained" 
            sx={{ 
              bgcolor: '#D30024', 
              '&:hover': { bgcolor: '#b0001e' }, 
              py: 1.5, 
              borderRadius: 2,
              fontWeight: 'bold'
            }}
          >
            PROCEED
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 3 }}>
            If you don't have an account? <Link href="#" sx={{ color: '#D30024', fontWeight: 'bold', textDecoration: 'none' }}>Register</Link>
          </Typography>
        </Box>
      </Grid>

      {/* Right Side: Image */}
      <Grid 
        item
        xs={false} 
        md={6} 
        sx={{
          display: { xs: 'none', md: 'block' },
          backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1932&auto=format&fit=crop)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
}

export default Signing;