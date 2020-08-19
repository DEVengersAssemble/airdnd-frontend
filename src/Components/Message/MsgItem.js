import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import Profile from '../Global/Profile';
import Button from '../Global/Button';
import { AiFillFlag } from 'react-icons/ai';

const MsgItem = ({ host }) => {
  return (
    <MsgItemWrapper>
      <MsgProfileWrapper>
        <Profile size="4.2rem" lastName="Kim" />
      </MsgProfileWrapper>
      <MsgItemInner>
        <MsgSendUserWrapper>
          <MsgUserName>태진</MsgUserName>
          <MsgSendTime>오후 16:00</MsgSendTime>
        </MsgSendUserWrapper>
        <MsgText>
          Host님 안녕하세요. 이번에 예약한 방이 너무 만족스럽습니다.Host님
          안녕하세요. 이번에 예약한 방이 너무 만족스럽습니다.Host님 안녕하세요.
          이번에 예약한 방이 너무 만족스럽습니다.
        </MsgText>
      </MsgItemInner>
      <MsgButtonWrapper>
        {host && (
          <Button
            btnType="circle"
            border="none"
            hover={{
              backgroundColor: theme.color.lightGray,
            }}
            style={{
              width: '4rem',
              height: '4rem',
              color: theme.color.darkGray,
            }}
          >
            <AiFillFlag />
          </Button>
        )}
      </MsgButtonWrapper>
    </MsgItemWrapper>
  );
};

const MsgItemWrapper = styled.div`
  display: flex;
`;

const MsgProfileWrapper = styled.div``;

const MsgItemInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 1rem;
`;

const MsgButtonWrapper = styled.div`
  align-self: center;
`;

const MsgSendUserWrapper = styled.div`
  display: flex;
`;

const MsgUserName = styled.div`
  padding-right: 0.5rem;
  font-size: 1.7rem;
  font-weight: bold;
`;

const MsgSendTime = styled.div`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.2rem;
  font-weight: light;
  margin-top: 1px;
`;

const MsgText = styled.div`
  line-height: 2.5rem;
`;

export default MsgItem;
