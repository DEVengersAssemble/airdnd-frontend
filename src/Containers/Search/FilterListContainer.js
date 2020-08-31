import React, { Children, cloneElement } from 'react';
import { FilterList, FilterButton } from '../../Components/Search/FilterList';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup, openPopup, showMap } from '../../Modules/search';

const FilterButtonContainer = ({ name, text, children }) => {
  const { popup } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const onClose = name => dispatch(closePopup(name));
  const onClick = () =>
    dispatch(popup[name] ? closePopup(name) : openPopup(name));

  return (
    <FilterButton text={text} onClick={onClick}>
      {Children.map(children, child => {
        return cloneElement(child, {
          popupState: popup[name],
          onClose,
        });
      })}
    </FilterButton>
  );
};

const FilterListContainer = ({ mapState }) => {
  const { dateDiff } = useSelector(state => state.searchForm);
  const dispatch = useDispatch();
  const onShowMap = () => dispatch(showMap());

  return (
    <FilterList mapState={mapState} onShowMap={onShowMap} dateDiff={dateDiff} />
  );
};

export { FilterButtonContainer, FilterListContainer };
