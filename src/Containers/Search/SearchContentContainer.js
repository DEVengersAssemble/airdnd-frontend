import React, { useState } from 'react';
import SearchContent from '../../Components/Search/SearchContent';

const SearchContentContainer = () => {
  const [mapState, setMapState] = useState(true);
  const closeMap = () => setMapState(false);

  return <SearchContent mapState={mapState} closeMap={closeMap} />;
};

export default SearchContentContainer;
