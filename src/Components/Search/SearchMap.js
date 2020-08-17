import React from 'react';
import styled from 'styled-components';
import { MapZoomButton, MapMarkerButton, MapCloseButton } from './MapButton';
import Map from '../Global/Map';

const SearchMap = ({ children }) => {
  return (
    <StWrapper>
      {/* <MapZoomButton />
      <MapMarkerButton />
      <MapCloseButton /> */}
      <Map />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  flex-grow: 100;
  position: relative;
  /* top: 0;
  right: 0; */
`;

export default SearchMap;
