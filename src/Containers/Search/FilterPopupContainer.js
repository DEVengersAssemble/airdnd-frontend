import React, { useEffect, useRef, useState } from 'react';
import {
  RefundPopup,
  RoomTypePopup,
  PricePopup,
  SetDatePopup,
} from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, setFilter, resetFilter } from '../../Modules/search';

let prevFilter = {};

const RefundPopupContainer = ({ popupState, onClose }) => {
  const { refund } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();

  const onToggle = () => dispatch(setFilter('refund', !refund));
  const onReset = () => dispatch(resetFilter('refund'));
  const onSave = () => dispatch(saveFilter('refund', refund));
  const isDisabled = !refund;

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    // dispatch(saveFilter('refund'), prevFilter);
    onClose();
  };

  useEffect(() => {
    prevFilter = refund;
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <RefundPopup
        toggle={refund}
        popupState={popupState}
        isDisabled={isDisabled}
        onSave={onSave}
        // onClose={onClose}
        onReset={onReset}
        handleClick={onToggle}
      />
    </div>
  );
};

const RoomTypePopupContainer = ({ popupState, onClose }) => {
  const { roomType } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();

  const onChange = type =>
    dispatch(setFilter('roomType', { ...roomType, [type]: !roomType[type] }));
  const onReset = () => dispatch(resetFilter('roomType'));
  const onSave = () => dispatch(saveFilter('roomType', roomType));
  const isDisabled =
    roomType && !roomType.house && !roomType.private && !roomType.shared;

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    // dispatch(saveFilter('roomType'), prevFilter);
    onClose();
  };

  useEffect(() => {
    prevFilter = { ...roomType };
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <RoomTypePopup
        check={roomType}
        popupState={popupState}
        isDisabled={isDisabled}
        onSave={onSave}
        onChange={onChange}
        onReset={onReset}
      />
    </div>
  );
};

const PricePopupContainer = ({ popupState, onClose }) => {
  const { min, max } = useSelector(state => state.search.filterApplied.price);
  const { priceArray, averagePrice } = useSelector(state => state.search);
  const [range, setRange] = useState({ value: [min, max] });
  const dispatch = useDispatch();

  const onHandler = e => {
    setRange({ value: e });
    dispatch(setFilter('price', { min: e[0], max: e[1] }));
  };
  const onSetRange = () => setRange({ value: [min, max] });
  const onChangeMinPrice = ({ target }) =>
    dispatch(setFilter('price', { min: +target.value, max }));
  const onChangeMaxPrice = ({ target }) =>
    dispatch(setFilter('price', { min, max: +target.value }));
  const onReset = () => dispatch(resetFilter('price'));
  const onSave = () => dispatch(saveFilter('price', { min, max }));
  const isDisabled = min === 12000 && max === 1000000;

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    // dispatch(saveFilter('price'), prevFilter);
    onClose();
  };

  useEffect(() => {
    prevFilter = { min, max };
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <PricePopup
        popupState={popupState}
        isDisabled={isDisabled}
        priceArray={priceArray}
        averagePrice={averagePrice}
        min={min}
        max={max}
        range={range}
        onHandler={onHandler}
        onSetRange={onSetRange}
        onChangeMinPrice={onChangeMinPrice}
        onChangeMaxPrice={onChangeMaxPrice}
        onSave={onSave}
        onReset={onReset}
      />
    </div>
  );
};

const SetDatePopupContainer = ({ popupState, onClose }) => {
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <SetDatePopup popupState={popupState} />
    </div>
  );
};

export {
  RefundPopupContainer,
  RoomTypePopupContainer,
  PricePopupContainer,
  SetDatePopupContainer,
};
