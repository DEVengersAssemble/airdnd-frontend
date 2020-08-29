import React from 'react';
import styled, { css } from 'styled-components';
import MsgDetailSectionHeaderContainer from '../../Containers/Message/MsgDetailSectionHeaderContainer';
import MsgDetailSectionMain from './MsgDetailSectionMain';

const MessageDetailSection = ({ msgSectionStates }) => {
  const { msgDetailSectionState, msgListSectionState } = msgSectionStates;

  return (
    <MessageDetailSectionWrapper msgDetailSectionState={msgDetailSectionState}>
      <MsgDetailSectionHeaderContainer />
      <MsgDetailSectionMain />
    </MessageDetailSectionWrapper>
  );
};

const MessageDetailSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
  min-width: 37.5rem;

  /* ${({ msgDetailSectionState }) =>
    !msgDetailSectionState &&
    css`
      opacity: 0;
    `}

  @media ${({ theme }) => theme.size.medium} {
  } */
`;

export default MessageDetailSection;
