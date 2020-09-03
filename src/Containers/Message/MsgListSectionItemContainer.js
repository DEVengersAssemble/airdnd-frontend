import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionItem from '../../Components/Message/MsgListSectionItem';
import {
  allMsgList,
  hideMsgList,
  unreadMsgList,
  showMsgDetailSection,
} from '../../Modules/message';

const MsgListSectionItemContainer = ({ msg, index }) => {
  // redux
  const { activeIndex } = useSelector(state => state.message);
  const dispatch = useDispatch();

  // variable
  const { hostname } = msg;
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
  const onClickActive = useCallback(() => {
    if (msg.state === 'all') {
      dispatch(allMsgList(index));
      dispatch(showMsgDetailSection());
    }
    if (msg.state === 'hide') {
      dispatch(hideMsgList(index));
      dispatch(showMsgDetailSection());
    }
    if (msg.state === 'unread') {
      dispatch(unreadMsgList(index));
      dispatch(showMsgDetailSection());
    }
  }, [dispatch, index, msg]);

  return (
    <MsgListSectionItem
      index={index}
      activeIndex={activeIndex}
      hostname={hostname}
      hostProfileImg={hostProfileImg}
      lastMsg={lastMsg}
      lm={lm}
      ci={ci}
      co={co}
      isCanceled={isCanceled}
      onClickActive={onClickActive}
    />
  );
};

export default MsgListSectionItemContainer;
