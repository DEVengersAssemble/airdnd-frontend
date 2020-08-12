import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import Carousel from '../Global/Carousel';

const Home = () => {
  return (
    <StHome>
      <Carousel />
      <StDetailWrapper>
        <StDetail>MongMong-Toto의 호텔 객실</StDetail>
        <StTitle>Pia Resort Hotel Corner Studio Room</StTitle>
        <StLine></StLine>
        <StDetail>
          최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개
        </StDetail>
      </StDetailWrapper>
    </StHome>
  );
};

const StHome = styled.li`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 2rem 0;
  border-top: 1px solid ${theme.gray};

  /* &:focus {
    border: 1px solid black;
    border-radius: 8px;
  } */
`;

const StDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StDetail = styled.span`
  color: ${theme.darkGray};
  font-size: 1.4rem;
`;

const StTitle = styled.span`
  color: ${theme.black};
  font-size: 1.8rem;
`;

const StLine = styled.hr`
  width: 50px;
  text-align: left;
  margin-left: 0;
`;

export default Home;
