import React from 'react';
import styled, { css } from 'styled-components';

const Wishlist = () => {
  // const homeCount = 1;
  const homeCount = 2;
  // const homeCount = 3;

  return (
    <WishlistCardWrapper>
      <WishlistImgWrapper>
        <WishlistImg homeCount={homeCount} />
        {homeCount === 1 ? null : (
          <WishlistSubImgWrapper homeCount={homeCount}>
            <WishlistSubImg homeCount={homeCount} />
            {homeCount >= 3 ? <WishlistSubImg /> : <AltImg />}
          </WishlistSubImgWrapper>
        )}
        <WishlistContent></WishlistContent>
      </WishlistImgWrapper>
    </WishlistCardWrapper>
  );
};

const WishlistCardWrapper = styled.li`
  width: 40rem;
  height: 30rem;
  &:nth-child(3n + 2),
  &:nth-child(3n + 1) {
    margin-right: 3.3rem;
  }
  margin-bottom: 4rem;
  border-radius: 10px;
  box-shadow: 0rem 0rem 1rem ${({ theme }) => theme.color.gray};
  &:hover {
    /* hover시 자연스러운 shadow증가를 위해 transition효과 필요 */
    box-shadow: 0rem 0rem 1.5rem ${({ theme }) => theme.color.gray};
  }
`;

const WishlistImgWrapper = styled.div`
  display: flex;
`;

const WishlistImg = styled.div`
  /* 이미지가 하나면 꽉차게  */
  /* 이미지가 2개이상이면 모자이크 */
  width: 100%;
  height: 20rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: no-repeat center / 40rem
    url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
  ${({ homeCount }) =>
    homeCount >= 2 &&
    css`
      width: 100%;
      height: 20rem;
      border-top-left-radius: 10px;
      border-top-right-radius: 0rem;
      background: no-repeat cover / 100%
        url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
      background-position: left;
    `};
`;

const WishlistSubImgWrapper = styled.div`
  display: ${({ homeCount }) => (homeCount === 1 ? 'none' : 'flex')};
  flex-flow: column wrap;
  margin-left: 0.5rem;
`;

const WishlistSubImg = styled.div`
  width: 14rem;
  height: 9.75rem;
  margin-bottom: 0.5rem;
  border-top-right-radius: 10px;
  background: no-repeat center / 100%
    url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
`;

const AltImg = styled.div`
  width: 14rem;
  height: 9.75rem;
  background: no-repeat center / 100%
    url('https://media.glassdoor.com/sql/391850/airbnb-squarelogo-1459271200583.png');
`;

const WishlistContent = styled.div``;

export default Wishlist;
