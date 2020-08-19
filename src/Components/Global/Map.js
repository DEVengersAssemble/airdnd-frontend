import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = compose(
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 37.550533, lng: 127.041504 }}
  >
    <Marker position={{ lat: 37.550533, lng: 127.041504 }} />
  </GoogleMap>
));

export default Map;
