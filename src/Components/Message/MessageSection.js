import React from 'react';
import styled from 'styled-components';
import MsgSectionHeader from './MsgSectionHeader';
import MsgSectionMain from './MsgSectionMain';
import MsgSectionFooter from './MsgSectionFooter';

const MessageSection = () => {
  return (
    <MessageSectionWrapper>
      <MsgSectionHeader />
      <MsgSectionMain />
      <MsgSectionFooter />
    </MessageSectionWrapper>
  );
};

const MessageSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export default MessageSection;
