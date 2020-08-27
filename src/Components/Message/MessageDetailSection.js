import React from 'react';
import styled, { css } from 'styled-components';
import MsgDetailSectionHeaderContainer from '../../Containers/Message/MsgDetailSectionHeaderContainer';
import MsgDetailSectionMain from './MsgDetailSectionMain';

const MessageDetailSection = ({ msgDetailSectionState }) => {
  return (
    <MessageDetailSectionWrapper msgDetailSectionState={msgDetailSectionState}>
      <MsgDetailSectionHeaderContainer
        msgDetailSectionState={msgDetailSectionState}
      />
      <MsgDetailSectionMain />
    </MessageDetailSectionWrapper>
  );
};

const MessageDetailSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
  min-width: 37.5rem;

  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: esae-out;

  ${({ msgDetailSectionState }) =>
    !msgDetailSectionState &&
    css`
      transform: translateX(37.5rem);
    `}

  /* visibility 이거는 무시해도 돼 */
  /* visibility: ${({ msgDetailSectionState }) =>
    msgDetailSectionState ? 'visible' : 'hidden'}; */
`;

export default MessageDetailSection;
