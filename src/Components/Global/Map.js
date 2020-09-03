import React from 'react';
import styled from 'styled-components';
import {
  MapZoomButton,
  MapMarkerButton,
  MapCloseButton,
  MapCheckbox,
  MapFilterButton,
} from '../Search/MapButton';
import { compose, withProps, withState, withHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import theme from '../../style/theme';
import MapMarkerContainer from '../../Containers/Search/MapMarkerContainer';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqryK5lMUxY0i_-Zu1cUrgW3_Geg4BrWA&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: (
      <div
        style={{
          width: '100%',
          height: `100vh`,
          position: 'sticky',
          top: '0',
        }}
      />
    ),
    containerElement: (
      <div
        style={{
          width: '100%',
          height: `100vh`,
          position: 'sticky',
          top: '0',
        }}
      />
    ),
    mapElement: (
      <div
        style={{
          width: '100%',
          height: `100vh`,
          position: 'sticky',
          top: '0',
        }}
      />
    ),
  }),
  withState('zoom', 'onZoomChange', 10),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };

    return {
      setRef: () => ref => {
        refs.map = ref;
      },
      setZoom: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      },
    };
  }),
  withScriptjs,
  withGoogleMap,
)(
  ({
    view,
    center,
    markers,
    zoom,
    mapZoom,
    setZoom,
    onZoomIn,
    onZoomOut,
    onZoomChange,
    onHideMap,
    onCloseMap,
    openFilterModal,
    updateZoom,
    setRef,
  }) => {
    return (
      <GoogleMap
        ref={setRef}
        zoom={mapZoom}
        defaultZoom={10}
        defaultCenter={{
          lat: center.lat,
          lng: center.lng,
        }}
        options={{ disableDefaultUI: true }}
        onZoomChanged={() => {
          setZoom();
          updateZoom(zoom);
        }}
      >
        <StStickyWrapper>
          <MapCloseButton
            onHideMap={onHideMap}
            onCloseMap={onCloseMap}
            view={view}
          />
          <MapCheckbox />
          <StBtnSetWrapper>
            {view === 'map' && (
              <MapFilterButton openFilterModal={openFilterModal} />
            )}
            <MapZoomButton
              onZoomIn={() => {
                onZoomIn();
                onZoomChange(mapZoom + 1);
              }}
              onZoomOut={() => {
                onZoomOut();
                onZoomChange(mapZoom - 1);
              }}
            />
            <MapMarkerButton />
          </StBtnSetWrapper>
        </StStickyWrapper>
        {markers &&
          markers.map((marker, i) => (
            <MapMarkerContainer key={i} marker={marker} theme={theme} />
          ))}
        <Marker position={{ lat: 37.5384272, lng: 126.9654442 }} />
        <Marker position={{ lat: 37.5384273, lng: 126.9654442 }} />
        <Marker position={{ lat: 37.5384273, lng: 126.9644442 }} />
        <Marker position={{ lat: 37.5284272, lng: 126.9654432 }} />
      </GoogleMap>
    );
  },
);

const StStickyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`;

export default Map;
