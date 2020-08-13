import React from 'react';
import styled from 'styled-components';
import { MapZoomButton, MapMarkerButton, MapCloseButton } from './MapButton';

const SearchMap = ({ children }) => {
  return (
    <StWrapper>
      <MapZoomButton />
      <MapMarkerButton />
      <MapCloseButton />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  background: seagreen;
  flex-grow: 100;
`;

export default SearchMap;
