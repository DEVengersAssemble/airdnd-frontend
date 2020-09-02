import React from 'react';
import { StSmallSpan } from './FilterPopup';
import Toggle from '../Global/Toggle';

const Refund = ({ toggle, handleClick }) => {
  return (
    <>
      <StSmallSpan>
        유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시
      </StSmallSpan>
      <Toggle checked={toggle} handleClick={handleClick} />
    </>
  );
};

export default Refund;
