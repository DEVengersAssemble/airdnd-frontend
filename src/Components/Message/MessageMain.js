import React from 'react';
import styled from 'styled-components';
import MessageListSection from './MessageListSection';
import MessageSection from './MessageSection';
import MessageDetailSection from './MessageDetailSection';

const MessageMain = () => {
  return (
    <MessageMainWrapper>
      <MessageListSection />
      <MessageSection />
      <MessageDetailSection />
    </MessageMainWrapper>
  );
};

const MessageMainWrapper = styled.div`
  display: flex;
  padding-top: 8rem;
`;

export default MessageMain;
