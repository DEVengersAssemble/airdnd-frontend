import React from 'react';
import styled, { css } from 'styled-components';
import MsgListSectionHeaderContainer from '../../Containers/Message/MsgListSectionHeaderContainer';
import MsgListSectionMainContainer from '../../Containers/Message/MsgListSectionMainContainer';

const MessageListSection = ({ myRef, msgSectionStates }) => {
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;

  return (
    <MessageListSectionWrapper
      ref={myRef}
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    >
      <MsgListSectionHeaderContainer />
      <MsgListSectionMainContainer />
    </MessageListSectionWrapper>
  );
};

const MessageListSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 37.5rem;

  /* ${({ msgListSectionState }) =>
    msgListSectionState &&
    css`
      min-width: 37.5rem;
    `} */

  /* @media ${({ theme }) => theme.size.medium} {
    display: none;

    ${({ msgDetailSectionState }) =>
      !msgDetailSectionState &&
      css`
        display: flex;
      `}
  } */
`;

export default MessageListSection;
