import React from 'react';
import styled from 'styled-components';
import HomeList from './HomeList';
import FilterList from './FilterList';

const SearchResult = () => {
  return (
    <StWrapper>
      <FilterList />
      <HomeList />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 860px;
  padding: 2rem;
`;

export default SearchResult;
