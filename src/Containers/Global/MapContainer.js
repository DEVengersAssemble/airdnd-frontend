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

const MapContainer = ({ markers }) => {
  const { data } = useSelector(state => state.map);
  const { mapZoom, viewState } = useSelector(state => state.search);
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

  if (!data) return null;
  return (
    <div onClick={onCloseMarker}>
      <Map
        view={viewState}
        center={data}
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
