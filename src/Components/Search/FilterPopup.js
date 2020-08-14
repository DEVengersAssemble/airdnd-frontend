import React from 'react';
import Popup from '../Global/Popup';
import styled from 'styled-components';
import Button from '../Global/Button';
import Toggle from '../Global/Toggle';
import ModalFooter from '../Global/ModalFooter';

const RefundPopup = popupState => {
  return (
    <FilterPopup popupState={false}>
      <StContentWrapper className="refund">
        <StSmallSpan>
          유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시
        </StSmallSpan>
        <Toggle />
      </StContentWrapper>
    </FilterPopup>
  );
};

const RoomTypePopup = popupState => {
  return (
    <FilterPopup left="14rem" popupState={false}>
      <div></div>
    </FilterPopup>
  );
};

const PricePopup = popupState => {
  return (
    <FilterPopup left="10rem" popupState={false}>
      <div></div>
    </FilterPopup>
  );
};

const SetDatePopup = popupState => {
  return (
    <StWrapper>
      <StPopup left="24rem" popupState={false}>
        <StContentWrapper className="setDate">
          <StLargeSpan>요금을 확인하려면 여행 날짜를 입력하세요</StLargeSpan>
          <Button btnType="color" color="black">
            날짜 입력
          </Button>
        </StContentWrapper>
      </StPopup>
    </StWrapper>
  );
};

const FilterPopup = ({ children, popupState, left }) => {
  return (
    <StWrapper>
      <StPopup left={left} popupState={popupState} style={style}>
        {children}
        <StFooter align="space-between" style={style}>
          <Button btnType="underlined" padding="1rem" fontSize="1.6rem">
            지우기
          </Button>
          <Button btnType="color" color="black" fontSize="1.4rem">
            저장
          </Button>
        </StFooter>
      </StPopup>
    </StWrapper>
  );
};

const style = {};

const StWrapper = styled.div`
  position: relative;
`;

const StPopup = styled(Popup)`
  width: 350px;
  top: -1rem;
  padding: 0;
`;

const StContentWrapper = styled.div`
  padding: 2rem;

  &.refund {
    display: flex;
    height: 165px;
    padding-top: 3rem;
  }

  &.setDate {
    height: 110px;
    > * {
      margin-bottom: 1.3rem;
      display: block;
    }
  }
`;

const StSmallSpan = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-right: 3rem;
`;

const StLargeSpan = styled.span`
  font-size: 1.6rem;
  line-height: 2rem;
  margin-right: 3rem;
`;

const StFooter = styled(ModalFooter)`
  padding: 1.5rem 1.5rem 1.5rem 0.5rem;
`;

export { RefundPopup, RoomTypePopup, PricePopup, SetDatePopup };
