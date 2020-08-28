import React from 'react';
import styled, { css } from 'styled-components';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView,
  InfoWindow,
} from 'react-google-maps';
import { AiFillHome } from 'react-icons/ai';
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
  withScriptjs,
  withGoogleMap,
)(({ center, mapZoom, markers }) => {
  return (
    <GoogleMap
      zoom={mapZoom}
      defaultZoom={13}
      defaultCenter={{
        lat: center.lat,
        lng: center.lng,
      }}
      options={{ disableDefaultUI: true }}
    >
      {markers &&
        markers.map((marker, i) => (
          <MapMarkerContainer key={i} marker={marker} />
        ))}
      <OverlayView
        position={{ lat: 37.64993, lng: 127.077999 }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <HomeMarker>
          <AiFillHome />
        </HomeMarker>
      </OverlayView>
    </GoogleMap>
  );
});

const buttonStyle = css`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  &:focus {
    background: black;
    color: white;
  }
`;

const HomeMarker = styled.button`
  ${buttonStyle};
  border: 1px solid lightgray;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.6rem;
  padding: 2px 0 0;
`;

const PriceMarker = styled.button`
  ${buttonStyle};
  border: 1px solid lightgray;
  border-radius: 30px;
  font-size: 1.4rem;
  padding: 0.6rem 0.8rem;
`;

export default Map;
