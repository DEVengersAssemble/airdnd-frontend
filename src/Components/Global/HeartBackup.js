import React from 'react';
import styled, { css } from 'styled-components';
import { BsHeart, BsHeartFill as FillHeart } from 'react-icons/bs';

const hover = css`
  &:hover {
    background: #eeeeee;
  }
`;

const HeartLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 2rem;
  ${hover}
`;

const HeartInput = styled.input`
  display: none;
`;

const HeartIcon = styled.span`
  position: absolute;
  top: 1.1rem;
  left: 1rem;
  ${props =>
    props.checked &&
    css`
      color: #ff385c;
    `}
`;

const EmptyHeartBorder = styled(BsHeart)`
  position: absolute;
  right: 0.05rem;
`;

const EmptyHeartBackground = styled(FillHeart)`
  color: white;
`;

const EmptyHeart = () => {
  return (
    <>
      <EmptyHeartBackground />
      <EmptyHeartBorder />
    </>
  );
};

const SearchHeart = ({ check, onClickSearchHeart }) => {
  return (
    <HeartLabel>
      <HeartInput type="checkbox" onClick={onClickSearchHeart} />
      <HeartIcon checked={check}>
        {check ? <FillHeart /> : <EmptyHeart />}
      </HeartIcon>
    </HeartLabel>
  );
};

const RecentSearchHeart = ({ rsCheck, onClickRsHeart }) => {
  return (
    <HeartLabel>
      <HeartInput type="checkbox" onClick={onClickRsHeart} />
      <HeartIcon checked={rsCheck}>
        {rsCheck ? <FillHeart /> : <EmptyHeart />}
      </HeartIcon>
    </HeartLabel>
  );
};

export { SearchHeart, RecentSearchHeart };
