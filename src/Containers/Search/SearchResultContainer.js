import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMap, openMap } from '../../Modules/search';
import SearchResult from '../../Components/Search/SearchResult';

const SearchResultContainer = () => {
  const { mapState, viewState, dataTotal } = useSelector(state => state.search);
  const { location, guests } = useSelector(state => state.searchForm);
  const guestCount = guests.adult + guests.child;
  const dispatch = useDispatch();
  const onShowMap = () => dispatch(showMap());
  const onOpenMap = () => dispatch(openMap());

  return (
    <SearchResult
      mapState={mapState}
      view={viewState}
      dataTotal={dataTotal}
      location={location}
      guestCount={guestCount}
      onOpenMap={onOpenMap}
      onShowMap={onShowMap}
    />
  );
};

export default SearchResultContainer;
