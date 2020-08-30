import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten, ellipsis } from 'polished';
import Button from '../Global/Button';
import Profile from '../Global/Profile';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TripsUpcomingCardItem = ({ trip, myInfo, ci, co }) => {
  const { title, homeImage, location, withGuest, guest } = trip;
  const { lastName: myLastName, profileImg: myProfileImg } = myInfo;
  const { lastName: gstLastName, profileImg: gstProfileImg } = guest;

  // TODO: co - ci 만큼 mapping 필요

  return (
    <TripsUpcomingCardItemWrapper>
      <Link to="/schedule">
        <TripsUpcomingImgWrapper>
          <TripsUpcomingImg homeImage={homeImage} />
          {withGuest && (
            <TripsProfileWrapper>
              <Profile
                lastName={`${myLastName}`}
                size="4.3rem"
                profileImg={myProfileImg}
              />
              <Profile
                lastName={`${gstLastName}`}
                size="4.3rem"
                profileImg={gstProfileImg}
              />
            </TripsProfileWrapper>
          )}
        </TripsUpcomingImgWrapper>
        <TripsUpcomingCkLcWrapper>
          <TripsUpcomingCheckInOut>
            {ci} - {co}
          </TripsUpcomingCheckInOut>
          <TripsUpcomingLocation>{location}</TripsUpcomingLocation>
        </TripsUpcomingCkLcWrapper>
        <Link to="/schedule/1">
          <StButton>
            <TripsUpcomingButtonWrapper>
              <TripsUpcomingButtonInnerWrapper>
                <TripsUpcomingImgInButton src={`${homeImage[0]}`} alt="#" />
                <TripsUpcomingButtonText>{title}</TripsUpcomingButtonText>
              </TripsUpcomingButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </TripsUpcomingButtonWrapper>
          </StButton>
        </Link>
        <Link to="/schedues/2">
          <StButton>
            <TripsUpcomingButtonWrapper>
              <TripsUpcomingButtonInnerWrapper>
                <TripsUpcomingImgInButton src={`${homeImage[0]}`} alt="#" />
                <TripsUpcomingButtonText>{title}</TripsUpcomingButtonText>
              </TripsUpcomingButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </TripsUpcomingButtonWrapper>
          </StButton>
        </Link>
      </Link>
      <Link to="/schedule">
        <StMoreButton border="none">여행 계획 더보기</StMoreButton>
      </Link>
    </TripsUpcomingCardItemWrapper>
  );
};

const TripsUpcomingCardItemWrapper = styled.li`
  /* media query 적용필요: 기기별 카드의 width값 변경 */
  &:nth-child(3n + 2),
  &:nth-child(3n + 1) {
    margin-right: 2%;
  }
  margin-bottom: 4rem;
  border-radius: 10px;
  width: 32%;
  @media ${({ theme }) => theme.size.medium} {
    &:nth-child(2n) {
      margin-right: 0rem;
    }
    &:nth-child(2n + 1) {
      margin-right: 4%;
    }
    width: 48%;
  }

  @media ${({ theme }) => theme.size.iPad} {
    margin-right: 0rem;
  }

  height: 45rem;
  box-shadow: 0rem 0rem 1rem ${({ theme }) => theme.color.gray};
  &:hover {
    /* hover시 자연스러운 shadow증가를 위해 transition효과 필요 */
    box-shadow: 0rem 0rem 1.5rem ${({ theme }) => theme.color.gray};
  }
`;

const TripsUpcomingImgWrapper = styled.div`
  position: relative;
`;

const TripsUpcomingImg = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
<<<<<<< HEAD
  background: no-repeat center/100%
    url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
=======
  background: no-repeat center/100% url(${({ homeImage }) => homeImage[0]});
>>>>>>> a0b74daac04906641223ff4d6978c2f32087f291
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

const TripsUpcomingCkLcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1rem;
`;

const TripsUpcomingCheckInOut = styled.div`
  color: ${({ theme }) => lighten(0.1, theme.color.darkGray)};
  font-size: 1.25rem;
  font-weight: 400;
`;

const TripsUpcomingLocation = styled.div`
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

const TripsUpcomingButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  width: calc(100% - 4rem);
  font-size: 2rem;
  font-weight: bold;
`;

const TripsUpcomingButtonInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

const TripsUpcomingImgInButton = styled.img`
  border-radius: 5px;
  width: 4rem;
  height: 4rem;
`;

const TripsUpcomingButtonText = styled.div`
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

export default TripsUpcomingCardItem;
