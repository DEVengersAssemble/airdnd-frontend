import React from 'react';
import styled from 'styled-components';
import MapContainer from '../../Containers/Global/MapContainer';

const SearchMap = ({ view, markers, mapState }) => {
  return (
    <StWrapper mapState={mapState} view={view}>
      <MapContainer markers={markers} />
    </StWrapper>
  );
};

const StWrapper = styled.aside`
  width: calc(100vw - 840px);
  display: ${({ mapState }) => (mapState ? 'block' : 'none')};
  /* position: relative;
  top: 0; */

  @media ${({ theme }) => theme.size.medium} {
    display: ${({ view }) => (view === 'map' ? 'block' : 'none')};
    width: ${({ view }) => (view === 'map' ? '100%' : '0px')};
  }
`;

export default SearchMap;
