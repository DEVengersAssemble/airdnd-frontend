import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchHeader from '../../Components/Search/SearchHeader';
import { closeHeader, openHeader } from '../../Modules/search';

const SearchHeaderContainer = () => {
  const { headerState } = useSelector(state => state.search);
  const searchForm = useSelector(state => state.searchForm);
  const history = useHistory();

  const [initAnimation, setInitAnimation] = useState(false);
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
