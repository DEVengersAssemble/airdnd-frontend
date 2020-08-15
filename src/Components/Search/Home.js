import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import Carousel from '../Global/Carousel';
import Rating from '../Global/Rating';
import { CkHeart } from '../Global/Heart';

const Home = () => {
  return (
    <StHome>
      <Carousel size="large" />
      <StDetailWrapper>
        <StDetail>MongMong-Toto의 호텔 객실</StDetail>
        <StTitle>Pia Resort Hotel Corner Studio Room</StTitle>
        <StLine></StLine>
        <StDetail>
          최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개
        </StDetail>
        <Rating scale="1.4" rate="4.79" count="24" className="rating" />
        <StPriceWrapper>
          <StLargePrice>
            <strong>₩12,928</strong> / 1박
          </StLargePrice>
          <StSmallPrice>총 요금: ₩12,928</StSmallPrice>
        </StPriceWrapper>
      </StDetailWrapper>
      <Heart ckType hover checked={false} />
    </StHome>
  );
};

const StHome = styled.li`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 2rem 0;
  border-top: 1px solid ${theme.shadow};
  position: relative;
`;

const StDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.7rem;
  position: relative;
  flex-grow: 1;
  .rating {
    position: absolute;
    bottom: 0;
    left: 1.7rem;
  }
`;

const StDetail = styled.span`
  color: ${theme.darkGray};
  font-size: 1.4rem;
  padding: 2px 0;
`;

const StTitle = styled.span`
  color: ${theme.black};
  font-size: 1.8rem;
  padding: 8px 0;
`;

const StLine = styled.hr`
  width: 35px;
  margin-left: 0;
  text-align: left;
  border-width: 0;
  border-bottom: 1px solid ${theme.gray};
  margin-bottom: 9px;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 1rem;
  right: -1.2rem;
`;

const StPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const StLargePrice = styled.span`
  margin-bottom: 0.5rem;
  text-align: right;
`;

const StSmallPrice = styled.span`
  text-decoration: underline;
  font-size: 1.4rem;
  color: ${theme.darkGray};
`;

export default Home;
