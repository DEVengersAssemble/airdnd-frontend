import React from 'react';
import MsgSectionHeader from '../../Components/Message/MsgSectionHeader';
import { useDispatch } from 'react-redux';
import {
  hideMsgDetailSection,
  showMsgDetailSection,
} from '../../Modules/message';

const MsgSectionHeaderContainer = ({ msgSectionStates }) => {
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;
  const dispatch = useDispatch();
  const onToggleDetail = () => {
    msgDetailSectionState
      ? dispatch(hideMsgDetailSection())
      : dispatch(showMsgDetailSection());
  };

  return (
    <MsgSectionHeader
      msgSectionStates={msgSectionStates}
      onToggleDetail={onToggleDetail}
    />
  );
};

export default MsgSectionHeaderContainer;
