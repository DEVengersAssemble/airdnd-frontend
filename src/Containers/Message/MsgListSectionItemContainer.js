import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionItem from '../../Components/Message/MsgListSectionItem';
import { showMsgDetailSection, setActiveId } from '../../Modules/message';

const MsgListSectionItemContainer = ({ msg, index }) => {
  // redux
  const { activeIndex, activeId, msgDetailSectionState } = useSelector(
    state => state.message,
  );
  const dispatch = useDispatch();

  // variable
  const { hostname, id } = msg;
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
  const onClickList = () => {
    // id에 맞는 메시지를 가져와야함...... 시발 어떻게 하지
    dispatch(setActiveId(id));
    !msgDetailSectionState && dispatch(showMsgDetailSection());
  };

  return (
    <MsgListSectionItem
      hostname={hostname}
      hostProfileImg={hostProfileImg}
      lastMsg={lastMsg}
      lm={lm}
      ci={ci}
      co={co}
      isCanceled={isCanceled}
      onClickList={onClickList}
      id={id}
      activeId={activeId}
    />
  );
};

export default MsgListSectionItemContainer;
