import React from 'react';
import styled from 'styled-components';
import SearchResult from '../Components/Search/SearchResult';
import SearchMap from '../Components/Search/SearchMap';
import FilterModal from '../Components/Search/FilterModal';

const SearchPage = () => {
  return (
    <StWrapper>
      <StNav></StNav>
      <SearchResult />
      <FilterModal />
      <SearchMap>blabla</SearchMap>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  display: flex;
  margin-top: 8rem;
`;

const StNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: tomato;
  width: 100%;
  height: 8rem;
  z-index: 100;
`;

export default SearchPage;
