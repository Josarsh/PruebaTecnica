"use client"
import TablaUsers from "@/MUI/TablaUsers";
import { Box, Typography } from '@mui/material';
function HomePage() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        sx={{
          width: 250,
          bgcolor: 'primary.main',
          color: 'text.secondary',
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ color: 'white' }}>
          Zede del Litoral
        </Typography>
      </Box>

      <Box sx={{ flex: 1, padding: 3, bgcolor: 'background.default' }}>
          <TablaUsers/>
      </Box>
    </Box>
  )
}

export default HomePage
