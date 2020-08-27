import React from 'react';
import styled from 'styled-components';
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
  ${({ msgDetailSectionState }) =>
    console.log(
      'false가 되면 detail section slide로 사라지기!! 지금은:',
      msgDetailSectionState,
    )}
  display: flex;
  flex-direction: column;
  visibility: ${({ msgDetailSectionState }) =>
    msgDetailSectionState ? 'visible' : 'hidden'};
`;

export default MessageDetailSection;
