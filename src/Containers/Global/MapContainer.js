import React, { useReducer, useEffect } from 'react';
import Map from '../../Components/Global/Map';
import { useSelector } from 'react-redux';
import axios from 'axios';

const centerInit = {
  loading: false,
  center: null,
  error: null,
};

const centerReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        center: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        center: action.response.data.results[0].geometry.location,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        center: null,
        error: action.error,
      };
    default:
      throw new Error('Unhandled Action', action.type);
  }
};

const MapContainer = () => {
  const { location } = useSelector(state => state.searchForm);
  const [centerState, dispatch] = useReducer(centerReducer, centerInit);

  const getCenter = async location => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCqryK5lMUxY0i_-Zu1cUrgW3_Geg4BrWA`,
      );
      dispatch({ type: 'SUCCESS', response });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  React.useEffect(() => {
    getCenter(location);
  }, []);

  if (!centerState.center) return null;
  return <Map location={location} center={centerState.center} />;
};

export default MapContainer;
