import React from 'react';
import Popup from '../Global/Popup';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';
import Button from '../Global/Button';
import Toggle from '../Global/Toggle';
import ModalFooter from '../Global/ModalFooter';

const RefundPopup = popupState => {
  return (
    <FilterPopup popupState={popupState}>
      <StContentWrapper className="refund">
        <StSpan>유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시</StSpan>
        <Toggle />
      </StContentWrapper>
    </FilterPopup>
  );
};

const RoomTypePopup = () => {
  return (
    <FilterPopup left="50rem">
      <div></div>
    </FilterPopup>
  );
};

const PricePopup = () => {
  return (
    <FilterPopup left="50rem">
      <div></div>
    </FilterPopup>
  );
};

const SetDatePopup = () => {
  return (
    <FilterPopup left="50rem">
      <div></div>
    </FilterPopup>
  );
};

const FilterPopup = ({ children, popupState, left }) => {
  return (
    <StWrapper>
      <StPopup
        top="-1rem"
        left={left}
        padding="0"
        popupState={popupState}
        style={style}
      >
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StContentWrapper = styled.div`
  padding: 2rem;
  display: flex;

  &.refund {
    height: 165px;
    padding-top: 3rem;
  }
`;

const StSpan = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-right: 3rem;
`;

const StFooter = styled(ModalFooter)`
  padding: 1rem 2rem 1rem 1rem;
`;

export { RefundPopup, RoomTypePopup, PricePopup, SetDatePopup };
