import React from 'react';
import styled, { css } from 'styled-components';
import { IoMdHeartEmpty, IoMdHeart as HeartFill } from 'react-icons/io';

// 공통 라벨 스타일
const HeartLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
`;

// 공통 인풋 스타일
const HeartInput = styled.input`
  display: none;
`;

// checked일 때 하트 색상
const checked = css`
  ${props =>
    props.checked &&
    css`
      color: #ff385c;
    `}
`;

// 공통 아이콘 스타일
const HeartIcon = styled.div`
  position: absolute;
  ${checked}
  cursor: pointer;
`;

const HeartEmptyBorder = styled(IoMdHeartEmpty)`
  position: absolute;
  color: black;
`;

const HeartEmptyBackground = styled(HeartFill)`
  color: white;
  /* color: blue; */
`;

const HeartEmpty = () => {
  return (
    <>
      <HeartEmptyBorder />
      <HeartEmptyBackground />
    </>
  );
};

const Heart = ({ hover, borderColor, check, onHeart }) => {
  return (
    <HeartLabel hover="hover">
      <HeartInput type="checkbox" checked={check} onClick={onHeart} />
      <HeartIcon checked={check}>
        {check ? <HeartFill /> : <HeartEmpty borderColor={borderColor} />}
      </HeartIcon>
    </HeartLabel>
  );
};

export default Heart;
