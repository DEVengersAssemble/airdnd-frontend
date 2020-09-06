import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeList from '../../Components/Search/HomeList';
import HomeContainer from './HomeContainer';
import HomeCardContainer from './HomeCardContainer';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { fetchData } from '../../Modules/search';

const HomeListContainer = () => {
  const { mapState, isFilterChanged } = useSelector(state => state.search);
  const { homes, dataTotal } = useSelector(state => state.search.data);
  const { search } = useLocation();
  const dispatch = useDispatch();
  const searchForm = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  // useEffect(() => {
  //   if (!isFilterChanged) return;
  //   if (isFilterChanged) {
  //     delete searchForm.page;
  //     dispatch(fetchData(`?${qs.stringify(searchForm)}`));
  //   }
  // }, [isFilterChanged]);

  return (
    <>
      <HomeList mapState={mapState} dataTotal={dataTotal}>
        {homes.map(home =>
          mapState ? (
            <HomeContainer key={home.homeId} home={home} />
          ) : (
            <HomeCardContainer key={home.homeId} home={home} />
          ),
        )}
      </HomeList>
    </>
  );
};

export default React.memo(HomeListContainer);
