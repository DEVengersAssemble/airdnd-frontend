import React, { useState } from 'react';
import SearchContent from '../../Components/Search/SearchContent';

const SearchContentContainer = () => {
  const [mapState, setMapState] = useState(true);
  const closeMap = () => setMapState(false);
  const openMap = () => setMapState(true);

  return (
    <SearchContent mapState={mapState} openMap={openMap} closeMap={closeMap} />
  );
};

export default SearchContentContainer;
