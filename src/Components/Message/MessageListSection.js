import React from 'react';
import styled, { css, keyframes } from 'styled-components';
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
  @media ${({ theme }) => theme.size.large} {
    display: flex;
    flex-direction: column;
    min-width: 37.5rem;

    ${({ msgListSectionState }) =>
      msgListSectionState &&
      css`
        transition-property: all;
        transition-duration: 0.4s;
        transition-timing-function: linear;
        opacity: 1;
        min-width: 37.5rem;
      `}
  }

  @media ${({ theme }) => theme.size.medium} {
    position: absolute;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    /* transition-property: all;
        transition-duration: 0.4s;
        transition-timing-function: linear; */

    ${({ msgDetailSectionState }) =>
      !msgDetailSectionState &&
      css`
        position: static;
        z-index: 0;
        opacity: 1;
        visibility: visible;
      `}
  }
`;

export default MessageListSection;
