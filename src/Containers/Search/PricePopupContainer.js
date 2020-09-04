import React, { useEffect, useRef, useState } from 'react';
import { PricePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveFilter, resetFilter, closePopup } from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import { updateQuery } from '../../lib/searchUtils';
import qs from 'qs';

const PricePopupContainer = () => {
  const { filterApplied, popupState } = useSelector(state => state.search);
  const { priceMin, priceMax } = filterApplied;
  const [range, setRange] = useState({ value: [priceMin, priceMax] });
  const isDisabled = priceMin === 12000 && priceMax === 1000000;
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const queryObj = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const onSave = () => dispatch(closePopup('price'));
  const onReset = () => dispatch(resetFilter('price'));
  const onClose = () => dispatch(unsaveFilter());
  // const popup = useRef();
  // const closePopup = ({ target }) => {
  //   if (!popupState || popup.current.contains(target)) return;

  //   if (isDisabled) {
  //     const { priceMin, priceMax, ...newQueryObj } = queryObj;
  //     history.replace(`/search?${qs.stringify(newQueryObj)}`);
  //   } else {
  //     const newQueryObj = { ...queryObj, priceMin: min, priceMax: max };
  //     history.replace(`/search?${qs.stringify(newQueryObj)}`);
  //   }

  //   onClose('price', isDisabled);
  // };

  // useEffect(() => {
  //   document.addEventListener('click', closePopup);
  //   return () => {
  //     document.removeEventListener('click', closePopup);
  //   };
  // }, [closePopup]);

  return (
    // <div ref={popup}>
    <PricePopup
      popupState={popupState.price}
      isDisabled={isDisabled}
      range={range}
      setRange={setRange}
      onSave={onSave}
      onReset={onReset}
    />
    // </div>
  );
};

export default React.memo(PricePopupContainer);
