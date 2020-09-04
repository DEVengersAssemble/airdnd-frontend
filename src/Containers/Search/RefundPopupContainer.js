import React, { useEffect, useRef } from 'react';
import { RefundPopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, resetFilter } from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import { updateQuery } from '../../lib/searchUtils';

// let prevFilter = {};

const RefundPopupContainer = ({ popupState, onClose }) => {
  const { refund } = useSelector(state => state.search.filterApplied);
  const isDisabled = !refund;
  const history = useHistory();
  const { search: query } = useLocation();
  const dispatch = useDispatch();
  const filterQuery = '&refund?1';

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
    // dispatch(saveFilter('refund'), prevFilter);

    updateQuery(history, isDisabled, query, filterQuery);
    onClose('refund', isDisabled);
  };

  useEffect(() => {
    // prevFilter = refund;
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
