import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    minHeight: '40vh',
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Card>
        <CardContent>Contact Us</CardContent>
      </Card>
    </Grid>
  );
};

export default Contact;
