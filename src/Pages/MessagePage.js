import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ChatHeader from '../Components/Message/ChatHeader';
import ChatMain from '../Components/Message/ChatMain';
import MessageHeader from '../Components/Message/MessageHeader';
import MessageMain from '../Components/Message/MessageMain';
import DetailHeader from '../Components/Message/DetailHeader';
import DetailContents from '../Components/Message/DetailContents';

const MessagePage = () => {
  return (
    <MessagePageWrapper>
      <Header>Temp Header</Header>
      <MessageMainWrapper>
        <Chatting>
          <ChatHeader />
          <ChatMain />
        </Chatting>
        <Message>
          <MessageHeader />
          <MessageMain />
        </Message>
        <Detail>
          <DetailHeader />
          <DetailContents />
        </Detail>
      </MessageMainWrapper>
    </MessagePageWrapper>
  );
};

const MessagePageWrapper = styled.div``;

const Header = styled.div`
  background: ${theme.main};
  height: 8rem;
`;

const MessageMainWrapper = styled.div`
  display: flex;
`;

const Chatting = styled.div`
  background: ${theme.deepGreen};
  min-width: 37.5rem;
  width: 37.5rem;
`;

const Message = styled.div`
  background: ${theme.gray};
  flex-grow: 1;
`;

const Detail = styled.div`
  background: ${theme.darkRed};
  min-width: 37.5rem;
  width: 37.5rem;
`;

export default MessagePage;
