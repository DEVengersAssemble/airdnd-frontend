import React from 'react';
import SearchResult from './SearchResult';
import SearchMapContainer from '../../Containers/Search/SearchMapContainer';
import styled from 'styled-components';

const SearchContent = ({ mapState, closeMap }) => {
  return (
    <StContent>
      <SearchResult mapState={mapState} />
      <SearchMapContainer closeMap={closeMap} mapState={mapState} />
    </StContent>
  );
};

const StContent = styled.div`
  display: flex;
`;

export default SearchContent;
