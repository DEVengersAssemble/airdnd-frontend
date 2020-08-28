import React from 'react';
import styled, { css } from 'styled-components';
import MsgSectionHeaderContainer from '../../Containers/Message/MsgSectionHeaderContainer';
import MsgSectionMainContainer from '../../Containers/Message/MsgSectionMainContainer';
import MsgSectionFooterContainer from '../../Containers/Message/MsgSectionFooterContainer';

const MessageSection = ({ msgSectionStates }) => {
  const { msgDetailSectionState, msgListSectionState } = msgSectionStates;

  return (
    <MessageSectionWrapper
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    >
      <MsgSectionHeaderContainer msgSectionStates={msgSectionStates} />
      <MsgSectionMainContainer />
      <MsgSectionFooterContainer />
    </MessageSectionWrapper>
  );
};

const MessageSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  @media ${({ theme }) => theme.size.large} {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    min-width: 37.5rem;

    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: linear;

<<<<<<< HEAD
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in;

  ${({ msgDetailSectionState }) =>
    !msgDetailSectionState &&
    css`
      min-width: calc(100% - 37.5rem);
      /* align-items: stretch; */
    `}
=======
    ${({ msgDetailSectionState }) =>
      !msgDetailSectionState &&
      css`
        min-width: calc(100% - 37.5rem);
      `}
  }

  @media ${({ theme }) => theme.size.medium} {
    min-width: calc(100% - 37.5rem);
  }
>>>>>>> 42d83ee681a2e6ade0fd2cb3c60ed097967268b5
`;

export default MessageSection;
