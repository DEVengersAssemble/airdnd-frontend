import React from 'react';
import styled from 'styled-components';
// import ReservationBox from './ReservationBox';
import HomeExplain from './HomeExplain';
import Bedrooms from './Bedrooms';
import Amenities from './Amenities';
import ScheduleContainer from '../../Containers/Detail/ScheduleContainer';
import ReservationBoxContainer from '../../Containers/Detail/ReservationBoxContainer';
// import Schedule from './Schedule';

const HomeInfos = ({ isLoading, home }) => {
  return (
    <StHomeInfos>
      <StInfosWrapper>
        <HomeExplain isLoading={isLoading} home={home} />
        {!isLoading && (
          <>
            <Bedrooms home={home} />
            <Amenities home={home} />
            {/* <Schedule home={home} /> */}
            <ScheduleContainer home={home} />
          </>
        )}
      </StInfosWrapper>
      {/* {!isLoading && <ReservationBox home={home} />} */}
      {!isLoading && <ReservationBoxContainer home={home} />}
    </StHomeInfos>
  );
};

const StHomeInfos = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`;

const StInfosWrapper = styled.div`
  width: 58%;
`;

export default HomeInfos;
