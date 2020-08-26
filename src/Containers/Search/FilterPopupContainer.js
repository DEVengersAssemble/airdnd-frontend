import React, { useEffect, useRef } from 'react';
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
  const dispatch = useDispatch();

  const onChangeMinPrice = ({ target }) =>
    dispatch(setFilter('price', { min: target.value, max }));
  const onChangeMaxPrice = ({ target }) =>
    dispatch(setFilter('price', { min, max: target.value }));
  const onReset = () => dispatch(resetFilter('price'));
  const onSave = () => dispatch(saveFilter('price', { min, max }));
  const isDisabled = min === 12000 && max === 1000000;

  const rangeBarRef = useRef();
  const minHandlerRef = useRef();
  const maxHandlerRef = useRef();
  let initialMin = 289.90625;
  let initialMax = 677.90625;
  let width = 388;
  let minPos = 0;
  let maxPos = 0;

  const onDrag = e => {
    const { left, right, width } = rangeBarRef.current.getBoundingClientRect();
  };
  const allowDrop = e => e.preventDefault();
  const onDrop = e => {
    console.log('isDropped');
    e.preventDefault();
    const data = e.dataTransfer.getData('button');
  };

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
        refs={{ rangeBarRef, minHandlerRef, maxHandlerRef }}
        onChangeMinPrice={onChangeMinPrice}
        onChangeMaxPrice={onChangeMaxPrice}
        onSave={onSave}
        onReset={onReset}
        onDrag={onDrag}
        onDrop={onDrop}
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
