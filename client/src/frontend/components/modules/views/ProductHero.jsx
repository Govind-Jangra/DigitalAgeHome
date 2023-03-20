import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://static.vecteezy.com/system/resources/previews/004/530/886/original/charity-for-elderly-flat-color-illustration-volunteer-visititing-disabled-senior-woman-grandmother-with-social-service-worker-2d-cartoon-characters-with-nursery-home-interior-on-background-vector.jpg';

export default function ProductHero() {
  const isAuth = localStorage.getItem('isAuth');
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Get Solution Fastly from Government
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        A one step solution for All Old Age Homes. We are connecting the Old Age Homes to government Digitaly. If you don't register Plz register from below.
      </Typography>
    {isAuth &&
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
    }
    </ProductHeroLayout>
  );
}
