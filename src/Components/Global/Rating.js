import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

// scale은 폰트크기로, rem 단위에서 '숫자만' 전달하세요
const Rating = ({ scale, rate, count, ...rest }) => {
  const regExp = /\d/g;
  const filteredNumber = count.match(regExp).join('');

  return (
    <StRatingWrapper scale={scale} {...rest}>
      <StStarIcon scale={scale} />
      <span className="a11yHidden">
        {`후기 ${filteredNumber}개로부터 5점 만점에 ${rate}점을 받은 숙소입니다.`}
      </span>
      <StRatingGrade>{rate}</StRatingGrade>
      <StReviewCount>({count})</StReviewCount>
    </StRatingWrapper>
  );
};

const StRatingWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  line-height: ${props => (props.scale * 1.4).toFixed(1)}rem;
  font-size: ${props => props.scale || '1.8'}rem;
`;

const StStarIcon = styled(AiFillStar)`
  margin-right: 0.4rem;
  color: ${props => props.theme.main};
  font-size: ${props => (props.scale * 1.2).toFixed(1) + 'rem'};
`;

const StRatingGrade = styled.span`
  font-weight: 600;
`;

const StReviewCount = styled.span`
  padding-left: 0.4rem;
  font-weight: 400;
  color: #717171;
`;

export default Rating;
