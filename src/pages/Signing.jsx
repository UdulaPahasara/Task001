import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material';

function Signing() {
  return (
    <Grid container sx={{ height: '100vh', width: '100vw', m: 0, overflow: 'hidden' }}>
      
      {/* --- Left Side: Form --- */}
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          bgcolor: '#ffffff', // Ensures white background
          p: 4 
        }}
      >
        <Box 
          sx={{ 
            width: '100%',
            maxWidth: 450, // Matches the width in your design image
            p: 5, 
            borderRadius: 4, 
            border: '1px solid #e0e0e0', // Subtle border like the image
            boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', // Soft shadow
            bgcolor: 'white'
          }}
        >
          {/* Header */}
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#D30024', mb: 2 }}>
            SIGN IN
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
            Access your personalized dashboard to manage your bookings, view service history, report issues, and receive real-time updates.
          </Typography>

          {/* Email Input */}
          <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>Email Address</Typography>
          <TextField 
            fullWidth 
            variant="outlined" 
            placeholder="Enter your email" 
            sx={{ mb: 3 }} 
          />

          {/* Password Input */}
          <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>Password</Typography>
          <TextField 
            fullWidth 
            variant="outlined" 
            type="password" 
            placeholder="Enter your password" 
            sx={{ mb: 4 }} 
          />

          {/* Button */}
          <Button 
            fullWidth 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: '#D30024', 
              '&:hover': { bgcolor: '#b0001e' }, 
              py: 1.5, 
              fontWeight: 'bold',
              borderRadius: 1,
              textTransform: 'none', // Keeps text as "Proceed" instead of "PROCEED" if preferred
              fontSize: '1rem'
            }}
          >
            PROCEED
          </Button>

          {/* Footer Link */}
          <Typography variant="body2" textAlign="center" sx={{ mt: 3, color: '#666' }}>
            If you don't have an account ? <Link href="#" sx={{ color: '#D30024', fontWeight: 'bold', textDecoration: 'none' }}>Register</Link>
          </Typography>
        </Box>
      </Grid>

      {/* --- Right Side: Image --- */}
      <Grid 
        item
        xs={false} 
        md={6} 
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop)', // High-quality mechanic image
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
}

export default Signing;