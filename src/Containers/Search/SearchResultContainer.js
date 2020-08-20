import React from 'react';
import SearchResult from '../../Components/Search/SearchResult';

const SearchResultContainer = ({ mapState, openMap }) => {
  return <SearchResult mapState={mapState} openMap={openMap} />;
};

export default SearchResultContainer;
