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
  @media ${({ theme }) => theme.size.large} {
    ${({ msgDetailSectionState }) =>
      !msgDetailSectionState &&
      css`
        transition-property: all;
        transition-duration: 0.4s;
        transition-timing-function: linear;
        opacity: 0;
      `}
  }
  @media ${({ theme }) => theme.size.medium} {
  }
`;

export default MessageDetailSection;
