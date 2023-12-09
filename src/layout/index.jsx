import React from 'react';

import { Box } from '@mui/material';

import LandingPage from '../views/landingPage/LandingPage';

const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}>
      <LandingPage />
    </Box>
  );
};

export default Layout;
