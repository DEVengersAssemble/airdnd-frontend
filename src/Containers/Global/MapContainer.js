import React from 'react';
import Map from '../../Components/Global/Map';
import { useSelector, useDispatch } from 'react-redux';
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
  const { mapCenter } = useSelector(state => state.search.data);
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

  return (
    <div onClick={onCloseMarker}>
      <Map
        view={viewState}
        center={mapCenter}
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
