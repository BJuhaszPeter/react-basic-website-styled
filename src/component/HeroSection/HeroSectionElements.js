import React, { useState } from 'react';
import classes from './HeroSectionElements.module.css';
import Video from '../../videos/video.mp4';

import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Button } from '../ButtonElement';

const HeroSectionElements = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className={classes.HeroContainer}>
      <div className={classes.HeroBg}>
        <video className={classes.VideoBg} autoPlay loop muted src={Video} type='video/mp4' />
      </div>
      <div className={classes.HeroContent}>
        <h1 className={classes.HeroH1}> Virtual Banking Made Easy</h1>
        <p className={classes.HeroP}>Sing up for a new account today and recive $250 in credit towards your next payment.</p>
        <div className={classes.HeroBtnWrapper}>
          <Button primary dark onMouseEnter={onHover} onMouseLeave={onHover} to='singup'>Get Started {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}</Button>
        </div>
      </div>

    </div>
  );
};

export default HeroSectionElements
;
