import React from 'react';

import { Box, Button, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

import LogoIcon from '../assets/logo.svg';
import HamburgerIcon from '../assets/icon-hamburger.svg';

const AppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        position: 'absolute',
        py: '2rem',
        px: '2rem',
        minHeight: '6.25rem',
      }}>
      <Grid item>
        <Box
          component="img"
          alt="Sunny side logo"
          src={LogoIcon}
          sx={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </Grid>

      {isMobile ? (
        <Grid item>
          <Box
            component="img"
            alt="Hamburger menu button"
            src={HamburgerIcon}
            sx={{
              cursor: 'pointer',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Grid>
      ) : (
        <Grid item sx={{ display: 'flex', gap: '1rem' }}>
          <Button>About</Button>
          <Button>Services</Button>
          <Button>Projects</Button>
          <Button
            variant="contain"
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRadius: 5,
              '&:hover': {
                backgroundColor: '#70CEFE',
                color: '#ffffff',
              },
            }}>
            CONTACT
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default AppBar;
