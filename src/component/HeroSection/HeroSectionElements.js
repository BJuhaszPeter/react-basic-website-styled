import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HerosectionStyledComponents';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Button } from '../ButtonElement';

const HeroSectionElements = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> Virtual Banking Made Easy</HeroH1>
        <HeroP>Sing up for a new account today and recive $250 in credit towards your next payment.</HeroP>
        <HeroBtnWrapper>
          <Button primary dark onMouseEnter={onHover} onMouseLeave={onHover} smooth duration={500} spy exact='true' offset={-80} to='signup'>Get Started {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}</Button>
        </HeroBtnWrapper>
      </HeroContent>

    </HeroContainer>
  );
};

export default HeroSectionElements
;
