import React from 'react';

import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

import { ResponsiveImageSources } from '../views/landingPage/constants/responsiveImgSrc.constant.mjs';

const ImageBlock = ({
  order,
  altText,
  imgName,
  projectTitle,
  projectDescription,
  projectTextColor,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isCherryOrOrangePhoto =
    imgName === 'CherryPhoto' || imgName === 'OrangePhoto1';

  const selectImageBasedOnDevice = img => {
    return isMobile
      ? ResponsiveImageSources[img].MobileSize
      : ResponsiveImageSources[img].DesktopSize;
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      order={order}
      sx={{
        position: isCherryOrOrangePhoto ? 'relative' : 'unset',
      }}>
      {isCherryOrOrangePhoto ? (
        <Box sx={{ height: '100%', position: 'relative' }}>
          <Box
            component="img"
            alt={altText}
            src={selectImageBasedOnDevice(imgName)}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              width: '19rem',
              textAlign: 'center',
              bottom: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
            }}>
            <Typography variant="h5" sx={{ color: projectTextColor }}>
              {projectTitle}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: projectTextColor }}>
              {projectDescription}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          component="img"
          alt={altText}
          src={selectImageBasedOnDevice(imgName)}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </Grid>
  );
};

export default ImageBlock;
