import React from 'react';
import styled from 'styled-components';
import TripsSubRouter from '../../Routers/TripsSubRouter';
import { Link } from 'react-router-dom';

const TripsMain = () => {
  return (
    <TripsMainWrapper>
      <TripsMainInner>
        <TripsMainTitle>여행</TripsMainTitle>
        <TripsMainNav>
          <TripsMainNavList>
            <Link to="/trips/upcoming">예정된 예약</Link>
          </TripsMainNavList>
          <TripsMainNavList>
            <Link to="/trips/past">지난 예약</Link>
          </TripsMainNavList>
          <TripsMainNavList>
            <Link to="/trips/canceled">취소됨</Link>
          </TripsMainNavList>
        </TripsMainNav>
        <TripsSubRouter />
      </TripsMainInner>
    </TripsMainWrapper>
  );
};

const TripsMainWrapper = styled.div`
  padding-top: 8rem;
`;

const TripsMainInner = styled.div`
  margin-top: 4rem;
  padding: 0rem 8rem;
  height: fit-content;
  min-height: calc(100vh - 12rem);
`;

const TripsMainTitle = styled.h2`
  padding-bottom: 5rem;
  font-size: 3.4rem;
  font-weight: bold;
`;

const TripsMainNav = styled.ul``;

const TripsMainNavList = styled.li``;

export default TripsMain;
