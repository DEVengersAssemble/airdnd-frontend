import React, { useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Airbnb } from '@styled-icons/boxicons-logos/Airbnb';
import theme from '../style/theme';
import ChatHeader from '../Components/Message/ChatHeader';
import ChatMain from '../Components/Message/ChatMain';
import MessageHeader from '../Components/Message/MessageHeader';
import MessageMain from '../Components/Message/MessageMain';
import DetailHeader from '../Components/Message/DetailHeader';
import DetailContents from '../Components/Message/DetailContents';
import DetailCanceledContents from '../Components/Message/DetailCanceledContents';

const MessagePage = () => {
  const [canceled, setCanceled] = useState(true);
  console.log(setCanceled);
  return (
    <MessagePageWrapper>
      <Header>
        <Airbnb size="4.5rem" />
      </Header>
      <MessageMainWrapper>
        <ChattingWrapper>
          <ChatHeader />
          <ChatMain />
        </ChattingWrapper>
        <MessageWrapper>
          <MessageHeader />
          <MessageMain />
        </MessageWrapper>
        <DetailWrapper>
          <DetailHeader />
          {canceled ? <DetailContents /> : <DetailCanceledContents />}
        </DetailWrapper>
      </MessageMainWrapper>
    </MessagePageWrapper>
  );
};

const MessagePageWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${darken(0.1, theme.lightGray)};
  box-shadow: 1px 0 0.4rem ${theme.shadow};
  padding-left: 2rem;
  color: ${theme.main};
  height: 8rem;
`;

const MessageMainWrapper = styled.div`
  display: flex;
`;

const ChattingWrapper = styled.div`
  border-right: 1px solid ${darken(0.1, theme.lightGray)};
  height: calc(100vh - 8rem);
  min-width: 37.5rem;
  width: 37.5rem;
`;

const MessageWrapper = styled.div`
  flex-grow: 1;
`;

const DetailWrapper = styled.div`
  border-left: 1px solid ${darken(0.1, theme.lightGray)};
  height: calc(100vh - 8rem);
  min-width: 37.5rem;
  width: 37.5rem;
`;

export default MessagePage;
