import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Collumn1, TextWraper, TopLine, Heading, Subtitle, BtnWrap, Collumn2, ImgWrap, Img } from './InfoSectionStyledComponents';

const InfoElements = (props) => {
  const { data } = props;

  return (
    <InfoContainer lightBg={data.lightBg} id={data.id}>
      <InfoWrapper>
        <InfoRow imgStart={data.imgStart}>
          <Collumn1>
            <TextWraper>
              <TopLine>{data.topLine}</TopLine>
              <Heading lightText={data.lightText}>{data.headline}</Heading>
              <Subtitle lightText={data.lightText}>{data.description}</Subtitle>
              <BtnWrap>
                <Button smooth spy duration={500} exact='true' offset={-80} primary={data.primary} dark={data.dark} to='home'>{data.buttonLabel}</Button>
              </BtnWrap>
            </TextWraper>
          </Collumn1>
          <Collumn2>
            <ImgWrap>
              <Img alt={data.alt} src={data.img} />
            </ImgWrap>
          </Collumn2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoElements
;
