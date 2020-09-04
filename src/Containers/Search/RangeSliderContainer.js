import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Modules/search';
import RangeSlider from '../../Components/Search/RangeSlider';

const RangeSliderContainer = ({ range, setRange, isModal }) => {
  const { priceMin: min, priceMax: max } = useSelector(
    state => state.search.filterApplied,
  );
  const { priceArray, averagePrice } = useSelector(state => state.search.data);
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

  const track = document.querySelector('.rc-slider-track');
  const rangeBar = document.querySelector('.rc-slider');
  const trackPos = track && track.getBoundingClientRect();
  const rangePos = rangeBar && rangeBar.getBoundingClientRect();

  return (
    <RangeSlider
      isModal={isModal}
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
    />
  );
};

export default React.memo(RangeSliderContainer);
