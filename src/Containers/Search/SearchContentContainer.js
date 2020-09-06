import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchData,
  getSearchForm,
  modalFilterInit,
  filterInit,
} from '../../Modules/search';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';
import _ from 'lodash';

const SearchContentContainer = () => {
  const {
    loading,
    data,
    error,
    isFilterChanged,
    filterApplied: fa,
  } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const { search: query } = useLocation();
  const searchForm = qs.parse(query, {
    ignoreQueryPrefix: true,
  });

  const keys = Object.keys(fa);
  const deleteFromQuery = () => keys.filter(key => fa[key] === 0);
  const applyToQuery = obj =>
    keys.filter(key => fa[key] !== 0).forEach(key => (obj[key] = fa[key]));

  const setListValues = key => (fa[key] === [] ? fa[key].join('-') : 0);
  const setValues = key => {
    switch (key) {
      case 'priceMin':
        return fa.priceMin === 12000 ? 0 : fa.priceMin;
      case 'priceMax':
        return fa.priceMax === 1000000 ? 0 : fa.priceMax;
      case 'amenityList':
      case 'facilityList':
      case 'hostLangList':
        return setListValues(key);
      default:
        return fa[key] ? 1 : 0;
    }
  };

  console.log(fa.roomTypeHouse);
  console.log('렌더링시작한다~~~~~~~~~~', searchForm);

  useEffect(() => {
    if (!isFilterChanged) {
      dispatch(fetchData(query));
      dispatch(getSearchForm(searchForm));
    } else {
      keys.forEach(key => (fa[key] = setValues(key)));
      const newQueryObj = _.omit(searchForm, deleteFromQuery());
      applyToQuery(newQueryObj);
      const newQuery = `?${qs.stringify(newQueryObj)}`;
      history.replace(newQuery);
      dispatch(fetchData(newQuery));
    }
    // window.scrollTo(0, 0);
  }, [isFilterChanged]);

  if (loading)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  if (error)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  if (!data)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  return <SearchContent />;
};

export default React.memo(SearchContentContainer);
