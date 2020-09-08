import React from 'react';
import SearchPagination from '../../Components/Search/SearchPagination';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import { navigatePage, fetchData } from '../../Modules/search';

const SearchPaginationContainer = () => {
  const { dataTotal } = useSelector(state => state.search.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const { search: query } = useLocation();
  const queryObj = qs.parse(query, { ignoreQueryPrefix: true });
  const pageArray = Array.from({ length: Math.ceil(dataTotal / 20) });

  const onNavPage = e => {
    queryObj.page = e.target.value;
    history.replace(`?${qs.stringify(queryObj)}`);
    dispatch(fetchData(query));
    dispatch(navigatePage(e.target.value));
  };

  return <SearchPagination pageArray={pageArray} onNavPage={onNavPage} />;
};

export default SearchPaginationContainer;
