import React from 'react';
import styled from 'styled-components';
import MsgListSectionHeader from './MsgListSectionHeader';
import MsgListSectionMain from './MsgListSectionMain';

const MessageListSection = ({ msgListSectionState }) => {
  return (
    <MessageListSectionWrapper msgListSectionState={msgListSectionState}>
      <MsgListSectionHeader />
      <MsgListSectionMain />
    </MessageListSectionWrapper>
  );
};

const MessageListSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export default MessageListSection;
