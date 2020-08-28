import React, { useState } from 'react';
import SearchContent from '../../Components/Search/SearchContent';

const SearchContentContainer = () => {
  const [view, setView] = useState('result');
  const openMap = () => setView('map');
  const closeMap = () => setView('result');

  return <SearchContent view={view} openMap={openMap} closeMap={closeMap} />;
};

export default SearchContentContainer;
