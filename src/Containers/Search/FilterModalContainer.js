import React, { useEffect } from 'react';
import FilterModal from '../../Components/Search/FilterModal';
import { useSelector, useDispatch } from 'react-redux';
import {
  applyToggleFilter,
  applyCounterFilter,
  applyCheckFilter,
  resetModalFilter,
  setModalFilter,
  closePopup,
} from '../../Modules/search';

let prevFilter = {};

const FilterModalContainer = () => {
  const { popup, data, filterApplied } = useSelector(state => state.search);
  const { filterCondition } = data;
  const dispatch = useDispatch();
  const onClose = () => dispatch(closePopup('modal'));
  const onToggle = (name, value) => dispatch(applyToggleFilter(name, value));
  const onIncrease = (name, value) => dispatch(applyCounterFilter(name, value));
  const onDecrease = (name, value) => dispatch(applyCounterFilter(name, value));
  const onCheck = (list, name, value) =>
    dispatch(applyCheckFilter(list, name, value));
  const onReset = () => dispatch(resetModalFilter());
  const onUnsave = () => dispatch(setModalFilter(prevFilter));
  const onSave = () => onClose();

  useEffect(() => {
    prevFilter = { ...filterApplied };
  }, []);

  return (
    <FilterModal
      popupState={popup.modal}
      filterCondition={filterCondition}
      filter={filterApplied}
      // onClose={onUnsave}
      onClose={onClose}
      onSave={onSave}
      onCheck={onCheck}
      onReset={onReset}
      onToggle={onToggle}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default FilterModalContainer;
