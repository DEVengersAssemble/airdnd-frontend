import React, { useEffect, useState, useRef } from 'react';
import {
  RefundPopup,
  RoomTypePopup,
  PricePopup,
  SetDatePopup,
} from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter } from '../../Modules/search';

const RefundPopupContainer = ({ popupState, size, onClose }) => {
  const { refund } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(refund);
  const handleClick = () => setToggle(!toggle);
  const onReset = state => setToggle(state);

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose();
    onReset(refund);
  };

  console.log('refund', refund);
  console.log('toggle', toggle);

  const onSave = () => {
    dispatch(saveFilter('refund', toggle));
    onClose();
    console.log('===========saved');
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
        size={size}
        toggle={toggle}
        popupState={popupState}
        onSave={onSave}
        onClose={onClose}
        onReset={onReset}
        handleClick={handleClick}
      />
    </div>
  );
};

const RoomTypePopupContainer = ({ popupState, size, onClose }) => {
  const { roomType } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();

  console.log(roomType);

  const [check, setCheck] = useState(roomType);
  const onChange = type => setCheck({ ...check, [type]: !check[type] });
  const onReset = state => {
    setCheck(state || { house: false, private: false, shared: false });
  };

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose();
    onReset(roomType);
  };

  const onSave = () => {
    dispatch(saveFilter('roomType', check));
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
        size={size}
        check={check}
        popupState={popupState}
        onClose={onClose}
        onSave={onSave}
        onChange={onChange}
        onReset={onReset}
      />
    </div>
  );
};

const PricePopupContainer = ({ popupState, size, onClose }) => {
  const { price } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();

  const [priceFrom, setPriceFrom] = useState(price.priceFrom);
  const [priceTo, setPriceTo] = useState(price.priceTo);
  const onChangePriceFrom = ({ target }) => setPriceFrom(target.value);
  const onChangePriceTo = ({ target }) => setPriceTo(target.value);
  const onReset = () => {
    setPriceFrom(12000);
    setPriceTo(1000000);
  };

  const { priceArray, averagePrice } = useSelector(state => state.search);
  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    onClose();
    onReset();
  };

  const onSave = () => {
    dispatch(saveFilter('price', { priceFrom, priceTo }));
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
        size={size}
        popupState={popupState}
        priceArray={priceArray}
        averagePrice={averagePrice}
        priceFrom={priceFrom}
        onChangePriceFrom={onChangePriceFrom}
        onChangePriceTo={onChangePriceTo}
        priceTo={priceTo}
        onSave={onSave}
        onClose={onClose}
        onReset={onReset}
      />
    </div>
  );
};

const SetDatePopupContainer = ({ popupState, size, onClose }) => {
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
      <SetDatePopup popupState={popupState} onClose={onClose} size={size} />
    </div>
  );
};

export {
  RefundPopupContainer,
  RoomTypePopupContainer,
  PricePopupContainer,
  SetDatePopupContainer,
};
