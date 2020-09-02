import React from 'react';
import styled, { css } from 'styled-components';
import MsgDetailSectionHeaderContainer from '../../Containers/Message/MsgDetailSectionHeaderContainer';
import MsgDetailSectionMainContainer from '../../Containers/Message/MsgDetailSectionMainContainer';

const MessageDetailSection = ({ msgSectionStates }) => {
  const { msgDetailSectionState } = msgSectionStates;

  return (
    <MessageDetailSectionWrapper msgDetailSectionState={msgDetailSectionState}>
      <MsgDetailSectionHeaderContainer />
      <MsgDetailSectionMainContainer />
    </MessageDetailSectionWrapper>
  );
};

const MessageDetailSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 37.5rem;
  min-width: 37.5rem;

  transition: all 0.3s linear;
  ${({ msgDetailSectionState }) =>
    !msgDetailSectionState &&
    css`
      visibility: hidden;
      opacity: 0;
    `}

  /* @media ${({ theme }) => theme.size.medium} {
  } */
`;

export default MessageDetailSection;
