import React from 'react';

import { Box, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

import { ResponsiveImageSources } from '../mainSection/constants';

const PhotosSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const selectImageBasedOnDevice = img => {
    return isMobile
      ? ResponsiveImageSources[img].MobileSize
      : ResponsiveImageSources[img].DesktopSize;
  };

  const Photos = [
    { altText: 'Milk photo', source: selectImageBasedOnDevice('MilkPhoto') },
    {
      altText: 'Orange photo',
      source: selectImageBasedOnDevice('OrangePhoto2'),
    },
    { altText: 'Cone photo', source: selectImageBasedOnDevice('ConePhoto') },
    {
      altText: 'Sugar cubes photo',
      source: selectImageBasedOnDevice('SugarPhoto'),
    },
  ];

  return (
    <Grid container>
      {Photos.map(photo => (
        <Grid item xs={6} sm={3} key={photo?.altText}>
          <Box
            component="img"
            alt={photo?.altText}
            src={photo?.source}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotosSection;
