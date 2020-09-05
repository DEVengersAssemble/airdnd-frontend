import React, { useState } from 'react';
import FilterModal from '../../Components/Search/FilterModal';
import { useSelector, useDispatch } from 'react-redux';
import {
  applyToggleFilter,
  applyCounterFilter,
  applyCheckFilter,
  resetModalFilter,
  closePopup,
  modalFilterInit,
} from '../../Modules/search';
import _ from 'lodash';

const seeInit = {
  conveninence: false,
  facility: false,
  hostLang: false,
};

const FilterModalContainer = () => {
  const [seemore, setSeemore] = useState({ seeInit });
  const onSeemore = name => setSeemore({ ...seeInit, [name]: !seemore[name] });

  const { filterCondition } = useSelector(state => state.search.data);
  const { popupState, filterApplied, viewState } = useSelector(
    state => state.search,
  );

  const {
    instantBooking,
    bedroom,
    convenience,
    convenienceList,
    facilityList,
    hostLangList,
  } = filterApplied;

  const current = {
    instantBooking,
    bedroom,
    convenience,
    convenienceList,
    facilityList,
    hostLangList,
  };

  const isDisabled = _.isEqual(current, modalFilterInit(filterCondition));

  const { priceMin: min, priceMax: max } = filterApplied;
  const [range, setRange] = useState({ value: [min, max] });

  const dispatch = useDispatch();
  const onClose = () => dispatch(closePopup('modal', !isDisabled));
  const onToggle = (name, value) => dispatch(applyToggleFilter(name, value));
  const onCounter = (name, value) => dispatch(applyCounterFilter(name, value));
  const onCheck = (list, name, value) =>
    dispatch(applyCheckFilter(list, name, value));
  const onReset = () => dispatch(resetModalFilter());

  return (
    <FilterModal
      popupState={popupState.modal}
      viewState={viewState}
      range={range}
      filterCondition={filterCondition}
      filter={filterApplied}
      seemore={seemore}
      setRange={setRange}
      onSeemore={onSeemore}
      onClose={onClose}
      onSave={onClose}
      onCheck={onCheck}
      onReset={onReset}
      onToggle={onToggle}
      onCounter={onCounter}
    />
  );
};

export default React.memo(FilterModalContainer);
