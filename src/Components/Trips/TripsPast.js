import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import TripsNone from './TripsNone';
import TripsSubFooter from './TripsSubFooter';
import Button from '../Global/Button';
import Profile from '../Global/Profile';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TripsPast = () => {
  return (
    <>
      <div>
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large"
            alt="#"
          />
          <Profile />
          <Profile />
        </div>
      </div>
      <div>8월 18일 - 8월 19일 Seoul 및 Seoul-si</div>
      <div>
        <Link to="/help" target="_blank">
          <StButton>
            <TripsPastButtonWrapper>
              <TripsPastButtonInnerWrapper>
                <img
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
      </div>
      <TripsSubFooter>
        예약 내역을 찾으실 수 없나요?{' '}
        <Button btnType="underlined" hover="none" padding="0" fontSize="1.5rem">
          도움말 센터를 방문하세요.
        </Button>
      </TripsSubFooter>
    </>
  );
};

const StButton = styled(Button)``;

const TripsPastButtonWrapper = styled.div``;

const TripsPastButtonInnerWrapper = styled.div``;

const TripsPastButtonText = styled.div``;

export default TripsPast;
