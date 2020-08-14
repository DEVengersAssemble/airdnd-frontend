import React from 'react';
import styled from 'styled-components';
import HomeList from './HomeList';
import FilterList from './FilterList';
import RecentHomeList from './RecentHomeList';
import SearchPagenation from './SearchPagenation';

const SearchResult = () => {
  return (
    <StWrapper>
      <StSpan>숙박 279건 · 게스트 1명</StSpan>
      <StHeader>제주도의 숙소</StHeader>
      <FilterList />
      <HomeList />
      <RecentHomeList />
      <SearchPagenation />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 840px;
  padding: 5rem 2rem 1rem;
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
