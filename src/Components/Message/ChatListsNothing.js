import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Global/Button';

const ChatListsNothing = () => {
  return (
    <ChatNothingWrapper>
      <ChatNothingTitle>메시지를 모두 읽으셨습니다.</ChatNothingTitle>
      <ChatNothingText>
        여행이나 체험을 예약한 경우, 호스트가 보낸 메시지가 여기에 표시됩니다.
      </ChatNothingText>
      <Link to="/">
        <Button padding="1.5rem 1.8rem">에어비엔비 둘러보기</Button>
      </Link>
    </ChatNothingWrapper>
  );
};

const ChatNothingWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChatNothingTitle = styled.h3`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  font-size: 1.8rem;
`;

const ChatNothingText = styled.p`
  padding-bottom: 1rem;
  font-weight: 300;
  text-align: center;
`;

export default ChatListsNothing;
