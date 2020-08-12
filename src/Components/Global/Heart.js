import React from 'react';
import styled, { css } from 'styled-components';
import { BsHeart, BsHeartFill as FillHeart } from 'react-icons/bs';

const HeartBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const HeartLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 2rem;
  &:hover {
    background: #eeeeee;
  }
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

// eslint-disable-next-line react/prop-types
const Heart = ({ check, onClickHeart }) => {
  return (
    <HeartBlock>
      <HeartLabel>
        <HeartInput type="checkbox" onClick={onClickHeart} />
        <HeartIcon checked={check}>
          {check ? <FillHeart /> : <EmptyHeart />}
        </HeartIcon>
      </HeartLabel>
    </HeartBlock>
  );
};

export default Heart;
