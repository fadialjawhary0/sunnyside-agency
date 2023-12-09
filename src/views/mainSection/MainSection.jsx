import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import TextBlock from '../../components/TextBlock';
import HeaderPhoto from '../../assets/desktop/image-header.jpg';
import ArrowIcon from '../../assets/icon-arrow-down.svg';
import AppBar from '../../components/AppBar';
import ImageBlock from '../../components/ImageBlock';
import { MainSectionTextContent } from './constants/content.constant.mjs';
import { ProjectsSectionTextContent } from './constants';

const MainSection = () => {
  return (
    <>
      <Box sx={{ position: 'relative', height: '100%' }}>
        <AppBar />
        <Box
          component="img"
          alt="Orange photo"
          src={HeaderPhoto}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            userSelect: 'none',
          }}
        />
        <Typography
          variant="h3"
          sx={{
            position: 'absolute',
            top: '22%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            textAlign: 'center',
          }}>
          WE ARE CREATIVES
        </Typography>
        <Box
          component="img"
          alt="Arrow down"
          src={ArrowIcon}
          sx={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </Box>

      <Grid container>
        <TextBlock
          gridOrder={{ xs: 1, sm: 0 }}
          titleText={MainSectionTextContent?.AboutSection?.Title}
          descriptionText={MainSectionTextContent?.AboutSection?.Description}
          gridStyles={MainSectionTextContent?.AboutSection?.gridStyles}
          descriptionStyles={
            MainSectionTextContent?.AboutSection?.descriptionStyles
          }
          underlineColorStyle={
            MainSectionTextContent?.AboutSection?.underlineColorStyle
          }
        />
        <ImageBlock
          order={{ xs: 0, sm: 1 }}
          altText="Egg Photo"
          imgName="EggPhoto"
        />

        <ImageBlock
          order={{ xs: 2, sm: 2 }}
          altText="Glass Photo"
          imgName="GlassPhoto"
        />
        <TextBlock
          gridOrder={{ xs: 3, sm: 3 }}
          titleText={MainSectionTextContent?.ServicesSection?.Title}
          descriptionText={MainSectionTextContent?.ServicesSection?.Description}
          gridStyles={MainSectionTextContent?.ServicesSection?.gridStyles}
          descriptionStyles={
            MainSectionTextContent?.ServicesSection?.descriptionStyles
          }
          underlineColorStyle={
            MainSectionTextContent?.ServicesSection?.underlineColorStyle
          }
        />

        <ImageBlock
          order={{ xs: 4, sm: 4 }}
          altText="Cherry Photo"
          imgName="CherryPhoto"
          projectTitle={ProjectsSectionTextContent?.GraphicDesign?.Title}
          projectDescription={
            ProjectsSectionTextContent?.GraphicDesign?.Description
          }
          projectTextColor={
            ProjectsSectionTextContent?.GraphicDesign?.textColor
          }
        />
        <ImageBlock
          order={{ xs: 5, sm: 5 }}
          altText="Orange Photo"
          imgName="OrangePhoto"
          projectTitle={ProjectsSectionTextContent?.Photography?.Title}
          projectDescription={
            ProjectsSectionTextContent?.Photography?.Description
          }
          projectTextColor={ProjectsSectionTextContent?.Photography?.textColor}
        />
      </Grid>
    </>
  );
};

export default MainSection;
