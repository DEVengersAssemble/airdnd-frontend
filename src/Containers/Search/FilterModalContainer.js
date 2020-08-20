import React, { useState } from 'react';
import FilterModal from '../../Components/Search/FilterModal';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter } from '../../Modules/search';

const FilterModalContainer = ({ popupState, onClose }) => {
  const { filterCondition, filterApplied } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState(filterApplied.more);

  const onSave = () => {
    dispatch(saveFilter('more', filter));
    onClose();
  };
  return (
    <FilterModal
      popupState={popupState}
      filterCondition={filterCondition}
      filter={filter}
      onSave={onSave}
      onClose={onClose}
    />
  );
};

export default FilterModalContainer;
