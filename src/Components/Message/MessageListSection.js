import React from 'react';
import styled, { css } from 'styled-components';
import MsgListSectionHeader from './MsgListSectionHeader';
import MsgListSectionMain from './MsgListSectionMain';

const MessageListSection = ({ msgSectionStates }) => {
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;
  return (
    <MessageListSectionWrapper
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    >
      <MsgListSectionHeader />
      <MsgListSectionMain />
    </MessageListSectionWrapper>
  );
};

const MessageListSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 37.5rem;

  ${({ msgListSectionState }) =>
    msgListSectionState &&
    css`
      opacity: 1;
      min-width: 37.5rem;
    `}

  @media ${({ theme }) => theme.size.medium} {
    display: none;

    ${({ msgDetailSectionState }) =>
      !msgDetailSectionState &&
      css`
        display: flex;
      `}
  }
`;

export default MessageListSection;
