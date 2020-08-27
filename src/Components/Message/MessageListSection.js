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
  ${({ msgListSectionState }) =>
    console.log(
      'false가 되면 List section slide로 사라지기!! 지금은:',
      msgListSectionState,
    )}
  display: flex;
  flex-direction: column;
`;

export default MessageListSection;
