/* eslint-disable react/display-name */
import React, { Children, cloneElement } from 'react';
import { FilterList, FilterButton } from '../../Components/Search/FilterList';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup, openPopup, showMap } from '../../Modules/search';

const FilterButtonContainer = React.memo(({ name, text, children }) => {
  const { popup, filterDisabled } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const onClose = (name, state) => dispatch(closePopup(name, state));
  const onClick = () =>
    dispatch(popup[name] ? closePopup(name) : openPopup(name));
  const isApplied = !filterDisabled[name];
  console.log(name, filterDisabled, isApplied);

  return (
    <FilterButton text={text} isApplied={isApplied} onClick={onClick}>
      {Children.map(children, child => {
        return cloneElement(child, {
          popupState: popup[name],
          onClose,
        });
      })}
    </FilterButton>
  );
});

const FilterListContainer = React.memo(({ mapState }) => {
  const { dateDiff } = useSelector(state => state.searchForm);
  const dispatch = useDispatch();
  const onShowMap = () => dispatch(showMap());

  return (
    <FilterList mapState={mapState} onShowMap={onShowMap} dateDiff={dateDiff} />
  );
});

export { FilterButtonContainer, FilterListContainer };
