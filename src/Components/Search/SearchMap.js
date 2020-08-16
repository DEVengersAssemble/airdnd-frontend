import React from 'react';
import styled from 'styled-components';
import { MapZoomButton, MapMarkerButton, MapCloseButton } from './MapButton';
import Map from '../Global/Map';

const SearchMap = ({ children }) => {
  return (
    <StWrapper>
      <MapZoomButton top="10rem" right="2rem" />
      <MapMarkerButton top="20rem" right="2rem" />
      <MapCloseButton top="10rem" left="86rem" />
      <Map />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  /* position: relative; */
  flex-grow: 100;
`;

export default SearchMap;
