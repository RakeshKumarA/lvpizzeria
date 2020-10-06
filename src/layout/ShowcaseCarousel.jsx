import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@material-ui/core/styles';
import pizza1 from '../asset/pizza1.jpg';
import pizza2 from '../asset/pizza2.jpg';
import pizza3 from '../asset/pizza3.jpg';

const useStyles = makeStyles({
  carousel: {
    height: '80vh',
  },
});

const ShowcaseCarousel = () => {
  const classes = useStyles();
  return (
    <Carousel autoPlay showThumbs={false} showArrows={false} showStatus={false}>
      <div>
        <img alt="" src={pizza1} className={classes.carousel} />
      </div>
      <div>
        <img alt="" src={pizza2} className={classes.carousel} />
      </div>
      <div>
        <img alt="" src={pizza3} className={classes.carousel} />
      </div>
    </Carousel>
  );
};

export default ShowcaseCarousel;
