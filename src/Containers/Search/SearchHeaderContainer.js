import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import SearchHeader from '../../Components/Search/SearchHeader';
import qs from 'qs';
import { closeHeader, openHeader } from '../../Modules/search';

const SearchHeaderContainer = () => {
  const { headerState } = useSelector(state => state.search);
  const searchForm = useSelector(state => state.searchForm);
  const history = useHistory();
  // const { search: query } = useLocation();
  // const queryObj = qs.parse(query, { ignoreQueryPrefix: true });
  // const searchFormObj = {
  //   location: queryObj.location,
  //   checkIn: queryObj.checkIn,
  //   checkOut: queryObj.checkOut,
  //   dateDiff: queryObj.dateDiff,
  //   flexibleDate: queryObj.flexibleDate,
  //   guests: {
  //     adult: queryObj.adult,
  //     child: queryObj.child,
  //     infant: queryObj.infant,
  //   },
  // };

  const [initAnimation, setInitAnimation] = useState(false);
  // const searchForm = searchFormObj;
  const dispatch = useDispatch();
  const onScroll = () => dispatch(closeHeader());
  const handleSearchBtnClick = () => dispatch(openHeader());

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (!initAnimation && headerState) {
      setInitAnimation(true);
    }
    window.addEventListener('scroll', throttle(onScroll, 150));
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, initAnimation]);

  return (
    <SearchHeader
      searchForm={searchForm}
      initAnimation={initAnimation}
      isSearchBtnClicked={headerState}
      handleLogoClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
    ></SearchHeader>
  );
};

export default React.memo(SearchHeaderContainer);
