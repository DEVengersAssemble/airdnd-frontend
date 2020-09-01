import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../Modules/search';
import { fetchCenter } from '../../Modules/map';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';

const SearchContentContainer = () => {
  const { loading, data, error } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const query = useLocation();
  const searchForm = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  console.log('렌더링시작한다~~~~~~~~~~', searchForm.location);

  useEffect(() => {
    dispatch(fetchData(searchForm));
    dispatch(fetchCenter(searchForm.location));
  }, []);

  console.log(loading, error, data);
  if (loading) console.log('==================loading========');
  if (error) console.log('========ERROR================');
  if (!data) return null;
  return <SearchContent />;
};

export default React.memo(SearchContentContainer);
