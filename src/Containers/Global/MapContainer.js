import React from 'react';
import Map from '../../Components/Global/Map';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  closeMarker,
  zoomSet,
  closeMap,
  hideMap,
  zoomIn,
  zoomOut,
  openPopup,
  setMapSearch,
  fetchData,
  setMapBounds,
} from '../../Modules/search';
import qs from 'qs';

const MapContainer = ({ markers }) => {
  const { mapCenter } = useSelector(state => state.search.data);
  const { mapZoom, viewState, mapSearch } = useSelector(state => state.search);
  const history = useHistory();
  const { search: query } = useLocation();
  const queryObj = qs.parse(query, { ignoreQueryPrefix: true });

  const dispatch = useDispatch();
  const openFilterModal = () => dispatch(openPopup('all'));
  const updateZoom = zoom => dispatch(zoomSet(zoom));
  const onHideMap = () => dispatch(hideMap());
  const onCloseMap = () => dispatch(closeMap());
  const checkMapSearch = () => dispatch(setMapSearch());
  const onZoomIn = () => dispatch(zoomIn());
  const onZoomOut = () => dispatch(zoomOut());
  const onCloseMarker = e => {
    e.target.nodeName === 'DIV' && dispatch(closeMarker());
  };

  const changeBounds = bounds => {
    Object.keys(bounds).forEach(bound => (queryObj[bound] = bounds[bound]));
    history.replace(`?${qs.stringify(queryObj)}`);
    dispatch(fetchData(`?${qs.stringify(queryObj)}`));
    dispatch(setMapBounds(bounds));
  };

  return (
    <div onClick={onCloseMarker}>
      <Map
        view={viewState}
        center={mapCenter}
        mapZoom={mapZoom}
        markers={markers}
        mapSearch={mapSearch}
        checkMapSearch={checkMapSearch}
        onCloseMap={onCloseMap}
        onHideMap={onHideMap}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        updateZoom={updateZoom}
        onCloseMarker={onCloseMarker}
        openFilterModal={openFilterModal}
        changeBounds={changeBounds}
      />
    </div>
  );
};

export default React.memo(MapContainer);
