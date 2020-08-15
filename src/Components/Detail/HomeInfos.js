import React from 'react';
import styled from 'styled-components';
import ReservationBox from './ReservationBox';
import HomeExplain from './HomeExplain';
import Bedrooms from './Bedrooms';
import Amenities from './Amenities';
import Schedule from './Schedule';

const HomeInfos = () => {
  return (
    <StHomeInfos>
      <StInfosWrapper>
        <HomeExplain />
        <Bedrooms />
        <Amenities />
        <Schedule />
      </StInfosWrapper>
      <ReservationBox />
    </StHomeInfos>
  );
};

const StHomeInfos = styled.div`
  /* background-color: #e8f9f9; */
  display: flex;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`;

const StInfosWrapper = styled.div`
  background-color: #fff;
  width: 58%;
`;

export default HomeInfos;
