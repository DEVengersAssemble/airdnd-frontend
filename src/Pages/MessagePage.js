import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Airbnb } from '@styled-icons/boxicons-logos/Airbnb';
import theme from '../style/theme';
import MessageSubHeader from '../Components/Message/MessageSubHeader';
import MessageMainWrapper from '../Components/Message/MessageMainWrapper';

const MessagePage = () => {
  return (
    <MessagePageWrapper>
      <MessageHeaderWrapper>
        <Header>
          <Airbnb size="4.5rem" />
        </Header>
      </MessageHeaderWrapper>
      <MessageSubHeader />
      <MessageMainWrapper />
    </MessagePageWrapper>
  );
};

const MessagePageWrapper = styled.div`
  display: flex;
  position: absolute;
`;

const MessageHeaderWrapper = styled.div`
  position: fixed;
  z-index: 1;
  background: ${theme.white};
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${darken(0.1, theme.lightGray)};
  box-shadow: 1px 0 0.4rem ${theme.shadow};
  padding-left: 2rem;
  color: ${theme.main};
  height: 8rem;
`;

export default MessagePage;
