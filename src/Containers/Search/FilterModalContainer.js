import React, { useEffect, useState } from 'react';
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
  const seeInit = {
    conveninence: false,
    facility: false,
    hostLang: false,
  };
  const [seemore, setSeemore] = useState({ seeInit });
  const onSeemore = name => setSeemore({ ...seeInit, [name]: !seemore[name] });
  const { popup, data, filterApplied, viewState } = useSelector(
    state => state.search,
  );
  const { filterCondition } = data && data;
  const { min, max } = filterApplied.price;
  const [range, setRange] = useState({ value: [min, max] });
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
      viewState={viewState}
      range={range}
      filterCondition={filterCondition}
      filter={filterApplied}
      // onClose={onUnsave}
      seemore={seemore}
      setRange={setRange}
      onSeemore={onSeemore}
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

export default React.memo(FilterModalContainer);
