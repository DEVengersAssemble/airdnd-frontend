import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMap } from '../../Modules/search';
import SearchResult from '../../Components/Search/SearchResult';

const SearchResultContainer = () => {
  const { mapState } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const onShowMap = () => dispatch(showMap());

  return <SearchResult mapState={mapState} onShowMap={onShowMap} />;
};

export default SearchResultContainer;
