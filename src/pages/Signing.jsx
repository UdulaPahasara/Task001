import { Grid, Box, Typography, TextField, Button, Link, CssBaseline, GlobalStyles } from '@mui/material';

function Signing() {
  return (
    <>
      {/* GLOBAL RESET: Forces the browser to use full height/width */}
      <CssBaseline />
      <GlobalStyles styles={{
        html: { height: '100%', width: '100%' },
        body: { height: '100%', width: '100%', margin: 0, padding: 0 },
        '#root': { height: '100%', width: '100%' }, 
      }} />

      <Grid container sx={{ height: '100vh', width: '100vw', overflow: 'hidden', m: 0 }}>
        
        {/* --- LEFT SIDE: FORM --- */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            // THESE 3 LINES FORCE CENTERING:
            alignItems: 'center',       // 1. Center Horizontally
            justifyContent: 'center',   // 2. Center Vertically
            width: '100%',              // 3. Ensure it takes full width of the column
            
            height: '100%', 
            bgcolor: '#f0f2f5',         
            p: 2
          }}
        >
          {/* --- THE CARD --- */}
          <Box 
            sx={{ 
              width: '100%', 
              maxWidth: 600,      // Fixed width for the "Zoomed" look
              mx: 'auto',         // <--- SAFETY NET: Forces box to center if Flex fails
              bgcolor: 'white',   
              p: { xs: 4, md: 6 },
              borderRadius: 4,    
              boxShadow: '0px 10px 40px rgba(0,0,0,0.1)', 
              display: 'flex',
              flexDirection: 'column',
              gap: 3              
            }}
          >
            {/* Header */}
            <Box>
              <Typography variant="h3" fontWeight="bold" sx={{ color: '#D30024', mb: 1 }}>
                SIGN IN
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Access your personalized dashboard to manage your bookings.
              </Typography>
            </Box>

            {/* Email Input */}
            <Box>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, fontSize: '1rem' }}>Email Address</Typography>
              <TextField 
                fullWidth 
                placeholder="Enter your email" 
                variant="outlined"
                InputProps={{ sx: { height: 60, fontSize: '1.2rem', bgcolor: '#f8f9fa' } }} 
              />
            </Box>

            {/* Password Input */}
            <Box>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, fontSize: '1rem' }}>Password</Typography>
              <TextField 
                fullWidth 
                type="password" 
                placeholder="Enter your password" 
                variant="outlined"
                InputProps={{ sx: { height: 60, fontSize: '1.2rem', bgcolor: '#f8f9fa' } }}
              />
            </Box>

            {/* Button */}
            <Button 
              fullWidth 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: '#D30024', 
                '&:hover': { bgcolor: '#b0001e' }, 
                py: 2,              
                fontSize: '1.2rem', 
                fontWeight: 'bold',
                borderRadius: 2,
                mt: 1
              }}
            >
              PROCEED
            </Button>

            {/* Footer */}
            <Typography variant="body1" textAlign="center" sx={{ mt: 2, color: '#666' }}>
              If you don't have an account? <Link href="#" sx={{ color: '#D30024', fontWeight: 'bold', textDecoration: 'none' }}>Register</Link>
            </Typography>
          </Box>
        </Grid>

        {/* --- RIGHT SIDE: IMAGE --- */}
        <Grid 
          item
          xs={false} 
          md={6} 
          sx={{
            height: '100%', 
            backgroundImage: 'url(https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070)', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', md: 'block' } // Ensures image hides on small mobile screens
          }}
        />
      </Grid>
    </>
  );
}

export default Signing;