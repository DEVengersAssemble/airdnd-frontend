/* eslint-disable react/display-name */
import React from 'react';
import { FilterList, FilterButton } from '../../Components/Search/FilterList';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup, openPopup, showMap } from '../../Modules/search';

const FilterButtonContainer = React.memo(({ name, text, children }) => {
  const { popupState, popupApplied } = useSelector(state => state.search);
  const isApplied = popupApplied[name];

  const dispatch = useDispatch();
  const onClick = () =>
    dispatch(popupState[name] ? closePopup(name) : openPopup(name));
  console.log(name, '이름 뭐니', popupState[name], '팝업 열렷니 닫혓니');
  return (
    <FilterButton text={text} isApplied={isApplied} onClick={onClick}>
      {children}
    </FilterButton>
  );
});

const FilterListContainer = React.memo(({ mapState }) => {
  const { dateDiff } = useSelector(state => state.search.searchForm);
  const dispatch = useDispatch();
  const onShowMap = () => dispatch(showMap());

  return (
    <FilterList mapState={mapState} onShowMap={onShowMap} dateDiff={dateDiff} />
  );
});

export { FilterButtonContainer, FilterListContainer };
