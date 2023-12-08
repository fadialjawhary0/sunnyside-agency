import React from 'react';

import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        padding: '2rem',
        background: 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5rem',
      }}></Box>
  );
};

export default Layout;
