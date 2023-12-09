import React from 'react';

import { Box, Grid, Link, Typography } from '@mui/material';

const TextBlock = ({
  gridOrder,
  titleText,
  descriptionText,
  gridStyles,
  descriptionStyles,
  underlineColorStyle,
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      order={gridOrder}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        minHeight: '24rem',
        ...gridStyles,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            minWidth: '18rem',
            maxWidth: '25.5rem',
          }}>
          {titleText}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: '25.5rem',
            ...descriptionStyles,
          }}>
          {descriptionText}
        </Typography>

        <Box sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}>
          <Link
            variant="subtitle1"
            sx={{
              color: 'black',
              textDecoration: 'none',
              position: 'relative',
              display: 'inline-block',
              cursor: 'pointer',
              '&::after': {
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                width: '8rem',
                height: '0.5rem',
                bottom: '0.25rem',
                left: '-0.4rem',
                backgroundColor: { ...underlineColorStyle },
                borderRadius: '5px',
                opacity: '20%',
                transition: 'opacity 0.25s ease-in-out',
              },
              '&:hover::after': {
                opacity: '85%',
              },
            }}>
            LEARN MORE
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default TextBlock;
