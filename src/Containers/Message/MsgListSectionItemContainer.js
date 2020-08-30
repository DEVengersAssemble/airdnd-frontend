import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionItem from '../../Components/Message/MsgListSectionItem';
import {
  activeMsgListItem,
  allMsgList,
  hideMsgList,
  unreadMsgList,
} from '../../Modules/message';

const MsgListSectionItemContainer = ({ msg }) => {
  // redux
  const filteredMsgs = useSelector(state => state.message.filteredMsgs);
  const dispatch = useDispatch();

  // hook
  const [checked, setChecked] = useState(false);

  // variable
  const { isActive, hostname } = msg;
  const {
    hostProfileImg,
    lastMsg,
    lastMsgDate,
    isCanceled,
    checkin,
    checkout,
  } = msg.contents;
  const lmDate = new Date(lastMsgDate);
  const ciDate = new Date(checkin);
  const coDate = new Date(checkout);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const lm = lmDate.toLocaleDateString('ko-KR', options);
  const ci = ciDate.toLocaleDateString('ko-KR', options);
  const co = coDate.toLocaleDateString('ko-KR', options);

  // event
  // target이 checked === true면 isActive false
  // const onClickActive = ({ target }) => {

  // };

  return (
    <MsgListSectionItem
      checked={checked}
      hostname={hostname}
      hostProfileImg={hostProfileImg}
      lastMsg={lastMsg}
      lm={lm}
      ci={ci}
      co={co}
      isCanceled={isCanceled}
      // onClickActive={onClickActive}
    />
  );
};

export default MsgListSectionItemContainer;
