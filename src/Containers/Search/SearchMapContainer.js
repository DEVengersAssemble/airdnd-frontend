import React from 'react';
import { useSelector } from 'react-redux';
import SearchMap from '../../Components/Search/SearchMap';

const SearchMapContainer = () => {
  const { mapState, viewState } = useSelector(state => state.search);
  const { homes } = useSelector(state => state.search.data);

  return <SearchMap view={viewState} markers={homes} mapState={mapState} />;
};

export default React.memo(SearchMapContainer);
