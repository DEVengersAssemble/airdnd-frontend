import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMap } from '../../Modules/search';
import SearchResult from '../../Components/Search/SearchResult';

const SearchResultContainer = ({ view, openMap }) => {
  const { mapState, dataTotal } = useSelector(state => state.search);
  const { location, guests } = useSelector(state => state.searchForm);
  const guestCount = guests.adult + guests.child;
  const dispatch = useDispatch();
  const onShowMap = () => dispatch(showMap());

  return (
    <SearchResult
      mapState={mapState}
      view={view}
      openMap={openMap}
      dataTotal={dataTotal}
      onShowMap={onShowMap}
      location={location}
      guestCount={guestCount}
    />
  );
};

export default SearchResultContainer;
