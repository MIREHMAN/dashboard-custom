import * as React from 'react';

import { alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './DashboardComponents/AppNavbar';
import Header from './DashboardComponents/Header';
import SideMenu from './DashboardComponents/SideMenu';
import AppTheme from './theme/shared-theme/AppTheme';

import DashboardContent from './DashboardComponents/DashboardContent';


export default function AdminDashboard() {
  return (
    
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: 'grey',
            overflow: 'auto',
          })}
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
            <Header />
            
          </Stack>
        </Box>
      </Box>
    
  );
}