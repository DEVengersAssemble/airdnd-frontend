import React from 'react';
import styled from 'styled-components';
import MsgSectionHeaderContainer from '../../Containers/Message/MsgSectionHeaderContainer';
import MsgSectionMain from './MsgSectionMain';
import MsgSectionFooter from './MsgSectionFooter';

const MessageSection = ({ msgSectionStates }) => {
  return (
    <MessageSectionWrapper>
      <MsgSectionHeaderContainer msgSectionStates={msgSectionStates} />
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
