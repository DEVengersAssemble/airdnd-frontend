import React from 'react';
import MsgListSectionItem from '../../Components/Message/MsgListSectionItem';

const MsgListSectionItemContainer = ({ msg }) => {
  console.log('item container', msg);

  return <MsgListSectionItem />;
};

export default MsgListSectionItemContainer;
