import React from 'react';
import MsgDetailSectionHeader from '../../Components/Message/MsgDetailSectionHeader';
import { useDispatch } from 'react-redux';
import { hideMsgDetailSection } from '../../Modules/message';

const MsgDetailSectionHeaderContainer = ({ msgDetailSectionState }) => {
  const dispatch = useDispatch();
  // create button onClick handler
  const onCloseSection = () => {
    console.log('디테일섹션 닫기버튼 클릭되고있음!!');
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
