import React from 'react';
import InfoElements from './InfoElements';

const InfoSection = (props) => {
  const { data } = props;
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
