import React from 'react';
import styled from 'styled-components';
import MessageListSectionContainer from '../../Containers/Message/MessageListSectionContainer';
import MessageDetailSectionContainer from '../../Containers/Message/MessageDetailSectionContainer';
import MessageSectionContainer from '../../Containers/Message/MessageSectionContainer';

const MessageMain = () => {
  return (
    <MessageMainWrapper>
      <MessageListSectionContainer />
      <MessageSectionContainer />
      <MessageDetailSectionContainer />
    </MessageMainWrapper>
  );
};

const MessageMainWrapper = styled.div`
  display: flex;
  padding-top: 8rem;
  overflow-x: hidden;
`;

export default MessageMain;
