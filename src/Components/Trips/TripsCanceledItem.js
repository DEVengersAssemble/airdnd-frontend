import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TripsCanceledItem = ({ trip }) => {
  console.log(trip);
  // const { reservationId, image, title, location, checkin, checkout } = trip;

  // console.log(checkin.split('/'), checkout);

  // const ciDate = new Date(checkin.split('/'));
  // const coDate = new Date(checkout.split('/'));
  // const options = {
  //   month: 'long',
  //   day: 'numeric',
  // };
  // const ci = ciDate.toLocaleDateString('ko-KR', options);
  // const co = coDate.toLocaleDateString('ko-KR', options);

  return (
    <TripsCanceledItemWrapper>
      <Link to={`/schedule/1`}>
        <StButton>
          <TripsCanceledButtonWrapper>
            <TripsCanceledButtonInnerWrapper>
              <TripsCanceledButtonImg src={'#'} alt="#" />
              <TripsCanceledTextWrapper>
                <TripsCanceledTitle>타이틀</TripsCanceledTitle>
                <TripsCanceledCkLc>
                  location · 체크인 - 체크아웃
                </TripsCanceledCkLc>
              </TripsCanceledTextWrapper>
            </TripsCanceledButtonInnerWrapper>
            <MdKeyboardArrowRight style={{ fontSize: '2.5rem' }} />
          </TripsCanceledButtonWrapper>
        </StButton>
      </Link>
    </TripsCanceledItemWrapper>
  );
};

const TripsCanceledItemWrapper = styled.li`
  height: 7.2rem;
`;

const StButton = styled(Button)`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem 2rem;
`;

const TripsCanceledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TripsCanceledButtonInnerWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const TripsCanceledButtonImg = styled.img`
  border-radius: 5px;
  width: 4rem;
  height: 4rem;
`;

const TripsCanceledTextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  justify-content: space-between;
  padding: 0.15rem 0rem 0.15rem 2rem;
`;

const TripsCanceledTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`;

const TripsCanceledCkLc = styled.div`
  color: ${({ theme }) => lighten(0.1, theme.color.darkGray)};
  font-size: 1.4rem;
  font-weight: 400;
`;

export default TripsCanceledItem;
