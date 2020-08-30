import React from 'react';
import MsgDetailSectionHeader from '../../Components/Message/MsgDetailSectionHeader';
import { useDispatch } from 'react-redux';
import { hideMsgDetailSection } from '../../Modules/message';

const MsgDetailSectionHeaderContainer = ({ msgDetailSectionState }) => {
  const dispatch = useDispatch();
  const onCloseSection = () => {
    dispatch(hideMsgDetailSection());
  };

  return (
    <MsgDetailSectionHeader
      onCloseSection={onCloseSection}
      msgDetailSectionState={msgDetailSectionState}
    />
  );
};

export default MsgDetailSectionHeaderContainer;
