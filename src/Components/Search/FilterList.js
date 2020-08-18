import React, { useState } from 'react';
import Button from '../Global/Button';
import styled, { css } from 'styled-components';
import {
  RefundPopup,
  RoomTypePopup,
  PricePopup,
  SetDatePopup,
} from './FilterPopup';

const FilterButton = ({ children }) => {
  // const onClick = () => {

  // }

  return <FilterBtn btnType="oval">{children}</FilterBtn>;
};

const FilterList = () => {
  return (
    <StWrapper>
      <StFilterWrapper>
        <FilterButton>유연한 환불 정책</FilterButton>
        <RefundPopup size="350px" />
      </StFilterWrapper>
      <StFilterWrapper>
        <FilterButton>숙소 유형</FilterButton>
        <RoomTypePopup size="365px" />
      </StFilterWrapper>
      <StFilterWrapper>
        <FilterButton>요금</FilterButton>
        <PricePopup size="430px" />
        <SetDatePopup size="350px" />
      </StFilterWrapper>
      <FilterButton>필터 추가하기</FilterButton>
    </StWrapper>
  );
};

const FilterBtn = styled(Button)`
  margin: 2rem 1rem 2rem 0;
  font-size: 14px;
`;

const StWrapper = styled.div`
  display: flex;
`;

const StFilterWrapper = styled.div`
  position: relative;
`;

export default FilterList;
