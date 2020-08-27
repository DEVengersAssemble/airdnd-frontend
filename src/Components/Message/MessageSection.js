import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import MsgSectionHeaderContainer from '../../Containers/Message/MsgSectionHeaderContainer';
import MsgSectionMainContainer from '../../Containers/Message/MsgSectionMainContainer';
import MsgSectionFooterContainer from '../../Containers/Message/MsgSectionFooterContainer';

const MessageSection = ({ msgSectionStates }) => {
  const { msgDetailSectionState } = msgSectionStates;
  console.log(msgDetailSectionState);

  return (
    <MessageSectionWrapper msgDetailSectionState={msgDetailSectionState}>
      <MsgSectionHeaderContainer msgSectionStates={msgSectionStates} />
      <MsgSectionMainContainer msgSectionStates={msgSectionStates} />
      <MsgSectionFooterContainer msgSectionStates={msgSectionStates} />
    </MessageSectionWrapper>
  );
};

const MessageSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  min-width: 37.5rem;

  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: linear;

  ${({ msgDetailSectionState }) =>
    !msgDetailSectionState &&
    css`
      min-width: calc(100% - 37.5rem);
    `}
`;

export default MessageSection;
