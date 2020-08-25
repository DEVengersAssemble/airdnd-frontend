import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten, ellipsis } from 'polished';
import Button from '../Global/Button';
import Profile from '../Global/Profile';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TripsPastCardItem = () => {
  return (
    <TripsPastCardItemWrapper>
      <Link to="/schedule">
        <TripsPastImgWrapper>
          <TripsPastImg />
          <TripsProfileWrapper>
            <Profile lastName="김" size="4.3rem" />
            <Profile lastName="박" size="4.3rem" />
          </TripsProfileWrapper>
        </TripsPastImgWrapper>
        <TripsPastCkLcWrapper>
          <TripsPastCheckInOut>8월 18일 - 8월 19일</TripsPastCheckInOut>
          <TripsPastLocation>Seoul 및 Seoul-si</TripsPastLocation>
        </TripsPastCkLcWrapper>
        <Link to="/schedule/1">
          <StButton>
            <TripsPastButtonWrapper>
              <TripsPastButtonInnerWrapper>
                <TripsPastImgInButton
                  src="https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large"
                  alt="#"
                />
                <TripsPastButtonText>
                  [헤드오피스] 502호 4인실, 성수역 인근 내 도보 5분거리
                </TripsPastButtonText>
              </TripsPastButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </TripsPastButtonWrapper>
          </StButton>
        </Link>
        <Link to="/schedues/2">
          <StButton>
            <TripsPastButtonWrapper>
              <TripsPastButtonInnerWrapper>
                <TripsPastImgInButton
                  src="https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large"
                  alt="#"
                />
                <TripsPastButtonText>
                  [헤드오피스] 502호 4인실, 성수역 인근 내 도보 5분거리
                </TripsPastButtonText>
              </TripsPastButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </TripsPastButtonWrapper>
          </StButton>
        </Link>
      </Link>
      <Link to="/schedule">
        <StMoreButton border="none">여행 계획 더보기</StMoreButton>
      </Link>
    </TripsPastCardItemWrapper>
  );
};

const TripsPastCardItemWrapper = styled.li`
  /* media query 적용필요: 기기별 카드의 width값 변경 */
  &:nth-child(3n + 2),
  &:nth-child(3n + 1) {
    margin-right: 3.3rem;
  }
  margin-bottom: 4rem;
  border-radius: 10px;
  width: 38rem;
  height: 45rem;
  box-shadow: 0rem 0rem 1rem ${({ theme }) => theme.color.gray};
  &:hover {
    /* hover시 자연스러운 shadow증가를 위해 transition효과 필요 */
    box-shadow: 0rem 0rem 1.5rem ${({ theme }) => theme.color.gray};
  }
`;

const TripsPastImgWrapper = styled.div`
  position: relative;
`;

const TripsPastImg = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: no-repeat center/38rem
    url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
  height: 20rem;
`;

const TripsProfileWrapper = styled.div`
  position: absolute;
  top: 14rem;
  left: 1.5rem;
  & > :first-child {
    position: absolute;
    left: 3rem;
    z-index: 1;
  }
  & > :first-child > :first-child {
    border: 1px solid ${({ theme }) => theme.color.white};
  }
  & > :last-child > :first-child {
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`;

const TripsPastCkLcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1rem;
`;

const TripsPastCheckInOut = styled.div`
  color: ${({ theme }) => lighten(0.1, theme.color.darkGray)};
  font-size: 1.25rem;
  font-weight: 400;
`;

const TripsPastLocation = styled.div`
  padding: 0.5rem 0rem 0rem;
  font-size: 2.2rem;
  font-weight: 600;
`;

const StButton = styled(Button)`
  width: 100%;
  height: 6rem;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const TripsPastButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  width: calc(100% - 4rem);
  font-size: 2rem;
  font-weight: bold;
`;

const TripsPastButtonInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TripsPastImgInButton = styled.img`
  border-radius: 5px;
  width: 4rem;
  height: 4rem;
`;

const TripsPastButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  ${ellipsis('28rem')};
`;

const StMoreButton = styled(Button)`
  width: 100%;
  height: 5.6rem;
  border-top: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  border-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 1.5rem;
`;

export default TripsPastCardItem;
