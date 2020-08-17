import React from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished';
import theme from '../../style/theme';
import Profile from '../Global/Profile';

const ChatListItem = () => {
  const complete = true;

  return (
    <ChatListItemLi>
      <Profile size="4.2rem" lastName="Kim" />
      <LastChatOuter>
        <HostName>호스트 이름</HostName>
        <LastChatInner>
          <LastChat>
            마지막 메시지 내용입니다. 마지막 메시지 내용입니다.
          </LastChat>
          <LastChatDate>2020년 8월 16일</LastChatDate>
        </LastChatInner>
        <ReservationWrapper>
          <ReservedState
            style={{
              color: `${
                complete ? theme.color.lightGreen : theme.color.darkGray
              }`,
            }}
          >
            완료
          </ReservedState>
          {' • '}
          <ReservedDate>2020년 8월 15일 - 2020년 8월 16일</ReservedDate>
        </ReservationWrapper>
      </LastChatOuter>
    </ChatListItemLi>
  );
};

const ChatListItemLi = styled.li`
  display: flex;
  align-items: flex-start;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.lightGray};
  padding: 1rem;
`;

const LastChatOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
  & > div + div {
    margin-top: 0.4rem;
  }
`;

const HostName = styled.div`
  font-size: 1.7rem;
  font-weight: 400;
`;

const LastChatInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LastChat = styled.span`
  font-size: 1.4rem;
  ${ellipsis('18rem')};
`;

const LastChatDate = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.3rem;
  font-weight: 300;
`;

const ReservationWrapper = styled.div`
  font-size: 1rem;
  font-weight: 200;
`;

const ReservedState = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
`;

const ReservedDate = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.3rem;
  font-weight: 400;
`;

export default ChatListItem;
