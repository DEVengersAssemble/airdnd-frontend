import React from 'react';
import styled from 'styled-components';

const Wishlist = () => {
  return (
    <WishlistCardWrapper>
      <WishlistImg />
    </WishlistCardWrapper>
  );
};

const WishlistCardWrapper = styled.li`
  border: 1px solid red;
  width: 40rem;
  height: 30rem;
`;

const WishlistImg = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: no-repeat center/40rem
    url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
  height: 20rem;
`;

export default Wishlist;
