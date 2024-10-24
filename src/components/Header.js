import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import MenuButton from './MenuButton';

import SellIcon from "@mui/icons-material/Sell";
import MailIcon from "@mui/icons-material/Mail";



export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      BreadCrumbs
      <Stack direction="row" sx={{ gap: 1 }}>
        
        
        <MenuButton showBadge aria-label="Open notifications">
          <SellIcon />
        </MenuButton>
        <MenuButton showBadge aria-label="Open notifications">
          <MailIcon />
        </MenuButton>
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        

        ColorModeIconDropdown
      </Stack>
    </Stack>
  );
}
