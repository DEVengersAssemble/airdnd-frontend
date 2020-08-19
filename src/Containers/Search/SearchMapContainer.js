import React from 'react';
import SearchMap from '../../Components/Search/SearchMap';

const SearchMapContainer = ({ closeMap, mapState }) => {
  return <SearchMap closeMap={closeMap} mapState={mapState} />;
};

export default SearchMapContainer;
