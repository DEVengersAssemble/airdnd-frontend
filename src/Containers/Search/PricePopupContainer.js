import React, { useEffect, useRef, useState } from 'react';
import { PricePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, setFilter, resetFilter } from '../../Modules/search';

// let prevFilter = {};

const PricePopupContainer = ({ popupState, onClose }) => {
  const { min, max } = useSelector(state => state.search.filterApplied.price);
  const { priceArray, averagePrice } = useSelector(state => state.data.search);
  const [range, setRange] = useState({ value: [min, max] });
  const isDisabled = min === 12000 && max === 1000000;
  const regExp = /^\d{0,7}$/;

  const dispatch = useDispatch();
  const onHandler = e => {
    setRange({ value: e });
    dispatch(setFilter('price', { min: e[0], max: e[1] }));
  };
  const onSetRange = () => setRange({ value: [min, max] });
  const onChangeMinPrice = ({ target }) => {
    if (!regExp.test(+target.value)) return;
    dispatch(setFilter('price', { min: +target.value, max }));
  };
  const onChangeMaxPrice = ({ target }) => {
    if (!regExp.test(+target.value)) return;
    dispatch(setFilter('price', { min, max: +target.value }));
  };
  const onReset = () => {
    setRange({ value: [12000, 1000000] });
    dispatch(resetFilter('price'));
  };
  const onSave = () => dispatch(saveFilter('price', { min, max }, isDisabled));

  const track = document.querySelector('.rc-slider-track');
  const rangeBar = document.querySelector('.rc-slider');
  const trackPos = track && track.getBoundingClientRect();
  const rangePos = rangeBar && rangeBar.getBoundingClientRect();

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;
    // dispatch(saveFilter('price'), prevFilter);
    onClose('price');
  };

  useEffect(() => {
    // prevFilter = { min, max };
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
        left={trackPos && trackPos.left}
        right={trackPos && trackPos.right}
        start={rangePos && rangePos.left}
        end={rangePos && rangePos.right}
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

export default PricePopupContainer;
