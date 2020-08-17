import React from 'react';
import styled, { css } from 'styled-components';
import { NextButton } from '../Global/SlideButton';

const SearchPagenation = () => {
  return (
    <StWrapper>
      <StNumberWrapper>
        <StNumber style={{ background: 'black', color: 'white' }}>1</StNumber>
        <StNumber>2</StNumber>
        <StNumber>3</StNumber>
        <span>···</span>
        <StNumber>6</StNumber>
        <NextButton></NextButton>
      </StNumberWrapper>
      <StBlackSpan>숙소 110개 중 1 – 20</StBlackSpan>
      <StGraySpan>
        전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될
        수 있습니다.
      </StGraySpan>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  text-align: center;
  margin: 7rem 0 0;
`;

const StNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  & > * {
    margin: 0 0.7rem;
  }
`;

const StNumber = styled.div`
  width: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StBlackSpan = styled.span`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 4rem;
`;

const StGraySpan = styled.span`
  display: block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.gray};
`;

export default SearchPagenation;
