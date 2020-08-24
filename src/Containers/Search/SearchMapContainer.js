import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideMap } from '../../Modules/search';
import SearchMap from '../../Components/Search/SearchMap';
import { zoomIn, zoomOut } from '../../Modules/search';

const SearchMapContainer = ({ view, closeMap }) => {
  const { mapState } = useSelector(state => state.search);
  const { mapZoom } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const onHideMap = () => dispatch(hideMap());
  const onZoomIn = () => dispatch(zoomIn());
  const onZoomOut = () => dispatch(zoomOut());

  return (
    <SearchMap
      mapState={mapState}
      onZoomIn={onZoomIn}
      onZoomOut={onZoomOut}
      onHideMap={onHideMap}
      closeMap={closeMap}
      view={view}
    />
  );
};

export default SearchMapContainer;
