import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Airbnb } from '@styled-icons/boxicons-logos/Airbnb';

const WishlistsHeader = () => {
  return (
    <TripsHeaderWrapper>
      <Header>
        <Airbnb size="4.5rem" />
      </Header>
      {/* <RwdText>테스트</RwdText> */}
    </TripsHeaderWrapper>
  );
};

const TripsHeaderWrapper = styled.div`
  position: fixed;
  z-index: 1;
  background: ${({ theme }) => theme.color.white};
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  box-shadow: 1px 0 0.4rem ${({ theme }) => theme.color.shadow};
  padding: 0rem 12rem;
  color: ${({ theme }) => theme.color.main};
  height: 8rem;

  @media ${({ theme }) => theme.size.medium} {
    padding: 0rem 7.5rem;
  }

  @media ${({ theme }) => theme.size.iPad} {
    padding: 0rem 3rem;
  }
`;

// const RwdText = styled.div`
//   border: 1px solid red;
//   width: 5rem;
//   height: 3rem;
//   @media ${({ theme }) => theme.size.medium} {
//     border: 1px solid blue;
//   }
//   @media ${({ theme }) => theme.size.iPad} {
//     border: 1px solid green;
//   }
// `;
export default WishlistsHeader;
