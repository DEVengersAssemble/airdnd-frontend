import React from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished';
import theme from '../../style/theme';
import Profile from '../Global/Profile';

const MsgListItem = () => {
  const complete = true;

  return (
    <MsgListItemWrapper>
      <Profile size="4.2rem" lastName="Kim" />
      <LastMsgItemOuter>
        <HostName>호스트 이름</HostName>
        <LastMsgItemInner>
          <LastMsgItemText>
            마지막 메시지 내용입니다. 마지막 메시지 내용입니다.
          </LastMsgItemText>
          <LastMsgItemDate>2020년 8월 16일</LastMsgItemDate>
        </LastMsgItemInner>
        <MsgItemReservationWrapper>
          <MsgItemReservedState
            style={{
              color: `${
                complete ? theme.color.lightGreen : theme.color.darkGray
              }`,
            }}
          >
            완료
          </MsgItemReservedState>
          {' • '}
          <MsgItemReservedDate>
            2020년 8월 15일 - 2020년 8월 16일
          </MsgItemReservedDate>
        </MsgItemReservationWrapper>
      </LastMsgItemOuter>
    </MsgListItemWrapper>
  );
};

const MsgListItemWrapper = styled.li`
  display: flex;
  align-items: flex-start;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.lightGray};
  padding: 1rem;
`;

const LastMsgItemOuter = styled.div`
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

const LastMsgItemInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LastMsgItemText = styled.span`
  font-size: 1.4rem;
  ${ellipsis('17.8rem')};
`;

const LastMsgItemDate = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.3rem;
  font-weight: light;
`;

const MsgItemReservationWrapper = styled.div`
  font-size: 1rem;
  font-weight: light;
`;

const MsgItemReservedState = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
`;

const MsgItemReservedDate = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.3rem;
  font-weight: 400;
`;

export default MsgListItem;
