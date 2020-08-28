import React from 'react';
import styled, { css } from 'styled-components';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  OverlayView,
} from 'react-google-maps';
import { AiFillHome } from 'react-icons/ai';
import theme from '../../style/theme';
import MapMarkerContainer from '../../Containers/Search/MapMarkerContainer';
import Button from './Button';

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
          <MapMarkerContainer key={i} marker={marker} theme={theme} />
        ))}
      <OverlayView
        position={{ lat: 37.64993, lng: 127.077999 }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <HomeMarker theme={theme} btnType="circle">
          <AiFillHome />
        </HomeMarker>
      </OverlayView>
    </GoogleMap>
  );
});

const buttonStyle = css`
  border: none;
  box-shadow: 0 0 2px ${theme.color.gray};
  transition: 0.3s;
  &:hover {
    border: none;
    transform: scale(1.1);
    transition: 0.3s;
  }
  &:focus {
    background: black;
    color: white;
  }
`;

const HomeMarker = styled(Button)`
  ${buttonStyle};
`;

const PriceMarker = styled(Button)`
  ${buttonStyle};
  font-size: 1.4rem;
  padding: 0.6rem 0.8rem;
`;

export default Map;
