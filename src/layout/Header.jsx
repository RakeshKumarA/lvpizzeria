import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import LV from '../LV.svg';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  img: {
    width: '50px',
  },
});

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const clickHomeHandler = () => {
    history.push('/');
  };

  const clickMenuHandler = () => {
    history.push('/menu');
  };

  const clickcontactHandler = () => {
    history.push('/contact');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={LV} alt="logo" className={classes.img} />
        <Typography variant="h6" className={classes.title}>
          Pizzeria
        </Typography>
        <Button color="inherit" onClick={clickHomeHandler}>
          Home
        </Button>
        <Button color="inherit" onClick={clickMenuHandler}>
          Menu
        </Button>
        <Button color="inherit" onClick={clickcontactHandler}>
          Contact us
        </Button>
        <IconButton color="inherit">
          <LocalPizzaIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
