import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import CarouselContainer from '../../Containers/Global/CarouselContainer';
import Button from '../Global/Button';
import Profile from '../Global/Profile';

const DetailReservedHomeBox = () => {
  return (
    <DtRhBoxWrapper>
      <CarouselContainer size="superLarge" />
      <DtRhBoxTitle>
        [헤드오피스] 502호 4인실, 성수역 인근 내 도보 5분거리
      </DtRhBoxTitle>
      <DtRhBoxReservedStateText>
        예약이 종료되었습니다.
      </DtRhBoxReservedStateText>
      <DtRhBoxDescription>
        여행 중 발생한 문제로 인해 상대방에게 금액을 지급하거나 요청해야 할
        경우, 해결 센터를 이용하시기 바랍니다.
      </DtRhBoxDescription>
      <DtRhBoxButtonWrapper>
        <Link to="/resolutions">
          <Button padding="1.3rem 0rem">지급 또는 결제 요청</Button>
        </Link>
      </DtRhBoxButtonWrapper>
      <DtRhCheckInOutWrapper>
        <DtRhCheckInWrapper>
          <DtRhCheckInOutText>체크인</DtRhCheckInOutText>
          <DtRhCheckInOutDate>8월 16일 (일)</DtRhCheckInOutDate>
          <DtRhCheckInOutTime>오후 3:00</DtRhCheckInOutTime>
        </DtRhCheckInWrapper>
        <DtRhCheckOutWrapper>
          <DtRhCheckInOutText>체크아웃</DtRhCheckInOutText>
          <DtRhCheckInOutDate>8월 17일 (월)</DtRhCheckInOutDate>
          <DtRhCheckInOutTime>오전 10:00</DtRhCheckInOutTime>
        </DtRhCheckOutWrapper>
      </DtRhCheckInOutWrapper>
      <DtRhSimpleInfoWrapper>
        <DtRhSimpleInfoText>간략 정보</DtRhSimpleInfoText>
        <DtRhSimpleInfoHostWrapper>
          <DtRhSimpleInfoHostDataWrapper>
            <DtRhSimpleInfoHostName>
              호스트:{' '}
              <StLink
                to="/users/show/hostid"
                style={{ textDecoration: 'underline' }}
              >
                행복마루
              </StLink>
              님
            </DtRhSimpleInfoHostName>
            <DtRhSimpleInfoHomeInfo>
              펜션(한국)의 개인실 · 게스트 2명
            </DtRhSimpleInfoHomeInfo>
            <DtRhSimpleInfoPrice>₩78049</DtRhSimpleInfoPrice>
          </DtRhSimpleInfoHostDataWrapper>
          <DtRhSimpleInfoProfileWrapper>
            <Profile lastName="박" size="4.8rem" />
          </DtRhSimpleInfoProfileWrapper>
        </DtRhSimpleInfoHostWrapper>
      </DtRhSimpleInfoWrapper>
    </DtRhBoxWrapper>
  );
};

const DtRhBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.5rem 2.5rem 4rem;
`;

const DtRhBoxTitle = styled.div`
  padding-top: 3rem;
  font-size: 2.2rem;
  word-break: keep-all;
  line-height: 2.4rem;
`;

const DtRhBoxReservedStateText = styled.div`
  padding-top: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

const DtRhBoxDescription = styled.div`
  padding-top: 1rem;
  font-size: 1.6rem;
  font-weight: light;
`;

const DtRhBoxButtonWrapper = styled.div`
  padding-top: 1rem;
  & > a > button {
    width: 100%;
  }
`;

const DtRhCheckInOutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0rem;
  padding: 2.5rem 0rem;
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const DtRhCheckInWrapper = styled.div`
  flex-grow: 1;
  padding-right: 3rem;
`;

const DtRhCheckOutWrapper = styled.div`
  flex-grow: 1;
  padding-left: 3rem;
  border-left: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const DtRhCheckInOutText = styled.div`
  color: ${({ theme }) => darken(0.1, theme.color.gray)};
  font-size: 1.2rem;
`;

const DtRhCheckInOutDate = styled.div`
  padding-top: 2.5rem;
`;

const DtRhCheckInOutTime = styled.div`
  padding-top: 1rem;
  font-size: 2.5rem;
`;

const DtRhSimpleInfoWrapper = styled.div``;

const DtRhSimpleInfoText = styled.div`
  color: ${({ theme }) => darken(0.1, theme.color.gray)};
  font-size: 1.2rem;
`;

const DtRhSimpleInfoHostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.8rem;
`;

const DtRhSimpleInfoHostDataWrapper = styled.div``;

const DtRhSimpleInfoHostName = styled.div`
  line-height: 2.5rem;
`;

const StLink = styled(Link)`
  color: ${({ theme }) => theme.color.darkGray};
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const DtRhSimpleInfoHomeInfo = styled.div`
  line-height: 2.5rem;
  word-break: keep-all;
`;

const DtRhSimpleInfoPrice = styled.div`
  line-height: 2.5rem;
`;

const DtRhSimpleInfoProfileWrapper = styled.div``;

export default DetailReservedHomeBox;
