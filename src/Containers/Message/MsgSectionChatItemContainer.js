import React from 'react';
import { useSelector } from 'react-redux';
import MsgSectionChatItem from '../../Components/Message/MsgSectionChatItem';

const MsgSectionChatItemContainer = ({ activeMsg, chat }) => {
  const profileImg = useSelector(state => state.message.profileImg);
  const { name, timeStamp, text } = chat;
  const chatDate = new Date(timeStamp);
  const hour = chatDate.getHours();
  const m = chatDate.getMinutes();
  const h = hour >= 12 ? `오후 ${hour - 12}` : `오전 ${hour}`;
  const host = chat.name !== 'Jay' && true;

  return (
    <MsgSectionChatItem
      hostname={activeMsg && activeMsg.hostname}
      hostProfileImg={activeMsg && activeMsg.contents.hostProfileImg}
      profileImg={profileImg}
      name={name}
      text={text}
      isHost={host}
      h={h}
      m={m}
    />
  );
};

export default MsgSectionChatItemContainer;
