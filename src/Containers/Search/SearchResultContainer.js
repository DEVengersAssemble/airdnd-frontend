import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMap } from '../../Modules/search';
import SearchResult from '../../Components/Search/SearchResult';

const SearchResultContainer = () => {
  const { mapState, viewState, data } = useSelector(state => state.search);
  const { location, guests } = useSelector(state => state.search.searchForm);
  const { dataTotal } = data;
  const dispatch = useDispatch();

  const onOpenMap = () => dispatch(openMap());

  return (
    <SearchResult
      mapState={mapState}
      view={viewState}
      dataTotal={dataTotal}
      location={location}
      guestCount={guests}
      onOpenMap={onOpenMap}
    />
  );
};

export default React.memo(SearchResultContainer);
