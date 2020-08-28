import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideMap } from '../../Modules/search';
import SearchMap from '../../Components/Search/SearchMap';
import { zoomIn, zoomOut } from '../../Modules/search';

const SearchMapContainer = ({ view, closeMap }) => {
  const { mapState } = useSelector(state => state.search);
  const { homes } = useSelector(state => state.search);
  const markers = homes.map(home => ({
    id: home.id,
    location: home.location,
    price: home.price,
  }));

  const dispatch = useDispatch();
  const onHideMap = () => dispatch(hideMap());
  const onZoomIn = () => dispatch(zoomIn());
  const onZoomOut = () => dispatch(zoomOut());

  return (
    <SearchMap
      view={view}
      markers={markers}
      mapState={mapState}
      closeMap={closeMap}
      onZoomIn={onZoomIn}
      onZoomOut={onZoomOut}
      onHideMap={onHideMap}
    />
  );
};

export default SearchMapContainer;
