import React, { useEffect, useRef } from 'react';
import { RefundPopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveFilter, resetFilter, closePopup } from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';

const RefundPopupContainer = () => {
  const { filterApplied, popupState } = useSelector(state => state.search);
  const { refund } = filterApplied;
  const isDisabled = !refund;
  const history = useHistory();
  const popupRef = useRef();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const queryObj = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const onClose = () => dispatch(closePopup('refund'));
  const onReset = () => dispatch(resetFilter('refund'));
  const onUnsave = () => dispatch(unsaveFilter('refund'));

  const onClosePopup = ({ target }) => {
    if (
      !popupState.refund ||
      popupRef.current.contains(target) ||
      target.nodeName === 'svg' ||
      target.nodeName === 'path'
    )
      return;

    if (isDisabled) {
      const { refund, ...newQueryObj } = queryObj;
      history.replace(`/search?${qs.stringify(newQueryObj)}`);
    } else {
      const newQueryObj = { ...queryObj, refund };
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
      <RefundPopup
        popupState={popupState.refund}
        isDisabled={isDisabled}
        onSave={onClose}
        onReset={onReset}
      />
    </div>
  );
};

export default React.memo(RefundPopupContainer);
