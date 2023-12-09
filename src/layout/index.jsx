import React from 'react';

import { Box } from '@mui/material';

import LandingPage from '../views/landingPage/LandingPage';
import Testimonials from '../views/testimonials/Testimonials';

const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}>
      <LandingPage />
      <Testimonials />
    </Box>
  );
};

export default Layout;
