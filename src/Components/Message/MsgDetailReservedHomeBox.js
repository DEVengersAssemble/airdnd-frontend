import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import CarouselContainer from '../../Containers/Global/CarouselContainer';
import Button from '../Global/Button';
import Profile from '../Global/Profile';

const MsgDetailReservedHomeBox = () => {
  // Canceled props일때 render 작업 필요

  return (
    <MsgDetailRhBoxWrapper>
      <CarouselContainer size="superLarge" />
      <MsgDetailRhBoxTitle>
        [헤드오피스] 502호 4인실, 성수역 인근 내 도보 5분거리
      </MsgDetailRhBoxTitle>
      <MsgDetailRhBoxReservedStateText>
        예약이 종료되었습니다.
      </MsgDetailRhBoxReservedStateText>
      <MsgDetailRhBoxDescription>
        여행 중 발생한 문제로 인해 상대방에게 금액을 지급하거나 요청해야 할
        경우, 해결 센터를 이용하시기 바랍니다.
      </MsgDetailRhBoxDescription>
      <MsgDetailRhBoxButtonWrapper>
        <Link to="/resolutions" target="_blank">
          <Button padding="1.3rem 0rem">지급 또는 결제 요청</Button>
        </Link>
      </MsgDetailRhBoxButtonWrapper>
      <MsgDetailRhCheckInOutWrapper>
        <MsgDetailRhCheckInWrapper>
          <MsgDetailRhCheckInOutText>체크인</MsgDetailRhCheckInOutText>
          <MsgDetailRhCheckInOutDate>8월 16일 (일)</MsgDetailRhCheckInOutDate>
          <MsgDetailRhCheckInOutTime>오후 3:00</MsgDetailRhCheckInOutTime>
        </MsgDetailRhCheckInWrapper>
        <MsgDetailRhCheckOutWrapper>
          <MsgDetailRhCheckInOutText>체크아웃</MsgDetailRhCheckInOutText>
          <MsgDetailRhCheckInOutDate>8월 17일 (월)</MsgDetailRhCheckInOutDate>
          <MsgDetailRhCheckInOutTime>오전 10:00</MsgDetailRhCheckInOutTime>
        </MsgDetailRhCheckOutWrapper>
      </MsgDetailRhCheckInOutWrapper>
      <MsgDetailRhSimpleInfoWrapper>
        <MsgDetailRhSimpleInfoText>간략 정보</MsgDetailRhSimpleInfoText>
        <MsgDetailRhSimpleInfoHostWrapper>
          <MsgDetailRhSimpleInfoHostDataWrapper>
            <MsgDetailRhSimpleInfoHostName>
              호스트:{' '}
              <StLink
                to="/users/show/hostid"
                style={{ textDecoration: 'underline' }}
                target="_blank"
              >
                호스트이름
              </StLink>
              님
            </MsgDetailRhSimpleInfoHostName>
            <MsgDetailRhSimpleInfoHomeInfo>
              펜션(한국)의 개인실 · 게스트 2명
            </MsgDetailRhSimpleInfoHomeInfo>
            <MsgDetailRhSimpleInfoPrice>₩78049</MsgDetailRhSimpleInfoPrice>
          </MsgDetailRhSimpleInfoHostDataWrapper>
          <MsgDetailRhSimpleInfoProfileWrapper>
            <Profile lastName="박" size="4.8rem" />
          </MsgDetailRhSimpleInfoProfileWrapper>
        </MsgDetailRhSimpleInfoHostWrapper>
      </MsgDetailRhSimpleInfoWrapper>
    </MsgDetailRhBoxWrapper>
  );
};

const MsgDetailRhBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.5rem 2.5rem 4rem;
`;

const MsgDetailRhBoxTitle = styled.div`
  padding-top: 3rem;
  font-size: 2.2rem;
  word-break: keep-all;
  line-height: 2.4rem;
`;

const MsgDetailRhBoxReservedStateText = styled.div`
  padding-top: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

const MsgDetailRhBoxDescription = styled.div`
  padding-top: 1rem;
  font-size: 1.6rem;
  font-weight: light;
`;

const MsgDetailRhBoxButtonWrapper = styled.div`
  padding-top: 1rem;
  & > a > button {
    width: 100%;
  }
`;

const MsgDetailRhCheckInOutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0rem;
  padding: 2.5rem 0rem;
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailRhCheckInWrapper = styled.div`
  flex-grow: 1;
  padding-right: 3rem;
`;

const MsgDetailRhCheckOutWrapper = styled.div`
  flex-grow: 1;
  padding-left: 3rem;
  border-left: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailRhCheckInOutText = styled.div`
  color: ${({ theme }) => darken(0.1, theme.color.gray)};
  font-size: 1.2rem;
`;

const MsgDetailRhCheckInOutDate = styled.div`
  padding-top: 2.5rem;
`;

const MsgDetailRhCheckInOutTime = styled.div`
  padding-top: 1rem;
  font-size: 2.5rem;
`;

const MsgDetailRhSimpleInfoWrapper = styled.div``;

const MsgDetailRhSimpleInfoText = styled.div`
  color: ${({ theme }) => darken(0.1, theme.color.gray)};
  font-size: 1.2rem;
`;

const MsgDetailRhSimpleInfoHostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.8rem;
`;

const MsgDetailRhSimpleInfoHostDataWrapper = styled.div``;

const MsgDetailRhSimpleInfoHostName = styled.div`
  line-height: 2.5rem;
`;

const StLink = styled(Link)`
  color: ${({ theme }) => theme.color.darkGray};
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const MsgDetailRhSimpleInfoHomeInfo = styled.div`
  line-height: 2.5rem;
  word-break: keep-all;
`;

const MsgDetailRhSimpleInfoPrice = styled.div`
  line-height: 2.5rem;
`;

const MsgDetailRhSimpleInfoProfileWrapper = styled.div``;

export default MsgDetailReservedHomeBox;
