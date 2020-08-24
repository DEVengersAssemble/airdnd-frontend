import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';

const Wishlist = ({ bmList }) => {
  console.log('wishlist', bmList);
  const { bookmarkListId, bookmarkListTitle, bookmarks } = bmList;
  const homeCount = bookmarks.length;

  // Link id변경 필요
  return (
    <WishlistCardWrapper>
      <Link to={homeCount === 1 ? '/detail' : `/wishlist/${bookmarkListId}`}>
        <WishlistImgWrapper>
          <WishlistImg homeCount={homeCount} />
          {homeCount === 1 ? null : (
            <WishlistSubImgWrapper homeCount={homeCount}>
              <WishlistSubImg homeCount={homeCount} />
              {homeCount >= 3 ? <WishlistSubMoreImg /> : <AltImg />}
            </WishlistSubImgWrapper>
          )}
        </WishlistImgWrapper>
        <WishlistContent>
          <WishlistTitle>{bookmarkListTitle}</WishlistTitle>
          <WishlistHomeCount>숙소 {homeCount}개</WishlistHomeCount>
        </WishlistContent>
      </Link>
    </WishlistCardWrapper>
  );
};

const WishlistCardWrapper = styled.li`
  width: 38rem;
  height: 31rem;
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
  background: no-repeat center / 38rem
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

const WishlistSubMoreImg = styled.div`
  width: 14rem;
  height: 9.75rem;
  background: no-repeat center / 100%
    url('https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large');
`;

const AltImg = styled.div`
  width: 14rem;
  height: 9.75rem;
  background: no-repeat center / 100%
    url('https://media.glassdoor.com/sql/391850/airbnb-squarelogo-1459271200583.png');
`;

const WishlistContent = styled.div`
  padding: 0rem 2rem;
`;

const WishlistTitle = styled.div`
  padding: 2.5rem 0rem 0rem;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 2.5rem;
  ${ellipsis('36rem')};
`;

const WishlistHomeCount = styled.div`
  font-size: 1.8rem;
  padding: 1rem 0rem;
`;

export default Wishlist;
