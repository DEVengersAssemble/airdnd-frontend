import React from 'react';
import styled from 'styled-components';
import { FilterListContainer } from '../../Containers/Search/FilterListContainer';
import RecentHomeList from './RecentHomeList';
import SearchPagenation from './SearchPagenation';
import { FloatingMapButton } from './MapButton';
import HomeListContainer from '../../Containers/Search/HomeListContainer';

const SearchResult = ({ mapState, onShowMap, location, guestCount }) => {
  return (
    <StWrapper mapState={mapState}>
      <StSpan>숙박 279건 · 게스트 {guestCount}명</StSpan>
      <StHeader>{location}의 숙소</StHeader>
      <FilterListContainer mapState={mapState} onShowMap={onShowMap} />
      <HomeListContainer mapState={mapState} />
      <RecentHomeList />
      <SearchPagenation />
      <FloatingMapButton />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: ${({ mapState }) => (mapState ? '840px' : '100%')};
  padding: ${({ mapState }) =>
    mapState ? '5rem 2rem 3rem' : '5rem 8rem 3rem'};
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
