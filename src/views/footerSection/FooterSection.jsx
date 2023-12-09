import React from 'react';

import { Box, Grid, Link, Typography } from '@mui/material';

import FacebookIcon from '../../assets/icon-facebook.svg';
import InstagramIcon from '../../assets/icon-instagram.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';
import PinterestIcon from '../../assets/icon-pinterest.svg';

const FooterSection = () => {
  return (
    <Grid
      container
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        py: '3rem',
        px: '2rem',
        backgroundColor: '#90D4C5',
      }}>
      <Grid item>
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 900,
            color: '#337A6A',
            cursor: 'default',
            userSelect: 'none',
          }}>
          sunnyside
        </Typography>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', gap: '3rem' }}>
          <Link
            variant="subtitle2"
            sx={{
              color: '#337A6A',
              opacity: '80%',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.15s ease-in-out',
              '&:hover': { color: '#ffffff' },
            }}>
            About
          </Link>
          <Link
            variant="subtitle2"
            sx={{
              color: '#337A6A',
              opacity: '80%',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.15s ease-in-out',
              '&:hover': { color: '#ffffff' },
            }}>
            Services
          </Link>
          <Link
            variant="subtitle2"
            sx={{
              color: '#337A6A',
              opacity: '80%',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.15s ease-in-out',
              '&:hover': { color: '#ffffff' },
            }}>
            Projects
          </Link>
        </Box>
      </Grid>
      <Grid item sx={{ display: 'flex', gap: '1.5rem', mt: '2.5rem' }}>
        <Box component="img" alt="Facebook icon" src={FacebookIcon} />
        <Box component="img" alt="Facebook icon" src={InstagramIcon} />
        <Box component="img" alt="Facebook icon" src={TwitterIcon} />
        <Box component="img" alt="Facebook icon" src={PinterestIcon} />
      </Grid>
    </Grid>
  );
};

export default FooterSection;
