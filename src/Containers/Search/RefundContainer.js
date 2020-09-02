import React from 'react';
import Refund from '../../Components/Search/Refund';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Modules/search';

const RefundContainer = () => {
  const { refund } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();
  const onToggle = () => dispatch(setFilter('refund', !refund));
  return <Refund handleClick={onToggle} toggle={refund} />;
};

export default RefundContainer;
