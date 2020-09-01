import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../Modules/search';
import SearchContent from '../../Components/Search/SearchContent';
import qs from 'qs';
import axios from 'axios';

const SearchContentContainer = () => {
  const { loading, data, error } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const query = useLocation();
  const searchForm = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  console.log('렌더링시작한다~~~~~~~~~~', searchForm);
  // dispatch(fetchData(searchForm));

  // useEffect(() => {
  //   dispatch(fetchData(searchForm));
  // }, []);

  // useEffect(() => {
  //   const test = async () => {
  //     try {
  //       const response = await axios.get(
  //         `back/initialState/location/${'seoul'}/checkIn/${'2020-09-02'}/checkOut/${'2020-09-06'}/adults/${'3'}`,
  //       );
  //       console.log(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   test();
  // }, []);

  console.log(loading, error, data);
  if (loading) console.log('==================loading========');
  if (error) console.log('========ERROR================');
  if (!data) return null;
  return <SearchContent />;
};

export default React.memo(SearchContentContainer);
