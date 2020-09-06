import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMap } from '../../Modules/search';
import SearchResult from '../../Components/Search/SearchResult';

const SearchResultContainer = () => {
  const { mapState, viewState, searchForm, data } = useSelector(
    state => state.search,
  );
  const { dataTotal } = data;
  const dispatch = useDispatch();
  const onOpenMap = () => dispatch(openMap());

  return (
    <SearchResult
      mapState={mapState}
      view={viewState}
      dataTotal={dataTotal}
      searchForm={searchForm}
      onOpenMap={onOpenMap}
    />
  );
};

export default React.memo(SearchResultContainer);
