import React from 'react';
import SearchResultContainer from '../../Containers/Search/SearchResultContainer';
import SearchMapContainer from '../../Containers/Search/SearchMapContainer';
import styled from 'styled-components';

const SearchContent = ({ view, openMap, closeMap }) => {
  return (
    <StContent>
      <SearchResultContainer view={view} openMap={openMap} />
      <SearchMapContainer view={view} closeMap={closeMap} />
    </StContent>
  );
};

const StContent = styled.div`
  display: flex;
`;

export default SearchContent;
