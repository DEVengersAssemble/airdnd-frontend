import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import ChatSection from './ChatSection';
import MsgSection from './MsgSection';
import DetailSection from './DetailSection';

const MessageSubHeader = () => {
  return (
    <MessageSubHeaderWrapper>
      <ChatSection />
      <MsgSection />
      <DetailSection />
    </MessageSubHeaderWrapper>
  );
};

const MessageSubHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  position: fixed;
  top: 8rem;
`;

export default MessageSubHeader;
