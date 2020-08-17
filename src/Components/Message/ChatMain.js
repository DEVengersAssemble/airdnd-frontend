import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
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
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ChatLists>
    </ChatMainWrapper>
  );
};

const ChatMainWrapper = styled.div`
  position: absolute;
  top: 15.5rem;
  left: 0rem;
  width: 37.5rem;
  min-width: 37.5rem;
  height: 100vh;
  max-height: calc(100vh - 15.5rem);
  border-right: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  padding: 1.2rem 1.4rem;
  overflow: scroll;
`;

const ChatLists = styled.ul`
  display: flex;
  flex-direction: column;
  & > li + li {
    margin-top: 0.5rem;
  }
`;

export default ChatMain;
