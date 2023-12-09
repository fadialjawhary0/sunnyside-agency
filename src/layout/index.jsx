import React from 'react';

import { Box } from '@mui/material';

import MainSection from '../views/mainSection/MainSection';
import TestimonialsSection from '../views/testimonialsSection/TestimonialsSection';
import PhotosSection from '../views/photosSection/PhotosSection';
import FooterSection from '../views/footerSection/FooterSection';

const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}>
      <MainSection />
      <TestimonialsSection />
      <PhotosSection />
      <FooterSection />
    </Box>
  );
};

export default Layout;
