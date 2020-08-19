import React from 'react';
import SearchResultContainer from '../../Containers/Search/SearchResultContainer';
import SearchMapContainer from '../../Containers/Search/SearchMapContainer';
import styled from 'styled-components';

const SearchContent = ({ mapState, openMap, closeMap }) => {
  return (
    <StContent>
      <SearchResultContainer mapState={mapState} openMap={openMap} />
      <SearchMapContainer closeMap={closeMap} mapState={mapState} />
    </StContent>
  );
};

const StContent = styled.div`
  display: flex;
`;

export default SearchContent;
