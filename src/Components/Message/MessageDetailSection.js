import React from 'react';
import styled from 'styled-components';
import MsgDetailSectionHeader from './MsgDetailSectionHeader';
import MsgDetailSectionMain from './MsgDetailSectionMain';

const MessageDetailSection = () => {
  return (
    <MessageDetailSectionWrapper>
      <MsgDetailSectionHeader />
      <MsgDetailSectionMain />
    </MessageDetailSectionWrapper>
  );
};

const MessageDetailSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export default MessageDetailSection;
