import React from 'react';
import styled, { css } from 'styled-components';
import {
  MapZoomButton,
  MapMarkerButton,
  MapCloseButton,
  MapCheckbox,
  MapFilterButton,
  MapButton,
} from './MapButton';
import Map from '../Global/Map';
import MapContainer from '../../Containers/Global/MapContainer';

const SearchMap = ({ onHideMap, mapState, view, closeMap }) => {
  return (
    <StWrapper mapState={mapState} view={view}>
      <StStickyWrapper>
        <MapCloseButton onHideMap={onHideMap} closeMap={closeMap} view={view} />
        <MapCheckbox />
        <StBtnSetWrapper>
          <MapZoomButton />
          <MapMarkerButton />
        </StBtnSetWrapper>
      </StStickyWrapper>
      <MapContainer />
    </StWrapper>
  );
};

const StWrapper = styled.aside`
  width: calc(100vw - 840px);
  display: ${({ mapState }) => (mapState ? 'block' : 'none')};

  @media ${({ theme }) => theme.size.medium} {
    display: ${({ view }) => (view === 'map' ? 'block' : 'none')};
    width: ${({ view }) => (view === 'map' ? '100%' : '0px')};
  }
`;

const StStickyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  height: 100vh;
  position: absolute;
  top: 10rem;
  padding: 0 0 0 2rem;
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
