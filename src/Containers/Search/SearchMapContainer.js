import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideMap } from '../../Modules/search';
import SearchMap from '../../Components/Search/SearchMap';
import { zoomIn, zoomOut } from '../../Modules/search';

const SearchMapContainer = ({ view, closeMap }) => {
  const { mapState } = useSelector(state => state.search);
  const { homes } = useSelector(state => state.search);

  return (
    <SearchMap
      view={view}
      markers={homes}
      mapState={mapState}
      closeMap={closeMap}
    />
  );
};

export default SearchMapContainer;
