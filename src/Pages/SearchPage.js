import React from 'react';
import styled from 'styled-components';
import SearchResult from '../Components/Search/SearchResult';
import SearchMap from '../Components/Search/SearchMap';
import FilterModal from '../Components/Search/FilterModal';
import Footer from '../Components/Main/Footer';
import Map from '../Components/Global/Map';

const SearchPage = () => {
  return (
    <StWrapper>
      <StNav></StNav>
      <StContent>
        <SearchResult />
        <SearchMap />
      </StContent>
      <Footer />
      <FilterModal />
    </StWrapper>
  );
};

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 8rem;
`;

const StContent = styled.div`
  display: flex;
  /* position: relative; */
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
