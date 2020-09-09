import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, getSearchForm, all } from '../../Modules/search';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';
import _ from 'lodash';

const SearchContentContainer = () => {
  const { loading, data, error } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const { search: query } = useLocation();
  const queryObj = qs.parse(query, { ignoreQueryPrefix: true });

  const changeType = (key, obj) => {
    switch (key) {
      case 'amenityList':
      case 'facilityList':
      case 'hostLangList':
        return obj[key] && obj[key].split('-');
      default:
        return parseInt(obj[key], 10);
    }
  };

  const searchForm = _.mapValues(queryObj, (value, key) =>
    [...all, 'page'].includes(key) ? changeType(key, queryObj) : value,
  );

  console.log('렌더링시작한다~~~~~~~~~~', searchForm);

  useEffect(() => {
    dispatch(fetchData(query));
    dispatch(getSearchForm(searchForm));
    // window.scrollTo(0, 0);
  }, []);

  if (loading)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  if (error)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  if (!data)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  return <SearchContent />;
};

export default React.memo(SearchContentContainer);
