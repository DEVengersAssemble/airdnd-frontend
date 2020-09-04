import React, { useEffect, useRef, useState } from 'react';
import { PricePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveFilter, resetFilter, closePopup } from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import { updateQuery } from '../../lib/searchUtils';
import qs from 'qs';

const PricePopupContainer = () => {
  const { filterApplied, popupState } = useSelector(state => state.search);
  const { priceMin: min, priceMax: max } = filterApplied;
  const [range, setRange] = useState({ value: [min, max] });
  const isDisabled = min === 12000 && max === 1000000;
  const popupRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const queryObj = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const onClose = () => dispatch(closePopup('price'));
  const onReset = () => dispatch(resetFilter('price'));
  const onUnsave = () => dispatch(unsaveFilter('price'));

  const onClosePopup = ({ target }) => {
    if (!popupState.price || popupRef.current.contains(target)) return;

    if (isDisabled) {
      const { priceMin, priceMax, ...newQueryObj } = queryObj;
      history.replace(`/search?${qs.stringify(newQueryObj)}`);
    } else {
      const newQueryObj = { ...queryObj, priceMin: min, priceMax: max };
      history.replace(`/search?${qs.stringify(newQueryObj)}`);
    }

    onUnsave();
  };

  useEffect(() => {
    document.addEventListener('click', onClosePopup);
    return () => {
      document.removeEventListener('click', onClosePopup);
    };
  }, [onClosePopup]);

  return (
    <div ref={popupRef}>
      <PricePopup
        popupState={popupState.price}
        isDisabled={isDisabled}
        range={range}
        setRange={setRange}
        onSave={onClose}
        onReset={onReset}
      />
    </div>
  );
};

export default React.memo(PricePopupContainer);
