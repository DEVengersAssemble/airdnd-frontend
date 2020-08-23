import React from 'react';
import styled from 'styled-components';

const Wishlist = () => {
  return (
    <WishlistCardWrapper>
      <WishlistImgWrapper>
        <WishlistImg />
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

const WishlistImgWrapper = styled.div``;

const WishlistImg = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: no-repeat center/40rem
    url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
  height: 20rem;
`;

export default Wishlist;
