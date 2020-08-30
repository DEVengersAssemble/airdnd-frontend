import React from 'react';
import MsgListSectionItem from '../../Components/Message/MsgListSectionItem';

const MsgListSectionItemContainer = ({ msg }) => {
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
  const onClickActive = ({ target }) => {
    console.dir(target);
  };
  return (
    <MsgListSectionItem
      isActive={isActive}
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
