import React, { useState } from 'react';
import FilterModal from '../../Components/Search/FilterModal';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter } from '../../Modules/search';

const FilterModalContainer = ({ popupState, onClose }) => {
  const { filterCondition, filterApplied } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState(filterApplied.more);
  const onToggle = name => setFilter({ ...filter, [name]: !filter[name] });
  const onIncrease = name => {
    if (filter.bedroom[name] > 15) return;
    setFilter({
      ...filter,
      bedroom: { ...filter.bedroom, [name]: filter.bedroom[name] + 1 },
    });
  };
  const onDecrease = name => {
    if (!filter.bedroom[name]) return;
    setFilter({
      ...filter,
      bedroom: { ...filter.bedroom, [name]: filter.bedroom[name] - 1 },
    });
  };

  const onReset = () => setFilter();
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
      onToggle={onToggle}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default FilterModalContainer;
