"use client"
import TablaUsers from "@/MUI/TablaUsers";
import { Box, Typography } from '@mui/material';
function HomePage() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: { xs: 'column', sm: 'row' } }}>
      <Box
        sx={{
          width: { xs: '100%', sm: 250 }, 
          bgcolor: 'primary.main',
          color: 'text.secondary',
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
          alignItems: 'center', 
        }}
      >
        <Typography
          variant="h1" 
          gutterBottom
          sx={{
            color: 'white',
            textAlign: 'left', 
          }}
        >
          Zede del Litoral
        </Typography>
      </Box>
      
      <Box
        sx={{
          flex: 1,
          padding: { xs: 2, sm: 3 }, 
          bgcolor: 'background.default',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'black',
            textAlign: 'center',
          }}
        >
         Empleados
        </Typography>
        <TablaUsers />
      </Box>
    </Box>
  );
}

export default HomePage
