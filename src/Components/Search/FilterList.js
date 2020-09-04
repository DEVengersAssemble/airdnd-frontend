import React from 'react';
import Button from '../Global/Button';
import styled, { css } from 'styled-components';
import { FilterButtonContainer } from '../../Containers/Search/FilterListContainer';
import { MapButton } from './MapButton';
import SetDatePopupContainer from '../../Containers/Search/SetDatePopupContainer';
import PricePopupContainer from '../../Containers/Search/PricePopupContainer';
import RoomTypePopupContainer from '../../Containers/Search/RoomTypePopupContainer';
import RefundPopupContainer from '../../Containers/Search/RefundPopupContainer';

export const FilterButton = ({ children, text, onClick, isApplied }) => {
  return (
    <StFilterWrapper>
      <FilterBtn btnType="oval" onClick={onClick} isApplied={isApplied}>
        {text}
      </FilterBtn>
      {children}
    </StFilterWrapper>
  );
};

export const FilterList = ({ mapState, onShowMap, dateDiff }) => {
  return (
    <StWrapper>
      <FilterButtonContainer name="refund" text="유연한 환불 정책">
        {/* <RefundPopupContainer /> */}
      </FilterButtonContainer>
      <FilterButtonContainer name="roomType" text="숙소 유형">
        {/* <RoomTypePopupContainer /> */}
      </FilterButtonContainer>
      <FilterButtonContainer name="price" text="요금">
        {/* {dateDiff ? <PricePopupContainer /> : <SetDatePopupContainer />} */}
      </FilterButtonContainer>
      <FilterButtonContainer
        name="modal"
        text="필터 추가하기"
      ></FilterButtonContainer>
      <MapButton mapState={mapState} onShowMap={onShowMap} />
    </StWrapper>
  );
};

const FilterBtn = styled(Button)`
  margin-right: 1rem;
  font-size: 14px;
  ${({ isApplied, theme }) =>
    isApplied &&
    css`
      border: 2px solid ${theme.color.black};
      background: ${theme.color.lightGray};
      &:hover {
        border: 2px solid ${theme.color.black};
      }
    `}
`;

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 3rem 0 2rem;
`;

const StFilterWrapper = styled.div`
  position: relative;
`;
