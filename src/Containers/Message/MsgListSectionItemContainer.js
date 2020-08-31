import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionItem from '../../Components/Message/MsgListSectionItem';
import { allMsgList, hideMsgList, unreadMsgList } from '../../Modules/message';

const MsgListSectionItemContainer = ({ msg, index }) => {
  // redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  const dispatch = useDispatch();
  // console.log(msg);
  // console.log('아이템 컨테이너 activeIndex', activeIndex);
  // console.log('아이템 컨테이너 filteredMsgs index', index);

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
    // 아이템에 클릭 이벤트 발생시 dispatch(SHOW_MESSAGE action);
    console.log('filteredMsgs.state', filteredMsgs[activeIndex].state);
    filteredMsgs[activeIndex].state === 'all' &&
      activeIndex !== index &&
      dispatch(allMsgList(index));
    filteredMsgs[activeIndex].state === 'hide' &&
      activeIndex !== index &&
      dispatch(allMsgList(index));
    !filteredMsgs[activeIndex].isRead &&
      activeIndex !== index &&
      dispatch(allMsgList(index));
    // dispatch(hideMsgList(index));
    // dispatch(unreadMsgList(index));
  }, [dispatch]);

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
