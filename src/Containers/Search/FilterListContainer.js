import React, { Children, cloneElement } from 'react';
import { FilterList, FilterButton } from '../../Components/Search/FilterList';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup, openPopup } from '../../Modules/search';

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

const FilterListContainer = ({ mapState, onShowMap }) => {
  const { dateDiff } = useSelector(state => state.searchForm);

  return (
    <FilterList mapState={mapState} onShowMap={onShowMap} dateDiff={dateDiff} />
  );
};

export { FilterButtonContainer, FilterListContainer };
