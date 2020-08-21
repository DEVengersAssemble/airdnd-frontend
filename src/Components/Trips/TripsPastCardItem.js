import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import Profile from '../Global/Profile';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TripsPastCardItem = () => {
  return (
    <TripsPastCardItemWrapper>
      <TripsPastImgWrapper>
        <TripsPastImg />
        <Profile />
        <Profile />
      </TripsPastImgWrapper>
      <TripsPastCheckInOut>8월 18일 - 8월 19일</TripsPastCheckInOut>
      <TripsPastLocation>Seoul 및 Seoul-si</TripsPastLocation>
      <Link to="/help" target="_blank">
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
    </TripsPastCardItemWrapper>
  );
};

const TripsPastCardItemWrapper = styled.li`
  margin-right: 3.2rem;
  border-radius: 6px;
  width: 40rem;
  height: 45rem;
  box-shadow: 0rem 0rem 1rem ${({ theme }) => theme.color.gray};
  &:hover {
    /* hover시 자연스러운 shadow증가를 위해 transition효과 필요 */
    box-shadow: 0rem 0rem 1.5rem ${({ theme }) => theme.color.gray};
  }
`;

const TripsPastImgWrapper = styled.div``;

const TripsPastImg = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: no-repeat center/40rem
    url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
  height: 20rem;
`;

const TripsPastCheckInOut = styled.div``;

const TripsPastLocation = styled.div``;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const TripsPastButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const TripsPastButtonInnerWrapper = styled.div`
  display: flex;
`;

const TripsPastImgInButton = styled.img`
  border-radius: 5px;
  width: 4rem;
  height: 4rem;
`;

const TripsPastButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default TripsPastCardItem;
