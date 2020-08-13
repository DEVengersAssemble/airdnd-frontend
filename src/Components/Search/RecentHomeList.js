import React from 'react';
import RecentHome from './RecentHome';
import styled from 'styled-components';

const RecentHomeList = () => {
  return (
    <StWrapper>
      <h3>최근 숙소</h3>
      <StHomeWrapper>
        <RecentHome />
        <RecentHome />
        <RecentHome />
        <RecentHome />
        <RecentHome />
      </StHomeWrapper>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  margin: 2rem 0;
`;

const StHomeWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export default RecentHomeList;
