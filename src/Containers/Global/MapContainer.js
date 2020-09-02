import React, { useReducer, useEffect } from 'react';
import Map from '../../Components/Global/Map';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  closeMarker,
  zoomSet,
  closeMap,
  hideMap,
  zoomIn,
  zoomOut,
  openPopup,
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

const MapContainer = ({ markers }) => {
  const { location } = useSelector(state => state.searchForm);
  const { mapZoom, viewState } = useSelector(state => state.search);
  const [centerState, centerDispatch] = useReducer(centerReducer, centerInit);
  const dispatch = useDispatch();
  const openFilterModal = () => dispatch(openPopup('modal'));
  const updateZoom = zoom => dispatch(zoomSet(zoom));
  const onHideMap = () => dispatch(hideMap());
  const onCloseMap = () => dispatch(closeMap());
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
    <div onClick={onCloseMarker}>
      <Map
        view={viewState}
        center={centerState.center}
        mapZoom={mapZoom}
        markers={markers}
        onCloseMap={onCloseMap}
        onHideMap={onHideMap}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        updateZoom={updateZoom}
        onCloseMarker={onCloseMarker}
        openFilterModal={openFilterModal}
      />
    </div>
  );
};

export default React.memo(MapContainer);
