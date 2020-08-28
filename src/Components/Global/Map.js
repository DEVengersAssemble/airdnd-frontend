import React from 'react';
import styled, { css } from 'styled-components';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

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
)(({ center, mapZoom }) => {
  // const goldStar = {
  //   fillColor: 'white',
  //   fillOpacity: 0.8,
  //   borderRadius: '50%',
  //   scale: 0.3,
  //   strokeColor: 'gold',
  //   strokeWeight: 1,
  // };
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
      <Marker
        className="노원역"
        position={{ lat: 37.651791, lng: 127.060944 }}
        // icon={goldStar}
      />
      <Marker
        className="을지초"
        position={{ lat: 37.650333, lng: 127.072783 }}
        // icon={goldStar}
      />
      <Marker
        className="당현천"
        position={{ lat: 37.648824, lng: 127.065379 }}
        label={{ text: 'hello', color: 'white' }}
        // icon={goldStar}
      />
    </GoogleMap>
  );
});

export default Map;
