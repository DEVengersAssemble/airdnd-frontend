import React from 'react';
import SearchResultContainer from '../../Containers/Search/SearchResultContainer';
import SearchMapContainer from '../../Containers/Search/SearchMapContainer';
import styled from 'styled-components';
import {
  BookmarkListModalContainer,
  NewBookmarkModalContainer,
} from '../../Containers/Global/BookmarkModalContainer';

const SearchContent = ({ view, openMap, closeMap }) => {
  return (
    <StContent>
      <SearchResultContainer view={view} openMap={openMap} />
      <SearchMapContainer view={view} closeMap={closeMap} />
      <BookmarkListModalContainer />
      <NewBookmarkModalContainer />
    </StContent>
  );
};

const StContent = styled.div`
  display: flex;
`;

export default SearchContent;
