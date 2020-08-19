import React from 'react';
import styled from 'styled-components';
import HomeList from './HomeList';
import { FilterListContainer } from '../../Containers/Search/FilterListContainer';
import RecentHomeList from './RecentHomeList';
import SearchPagenation from './SearchPagenation';
import { MapButton, FloatingMapButton } from './MapButton';
import HomeListContainer from '../../Containers/Search/HomeListContainer';

const SearchResult = () => {
  return (
    <StWrapper>
      {/* <MapButton /> */}
      <StSpan>숙박 279건 · 게스트 1명</StSpan>
      <StHeader>제주도의 숙소</StHeader>
      <FilterListContainer />
      <HomeListContainer />
      <RecentHomeList />
      <SearchPagenation />
      <FloatingMapButton />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 840px;
  padding: 5rem 2rem 3rem;
  margin-top: 8rem;
  position: relative;

  @media ${({ theme }) => theme.size.medium} {
    width: 100%;
  }
`;

const StHeader = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin: 1rem 0;
`;

const StSpan = styled.span`
  font-size: 1.4rem;
`;

export default SearchResult;
