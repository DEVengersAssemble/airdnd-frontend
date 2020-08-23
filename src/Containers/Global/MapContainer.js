import React from 'react';
import Map from '../../Components/Global/Map';
import { useSelector } from 'react-redux';
import axios from 'axios';

const MapContainer = () => {
  const { location } = useSelector(state => state.searchForm);
  let center = '';
  const getCenter = async location => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCqryK5lMUxY0i_-Zu1cUrgW3_Geg4BrWA`,
    );
    // return data.results[0].geometry.location;
    console.log(response);
    center = response.data.results[0].geometry.location;
    // return response;
    console.log(center);
    return center;
  };

  console.log(getCenter(location));
  console.log(center);

  return <Map location={location} getCenter={getCenter} center={center} />;
};

export default MapContainer;
