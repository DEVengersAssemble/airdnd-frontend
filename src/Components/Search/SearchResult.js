import React from 'react';
import styled from 'styled-components';
import HomeList from './HomeList';
import FilterList from './FilterList';
import RecentHomeList from './RecentHomeList';

const SearchResult = () => {
  return (
    <StWrapper>
      <FilterList />
      <HomeList />
      <RecentHomeList />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 840px;
  padding: 2rem;
`;

export default SearchResult;
