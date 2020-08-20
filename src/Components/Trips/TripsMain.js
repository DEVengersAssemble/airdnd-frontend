import React from 'react';
import styled from 'styled-components';
import TripsSubRouter from '../../Routers/TripsSubRouter';
import { NavLink } from 'react-router-dom';

const TripsMain = () => {
  return (
    <TripsMainWrapper>
      <TripsMainInner>
        <TripsMainTitle>여행</TripsMainTitle>
        <TripsMainNav>
          <TripsMainNavList>
            <StNavLink to="/trips/upcoming" activeClassName="active">
              <TripsMainNavItem>
                <TripsMainNavItemInner>예정된 예약</TripsMainNavItemInner>
              </TripsMainNavItem>
            </StNavLink>
          </TripsMainNavList>
          <TripsMainNavList>
            <StNavLink to="/trips/past" activeClassName="active">
              <TripsMainNavItem>
                <TripsMainNavItemInner>이전 예약</TripsMainNavItemInner>
              </TripsMainNavItem>
            </StNavLink>
          </TripsMainNavList>
          <TripsMainNavList>
            <StNavLink to="/trips/canceled" activeClassName="active">
              <TripsMainNavItem>
                <TripsMainNavItemInner>취소됨</TripsMainNavItemInner>
              </TripsMainNavItem>
            </StNavLink>
          </TripsMainNavList>
        </TripsMainNav>
        <TripsSubRouter />
      </TripsMainInner>
    </TripsMainWrapper>
  );
};

const TripsMainWrapper = styled.div`
  padding-top: 8rem;
`;

const TripsMainInner = styled.div`
  margin-top: 4rem;
  padding: 0rem 8rem;
  height: fit-content;
  min-height: calc(100vh - 12rem);
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

const TripsMainTitle = styled.h2`
  padding-bottom: 3rem;
  font-size: 3.4rem;
  font-weight: bold;
`;

const TripsMainNav = styled.ul`
  display: flex;
  margin-left: -1.5rem;
`;

const TripsMainNavList = styled.li`
  margin-right: 1rem;
  & > a {
    display: inline-block;
    :hover {
      background: ${({ theme }) => theme.color.lightGray};
    }
  }
`;

const StNavLink = styled(NavLink)`
  &.active {
<<<<<<< HEAD
    &:hover {
      background: none;
    }
    & > div > div {
      border-bottom: 2px solid ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.black};
      font-weight: bold;
=======
    /* background: black; */
    & > div > div {
      border-bottom: 2px solid ${({ theme }) => theme.color.black};
>>>>>>> 265af7ae1182b91642d1bade6a03938ca216e6ca
    }
  }
`;

const TripsMainNavItem = styled.div`
  padding: 0rem 1.5rem;
  color: ${({ theme }) => theme.color.darkGray};
`;

const TripsMainNavItemInner = styled.div`
<<<<<<< HEAD
=======
  /* border-bottom: 2px solid black; active에만 활성 */
>>>>>>> 265af7ae1182b91642d1bade6a03938ca216e6ca
  line-height: 5rem;
`;

export default TripsMain;
