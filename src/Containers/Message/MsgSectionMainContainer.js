import React from 'react';
import MsgSectionMain from '../../Components/Message/MsgSectionMain';

const MsgSectionMainContainer = ({ msgSectionStates }) => {
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;

  return (
    <MsgSectionMain
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    />
  );
};

export default MsgSectionMainContainer;
