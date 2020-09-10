import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, getFilterForm } from '../../Modules/search';
import { getSearchForm } from '../../Modules/searchForm';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';
import _ from 'lodash';
import { fetchBookmarkLists } from '../../Modules/wishlists';

const SearchContentContainer = () => {
  const { id } = useSelector(state => state.user.data);
  const { loading, data, error } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const { search: query } = useLocation();
  const queryObj = qs.parse(query, { ignoreQueryPrefix: true });

  const searchFormObj = {
    location: queryObj.location,
    checkIn: queryObj.checkIn,
    checkOut: queryObj.checkOut,
    dateDiff: queryObj.dateDiff,
    flexibleDate: queryObj.flexibleDate,
    guests: {
      adult: queryObj.adult,
      child: queryObj.child,
      infant: queryObj.infant,
    },
  };

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

  const filterFormObj = _.mapValues(
    _.omit(queryObj, [
      'location',
      'checkIn',
      'checkOut',
      'dateDiff',
      'felxibleDate',
      'guests',
      'adult',
      'child',
      'infant',
    ]),
    (value, key) => changeType(key, queryObj),
  );

  // console.log('렌더링시작한다~~~~~~~~~~', searchForm);

  useEffect(() => {
    dispatch(fetchData(query));
    dispatch(getSearchForm(searchFormObj));
    dispatch(getFilterForm(filterFormObj));
    dispatch(fetchBookmarkLists());
    window.scrollTo({ top: 0 });
  }, [
    queryObj.location,
    queryObj.checkIn,
    queryObj.checkOut,
    queryObj.adult,
    queryObj.child,
  ]);

  if (loading)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  if (error)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  if (!data)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  return <SearchContent isLoggedIn={id} />;
};

export default React.memo(SearchContentContainer);
