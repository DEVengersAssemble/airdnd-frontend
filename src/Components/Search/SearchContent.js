import React from 'react';
import SearchResult from './SearchResult';
import SearchMap from './SearchMap';
import styled from 'styled-components';

const SearchContent = () => {
  return (
    <StContent>
      <SearchResult />
      <SearchMap />
    </StContent>
  );
};

const StContent = styled.div`
  display: flex;
`;

export default SearchContent;
