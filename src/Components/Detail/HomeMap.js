import React from 'react';
import '../../style/HomeMap.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  // Marker,
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqryK5lMUxY0i_-Zu1cUrgW3_Geg4BrWA&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '480px', position: 'relative' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ children }) => {
  const { location } = useSelector(state => state.home.homeState.home);

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={location}
      options={{
        // disableDefaultUI: true,
        scrollwheel: false,
        fullscreenControl: false,
        mapTypeControl: false,
      }}
    >
      {children}
      {/* {props.isMarkerShown && <Marker position={location} />} */}
    </GoogleMap>
  );
});

export default MyMapComponent;

// import React from 'react';
// import { GoogleMap, LoadScript } from 'react-google-maps';

// const HomeMap = () => {
//   const mapStyles = {
//     height: '100vh',
//     width: '100%',
//   };

//   const defaultCenter = {
//     lat: 41.3851,
//     lng: 2.1734,
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCqryK5lMUxY0i">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={13}
//         center={defaultCenter}
//       />
//     </LoadScript>
//   );
// };

// export default HomeMap;
