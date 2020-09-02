import React from 'react';
import RoomType from '../../Components/Search/RoomType';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Modules/search';

const RoomTypeContainer = () => {
  const { roomType } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();

  const onChange = type =>
    dispatch(setFilter('roomType', { ...roomType, [type]: !roomType[type] }));

  return <RoomType check={roomType} onChange={onChange} />;
};

export default React.memo(RoomTypeContainer);
