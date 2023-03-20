import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjv1g8bOd0prHWY5rZUHcAG85VxSV3TYSbg&usqp=CAU"
                  alt="suitcase"
                  sx={{
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "auto",
  }}
                />
                <Typography variant="h5" align="center">
                  Superviser will provide the brief description of the problem  with a sacling factor which will be helpfull for displaying problems to the govt
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg"
                  alt="graph"
                  
                  sx={{
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "auto",
  }}
                />
                <Typography variant="h5" align="center">
                 With the help of Dashboard people will be able to identify problem and can provide help accordingly.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box 
                  component="img"
                  src="data:image/jpeg;base64,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"
                  alt="clock"
                  sx={{
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "auto",
  }}
                />
                <Typography variant="h5" align="center">
                  The people will provide needful resouces to the Digital Age Home 
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/signup/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
