import React, { useReducer, useEffect, useRef } from 'react';
import Map from '../../Components/Global/Map';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { closeMarker, zoomSet } from '../../Modules/search';

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

const MapContainer = ({ markers }) => {
  const { location } = useSelector(state => state.searchForm);
  const { mapZoom } = useSelector(state => state.search);
  const [centerState, centerDispatch] = useReducer(centerReducer, centerInit);
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
  const updateZoom = zoom => dispatch(zoomSet());
  const onCloseMarker = e => {
    e.target.nodeName === 'DIV' && dispatch(closeMarker());
  };
>>>>>>> a0b74daac04906641223ff4d6978c2f32087f291

  useEffect(() => {
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
    getCenter(location);
  }, []);

  if (!centerState.center) return null;
  return (
<<<<<<< HEAD
    <Map center={centerState.center} mapZoom={mapZoom} markers={markers} />
=======
    // <div onClick={onCloseMarker}>
    <Map
      center={centerState.center}
      mapZoom={mapZoom}
      markers={markers}
      updateZoom={updateZoom}
      onCloseMarker={onCloseMarker}
    />
    // </div>
>>>>>>> a0b74daac04906641223ff4d6978c2f32087f291
  );
};

export default MapContainer;
