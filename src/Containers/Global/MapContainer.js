import React, { useReducer, useEffect, useRef } from 'react';
import Map from '../../Components/Global/Map';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  closeMarker,
  zoomSet,
  hideMap,
  zoomIn,
  zoomOut,
} from '../../Modules/search';

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

const MapContainer = ({ markers, closeMap }) => {
  const { location } = useSelector(state => state.searchForm);
  const { mapZoom } = useSelector(state => state.search);
  const [centerState, centerDispatch] = useReducer(centerReducer, centerInit);
  const dispatch = useDispatch();
  const updateZoom = zoom => dispatch(zoomSet());
  const onHideMap = () => dispatch(hideMap());
  const onZoomIn = () => dispatch(zoomIn());
  const onZoomOut = () => dispatch(zoomOut());
  const onCloseMarker = e => {
    e.target.nodeName === 'DIV' && dispatch(closeMarker());
  };

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
    // <div onClick={onCloseMarker}>
    <Map
      center={centerState.center}
      mapZoom={mapZoom}
      markers={markers}
      closeMap={closeMap}
      onHideMap={onHideMap}
      onZoomIn={onZoomIn}
      onZoomOut={onZoomOut}
      updateZoom={updateZoom}
      onCloseMarker={onCloseMarker}
    />
    // </div>
  );
};

export default MapContainer;
