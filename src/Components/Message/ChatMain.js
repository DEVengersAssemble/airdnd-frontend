import React from 'react';
import styled from 'styled-components';
// import theme from '../../style/theme';
import ChatListItem from '../Message/ChatListItem';

const ChatMain = () => {
  return (
    <ChatMainWrapper>
      <ChatLists>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ChatLists>
    </ChatMainWrapper>
  );
};

const ChatMainWrapper = styled.div`
  padding: 1.2rem 1.4rem;
`;

const ChatLists = styled.ul`
  display: flex;
  flex-direction: column;
  & > li + li {
    margin-top: 2rem;
  }
`;

export default ChatMain;
