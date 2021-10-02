import React from 'react';
import InfoElements from './InfoElements';
import { data } from './Data';

const InfoSection = (props) => {
  const renderInfoSection = () => {
    let infoSection = null;
    if (data) {
      infoSection = data.map((e, idx) => { return <InfoElements data={e} key={idx} />; });
    }
    return infoSection;
  };

  return (
    <>
      {renderInfoSection()}
    </>

  );
};

export default InfoSection;
