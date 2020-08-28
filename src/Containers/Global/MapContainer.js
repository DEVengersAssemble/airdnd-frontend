import React, { useState, useReducer, useEffect } from 'react';
import Map from '../../Components/Global/Map';
import { useSelector, useDispatch } from 'react-redux';
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
      return state;
  }
};

const MapContainer = () => {
  const { location, dateDiff } = useSelector(state => state.searchForm);
  const { mapZoom } = useSelector(state => state.search);
  const { homes } = useSelector(state => state.search);
  const markers = homes.map(home => {
    return {
      id: home.id,
      location: home.location,
      price: home.price,
    };
  });

  const [infoState, setInfoState] = useState(false);
  const [centerState, centerDispatch] = useReducer(centerReducer, centerInit);
  const dispatch = useDispatch();

  const getCenter = async location => {
    centerDispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCqryK5lMUxY0i_-Zu1cUrgW3_Geg4BrWA`,
      );
      centerDispatch({ type: 'SUCCESS', response });
    } catch (e) {
      centerDispatch({ type: 'ERROR', error: e });
    }
  };

  const showInfo = () => setInfoState(true);

  useEffect(() => {
    getCenter(location);
  }, []);

  if (!centerState.center) return null;
  return (
    <Map
      center={centerState.center}
      mapZoom={mapZoom}
      dateDiff={dateDiff}
      markers={markers}
      infoState={infoState}
      showInfo={showInfo}
    />
  );
};

export default MapContainer;
