import React from 'react';
import SearchPagination from '../../Components/Search/SearchPagination';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import { navigatePage, fetchData } from '../../Modules/search';

const SearchPaginationContainer = () => {
  const { data, page } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const { search: query } = useLocation();
  const queryObj = qs.parse(query, { ignoreQueryPrefix: true });
  const pageArray = Array.from(
    { length: Math.ceil(data.dataTotal / 20) },
    (_, i) => i + 1,
  );

  const onNavPage = e => {
    queryObj.page = e.target.firstChild.data;
    history.replace(`?${qs.stringify(queryObj)}`);
    dispatch(navigatePage(+e.target.firstChild.data));
    dispatch(fetchData(query));
  };

  const onPrevPage = () => dispatch(navigatePage(page - 1));
  const onNextPage = () => dispatch(navigatePage(page + 1));

  return (
    <SearchPagination
      page={page}
      dataTotal={data.dataTotal}
      pageArray={pageArray}
      onNavPage={onNavPage}
      onPrevPage={onPrevPage}
      onNextPage={onNextPage}
    />
  );
};

export default SearchPaginationContainer;
