import React from 'react';
import classes from './ServicesElements.module.css';
import { data } from './Data';

const ServicesElements = () => {
  const renderServicesCard = () => {
    let infoSection = null;
    if (data) {
      infoSection = data.map((e, idx) => {
        return (
          <div className={classes.ServicesCard} key={idx}>
            <img
              className={classes.ServicesIcom}
              src={e.img}
              alt={e.alt}
            />
            <h2 className={classes.ServicesH2}>{e.title}</h2>
            <p className={classes.ServicesP}>{e.description}</p>
          </div>
        );
      });
    }
    return infoSection;
  };
  return (
    <div className={classes.ServicesContainer}>
      <h1 className={classes.ServicesH1}>Our Services</h1>
      <div className={classes.ServicesWrapper}>
        {renderServicesCard()}
      </div>
    </div>
  );
};

export default ServicesElements
;
