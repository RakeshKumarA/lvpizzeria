import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import ShowcaseCarousel from './ShowcaseCarousel';
import { makeStyles } from '@material-ui/core/styles';
import Contact from './Contact';

const useStyles = makeStyles({
  freedelivery: {
    backgroundColor: 'brown',
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <ShowcaseCarousel />
      </Grid>
      <Grid item container justify="center" className={classes.freedelivery}>
        <h1>Order For Free Delivery</h1>
      </Grid>
      <Grid>
        <Contact />
      </Grid>
    </Grid>
  );
};

export default HomePage;
