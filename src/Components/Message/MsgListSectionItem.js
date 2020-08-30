import React from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished';
import Profile from '../Global/Profile';

const MsgListSectionItem = ({
  isActive,
  hostname,
  hostProfileImg,
  lastMsg,
  lm,
  ci,
  co,
  isCanceled,
  onClickActive,
}) => {
  return (
    <MsgListItemWrapper isActive={isActive} onClick={onClickActive}>
      <Profile size="4.2rem" lastName="Kim" profileImg={hostProfileImg} />
      <LastMsgItemOuter>
        <HostName>{hostname}</HostName>
        <LastMsgItemInner>
          <LastMsgItemText>{lastMsg}</LastMsgItemText>
          <LastMsgItemDate>{lm}</LastMsgItemDate>
        </LastMsgItemInner>
        <MsgItemReservationWrapper>
          <MsgItemReservedState isCanceled={isCanceled}>
            {isCanceled ? '예약취소' : '완료'}
          </MsgItemReservedState>
          {' • '}
          <MsgItemReservedDate>
            {ci} - {co}
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
  background: ${({ isActive, theme }) =>
    isActive ? theme.color.lightGray : 'none'};
  padding: 1rem;
  cursor: pointer;
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
  width: 27rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LastMsgItemText = styled.span`
  font-size: 1.4rem;
  ${ellipsis('17rem')};
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
  color: ${({ isCanceled, theme }) =>
    isCanceled ? theme.color.darkGray : theme.color.lightGreen};
  font-size: 1.4rem;
  font-weight: 400;
`;

const MsgItemReservedDate = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.3rem;
  font-weight: 400;
`;

export default MsgListSectionItem;
