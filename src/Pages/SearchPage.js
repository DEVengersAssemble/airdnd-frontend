import React from 'react';
import styled from 'styled-components';
import SearchResult from '../Components/Search/SearchResult';
import SearchMap from '../Components/Search/SearchMap';

const SearchPage = () => {
  return (
    <StWrapper>
      <SearchResult />
      <SearchMap>blabla</SearchMap>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  display: flex;
`;

export default SearchPage;
