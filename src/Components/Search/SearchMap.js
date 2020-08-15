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
      <Map isMarkerShown />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  flex-grow: 100;
  /* position: fixed; */
`;

export default SearchMap;
