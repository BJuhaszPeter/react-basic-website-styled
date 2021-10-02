import React from 'react';
import { Button } from '../ButtonElement';
import classes from './InfoElements.module.css';

const InfoElements = (props) => {
  const { data } = props;

  return (
    <div className={data.lightBg ? classes.InfoContainerDark : classes.InfoContainerLight} id={data.id}>
      <div className={classes.InfoWrapper}>
        <div className={data.imgStart ? classes.InfoRow : classes.InfoRowImageStart}>
          <div className={classes.Collumn1}>
            <div className={classes.TextWraper}>
              <p className={classes.TopLine}>{data.topLine}</p>
              <h1 className={data.lightText ? classes.Heading : classes.HeadingLight}>{data.headline}</h1>
              <p className={data.lightText ? classes.Subtitle : classes.SubtitleLight}>{data.description}</p>
              <div className={classes.BtnWrap}>
                <Button primary={data.primary} dark={data.dark} to='home'>{data.buttonLabel}</Button>
              </div>
            </div>
          </div>
          <div className={classes.Collumn2}>
            <div className={classes.ImgWrap}>
              <img className={classes.Img} alt={data.alt} src={data.img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoElements
;
