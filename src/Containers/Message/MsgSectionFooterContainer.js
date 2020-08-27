import React from 'react';
import MsgSectionFooter from '../../Components/Message/MsgSectionFooter';

const MsgSectionFooterContainer = ({ msgSectionStates }) => {
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;

  return (
    <MsgSectionFooter
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    />
  );
};

export default MsgSectionFooterContainer;
