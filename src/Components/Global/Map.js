import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const Map = () => {
// let map;
// const { google } = window;

// const initMap = () => {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// };

// useEffect(() => {
//   initMap();
// }, []);

// return <GoogleMap id="map"></GoogleMap>;
// };

const Map = ({ children, ...rest }) => {
  return <StWrapper {...rest}>{children}</StWrapper>;
};

const StWrapper = styled.div``;

// 디자인 커스터마이징 할 수 있게 스타일 컴포넌트로 내보내주세요~

export default Map;
