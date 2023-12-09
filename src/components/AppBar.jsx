import React, { useState } from 'react';

import { Box, Button, Grid, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

import LogoIcon from '../assets/logo.svg';
import HamburgerIcon from '../assets/icon-hamburger.svg';

const AppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

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
        <>
          <Grid item>
            <Box
              component="img"
              alt="Hamburger menu button"
              src={HamburgerIcon}
              onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
              sx={{
                cursor: 'pointer',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Grid>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              position: 'absolute',
              zIndex: '100',
              top: '6.5rem',
              right: '2rem',
              width: '20rem',
              height: '19rem',
              backgroundColor: '#ffffff',
              opacity: hamburgerMenuOpen ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-19px',
                right: '-20px',
                border: '20px solid transparent',
                borderLeftColor: '#ffffff',
                transform: 'rotate(45deg)',
              },
            }}>
            <Link
              variant="subtitle2"
              sx={{
                fontSize: '1.25rem',
                textDecoration: 'none',
                color: 'hsl(210, 4%, 67%)',
                opacity: hamburgerMenuOpen ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}>
              About
            </Link>
            <Link
              variant="subtitle2"
              sx={{
                fontSize: '1.25rem',
                textDecoration: 'none',
                color: 'hsl(210, 4%, 67%)',
                opacity: hamburgerMenuOpen ? 1 : 0,
                transition: 'opacity 1.3s ease-in-out',
              }}>
              Services
            </Link>
            <Link
              variant="subtitle2"
              sx={{
                fontSize: '1.25rem',
                textDecoration: 'none',
                color: 'hsl(210, 4%, 67%)',
                opacity: hamburgerMenuOpen ? 1 : 0,
                transition: 'opacity 1.6s ease-in-out',
              }}>
              Projects
            </Link>
            <Button
              variant="contain"
              sx={{
                backgroundColor: 'hsl(51, 100%, 49%)',
                color: '#000000',
                borderRadius: 5,
                width: '8rem',
                height: '3rem',
                fontFamily: '"Fraunces", serif',
                opacity: hamburgerMenuOpen ? 1 : 0,
                transition: 'opacity 1.9s ease-in-out',
              }}>
              CONTACT
            </Button>
          </Box>
        </>
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
