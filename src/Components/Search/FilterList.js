import React from 'react';
import Button from '../Global/Button';
import styled, { css } from 'styled-components';
import {
  RefundPopup,
  RoomTypePopup,
  PricePopup,
  SetDatePopup,
} from './FilterPopup';
import { FilterButtonContainer } from '../../Containers/Search/FilterListContainer';

export const FilterButton = ({ children, text, onClick }) => {
  return (
    <StFilterWrapper>
      <FilterBtn btnType="oval" onClick={onClick}>
        {text}
      </FilterBtn>
      {children}
    </StFilterWrapper>
  );
};

export const FilterList = () => {
  return (
    <StWrapper>
      <FilterButtonContainer text="유연한 환불 정책">
        <RefundPopup size="350px" />
      </FilterButtonContainer>
      <FilterButtonContainer text="숙소 유형">
        <RoomTypePopup size="365px" />
      </FilterButtonContainer>
      <FilterButtonContainer text="요금">
        <PricePopup size="430px" />
        <SetDatePopup size="350px" />
      </FilterButtonContainer>
      <FilterButtonContainer text="필터 추가하기" />
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
