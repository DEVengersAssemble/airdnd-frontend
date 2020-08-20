import React from 'react';
import styled from 'styled-components';
import TripsSubRouter from '../../Routers/TripsSubRouter';
import { Link } from 'react-router-dom';

const TripsMain = () => {
  return (
    <TripsMainWrapper>
      <h2>여행</h2>
      <main>
        <ul>
          <li>
            <Link to="/trips/upcoming">예정된 예약</Link>
          </li>
          <li>
            <Link to="/trips/past">지난 예약</Link>
          </li>
          <li>
            <Link to="/trips/canceled">취소됨</Link>
          </li>
        </ul>
        <TripsSubRouter />
      </main>
    </TripsMainWrapper>
  );
};

const TripsMainWrapper = styled.div`
  padding-top: 8rem;
`;

export default TripsMain;
