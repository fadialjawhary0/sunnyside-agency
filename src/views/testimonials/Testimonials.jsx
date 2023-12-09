import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { TestimonialsAuthors } from './constants/testimonials.const.mjs';

const Testimonials = () => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: { xs: '1rem', sm: '4rem' } }}>
      <Grid item>
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', pt: { xs: '4rem', sm: '8rem' } }}>
          CLIENT TESTIMONIALS
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
          px: { xs: '2.4rem', sm: '3rem', md: '2rem' },
          pb: { xs: '4rem', sm: '8rem' },
        }}>
        {TestimonialsAuthors.map(item => (
          <Box
            key={item?.name}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Box
              component="img"
              alt={item?.name}
              src={item?.photo}
              sx={{ borderRadius: '50%', width: '3rem' }}
            />
            <Typography
              sx={{
                textAlign: 'center',
                minHeight: { sm: '17rem', md: '12rem' },
                maxWidth: '20rem',
                minWidth: { sm: '8rem', md: '11rem' },
                pt: { xs: '1.5rem', sm: '3rem' },
              }}>
              {item?.testimonial}
            </Typography>
            <Box sx={{ textAlign: 'center', pt: { xs: '1.5rem', md: 0 } }}>
              <Typography
                variant="subtitle1"
                sx={{ color: 'hsl(212, 27%, 19%)', mb: '0.25rem' }}>
                {item?.name}
              </Typography>
              <Typography variant="subtitle2">{item?.job}</Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Testimonials;
