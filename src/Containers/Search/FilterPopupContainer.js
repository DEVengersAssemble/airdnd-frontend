import React, { useEffect, useRef } from 'react';
import {
  RefundPopup,
  RoomTypePopup,
  PricePopup,
  SetDatePopup,
} from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, setFilter, resetFilter } from '../../Modules/search';

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
      <RefundPopup
        toggle={refund}
        popupState={popupState}
        isDisabled={isDisabled}
        onSave={onSave}
        onClose={onClose}
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
  const { priceFrom, priceTo } = useSelector(
    state => state.search.filterApplied.price,
  );
  const { priceArray, averagePrice } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const onChangePriceFrom = ({ target }) =>
    dispatch(setFilter('price', { priceFrom: target.value, priceTo }));
  const onChangePriceTo = ({ target }) =>
    dispatch(setFilter('price', { priceFrom, priceTo: target.value }));
  const onReset = () => dispatch(resetFilter('price'));
  const onSave = () => dispatch(saveFilter('price', { priceFrom, priceTo }));
  const isDisabled = priceFrom === 12000 && priceTo === 1000000;

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
      <PricePopup
        popupState={popupState}
        isDisabled={isDisabled}
        priceArray={priceArray}
        averagePrice={averagePrice}
        priceFrom={priceFrom}
        priceTo={priceTo}
        onChangePriceFrom={onChangePriceFrom}
        onChangePriceTo={onChangePriceTo}
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
