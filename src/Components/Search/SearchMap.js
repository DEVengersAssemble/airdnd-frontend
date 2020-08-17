import React from 'react';
import styled from 'styled-components';
import {
  MapZoomButton,
  MapMarkerButton,
  MapCloseButton,
  MapCheckbox,
} from './MapButton';
import Map from '../Global/Map';

const SearchMap = ({ children }) => {
  return (
    <StWrapper>
      <StStickyWrapper>
        <MapCloseButton />
        <MapCheckbox />
        <StBtnSetWrapper>
          <MapZoomButton />
          <MapMarkerButton />
        </StBtnSetWrapper>
      </StStickyWrapper>
      <Map />
    </StWrapper>
  );
};

const StWrapper = styled.aside`
  width: calc(100vw - 840px);
`;

const StStickyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  height: 100vh;
  position: absolute;
`;

const StBtnSetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: 10rem;
  right: 2rem;
  height: fit-content;
  position: sticky;
  z-index: 10;
  & > *:nth-child(1) {
    margin-bottom: 1rem;
  }
`;
export default SearchMap;
