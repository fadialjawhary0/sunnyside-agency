import React from 'react';

import { Box } from '@mui/material';

import LandingPage from '../views/landingPage/LandingPage';
import Testimonials from '../views/testimonials/Testimonials';
import Photos from '../views/photos/Photos';

const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}>
      <LandingPage />
      <Testimonials />
      <Photos />
    </Box>
  );
};

export default Layout;
