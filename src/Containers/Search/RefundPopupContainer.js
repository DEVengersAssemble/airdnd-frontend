import React, { useEffect, useRef } from 'react';
import { RefundPopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, resetFilter } from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import { updateQuery } from '../../lib/searchUtils';
import qs from 'qs';

const RefundPopupContainer = ({ popupState, onClose }) => {
  const { refund } = useSelector(state => state.search.filterApplied);
  const isDisabled = !refund;
  const history = useHistory();
  const { search } = useLocation();
  const queryObj = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const dispatch = useDispatch();
  const onReset = () => dispatch(resetFilter('refund'));
  const onSave = () => dispatch(saveFilter('refund', refund, isDisabled));

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (
      !popupState ||
      popup.current.contains(target) ||
      target.nodeName === 'svg' ||
      target.nodeName === 'path'
    )
      return;

    if (isDisabled) {
      const { refund, ...newQueryObj } = queryObj;
      history.replace(`/search${qs.stringify(newQueryObj)}`);
    } else {
      const newQueryObj = { ...queryObj, refund };
      history.replace(`/search?${qs.stringify(newQueryObj)}`);
    }
    onClose('refund', isDisabled);
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
        popupState={popupState}
        isDisabled={isDisabled}
        onSave={onSave}
        onReset={onReset}
      />
    </div>
  );
};

export default React.memo(RefundPopupContainer);
