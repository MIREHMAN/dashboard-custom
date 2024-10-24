import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from './components/Sidebar';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header'

export default function Dashboard() {
  return (
    
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <AppNavbar/>
        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: 'grey',
            overflow: 'auto',
          }}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 10,
              mt: { xs: 8, md: 0 },
            }}
          >
        <Header/>
        Dashboard Content
          </Stack>
        </Box>
      </Box>
    
  );
}
