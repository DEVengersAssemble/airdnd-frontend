import React from 'react';
import styled, { css } from 'styled-components';
import MsgSectionHeaderContainer from '../../Containers/Message/MsgSectionHeaderContainer';
import MsgSectionMainContainer from '../../Containers/Message/MsgSectionMainContainer';
import MsgSectionFooterContainer from '../../Containers/Message/MsgSectionFooterContainer';

const MessageSection = ({ msgSectionStates }) => {
  const { msgDetailSectionState } = msgSectionStates;

  return (
    <MessageSectionWrapper msgDetailSectionState={msgDetailSectionState}>
      <MsgSectionHeaderContainer msgSectionStates={msgSectionStates} />
      <MsgSectionMainContainer />
      <MsgSectionFooterContainer />
    </MessageSectionWrapper>
  );
};

const MessageSectionWrapper = styled.section`
  @media ${({ theme }) => theme.size.large} {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    min-width: 37.5rem;

    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: linear;

    ${({ msgDetailSectionState }) =>
      !msgDetailSectionState &&
      css`
        min-width: calc(100% - 37.5rem);
      `}
  }

  @media ${({ theme }) => theme.size.medium} {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    min-width: 37.5rem;

    border: 1px solid red;
    min-width: calc(100% - 37.5rem);
  }
`;

export default MessageSection;
