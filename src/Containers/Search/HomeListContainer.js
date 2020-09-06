import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeList from '../../Components/Search/HomeList';
import HomeContainer from './HomeContainer';
import HomeCardContainer from './HomeCardContainer';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchData } from '../../Modules/search';
import qs from 'qs';
import _ from 'lodash';

const HomeListContainer = () => {
  const { mapState, isFilterChanged, filterApplied, data } = useSelector(
    state => state.search,
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const searchForm = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const fa = { ...filterApplied };
  const keys = Object.keys(fa);
  const deleteFromQuery = () => keys.filter(key => fa[key] === 0);
  const applyToQuery = obj =>
    keys.filter(key => fa[key] !== 0).forEach(key => (obj[key] = fa[key]));

  const setListValues = key => (fa[key] === [] ? 0 : fa[key].join('-'));
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

  useEffect(() => {
    if (!isFilterChanged) return;
    keys.forEach(key => (fa[key] = setValues(key)));

    const newQueryObj = _.omit(searchForm, [...deleteFromQuery(), 'page']);
    applyToQuery(newQueryObj);

    const newQuery = `?${qs.stringify(newQueryObj)}`;
    history.replace(newQuery);
    dispatch(fetchData(newQuery));
  }, [isFilterChanged]);

  return (
    <>
      <HomeList mapState={mapState} dataTotal={data.dataTotal}>
        {data.homes.map(home =>
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
