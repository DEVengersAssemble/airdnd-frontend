import React from 'react';
import styled from 'styled-components';

const MessageWrapper = ({ children }) => {
  return <MessagePageWrapper>{children}</MessagePageWrapper>;
};

const MessagePageWrapper = styled.div`
  /* display: flex; */
  position: absolute;
`;

export default MessageWrapper;
