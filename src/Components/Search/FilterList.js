import React from 'react';
import Button from '../Global/Button';
import styled from 'styled-components';
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

export const FilterList = ({ popupState, dispatch }) => {
  return (
    <StWrapper>
      <FilterButtonContainer
        name="refund"
        text="유연한 환불 정책"
        popupState={popupState}
        dispatch={dispatch}
      >
        <RefundPopup size="350px" />
      </FilterButtonContainer>
      <FilterButtonContainer
        name="roomType"
        text="숙소 유형"
        popupState={popupState}
        dispatch={dispatch}
      >
        <RoomTypePopup size="365px" />
      </FilterButtonContainer>
      <FilterButtonContainer
        name="price"
        text="요금"
        popupState={popupState}
        dispatch={dispatch}
      >
        <PricePopup size="430px" />
        <SetDatePopup size="350px" />
      </FilterButtonContainer>
      <FilterButtonContainer
        name="modal"
        text="필터 추가하기"
        popupState={popupState}
        dispatch={dispatch}
      />
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
