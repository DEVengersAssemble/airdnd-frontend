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
  padding: 0 1.7rem;
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

export default Home;
