import React from 'react';
import { PopupBox } from '../Global/Popup';
import styled from 'styled-components';
import theme from '../../style/theme';
import Button from '../Global/Button';
import Toggle from '../Global/Toggle';

const RefundPopup = () => {
  return (
    <FilterPopup>
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
      <StPopup popupState={popupState} left={left}>
        {children}
        <StBtnWrapper>
          <Button btnType="underlined">지우기</Button>
          <Button btnType="color" color="black">
            저장
          </Button>
        </StBtnWrapper>
      </StPopup>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  position: relative;
`;

const StPopup = styled(PopupBox)`
  background: cornsilk;
  top: -1rem;
  padding: 0;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${theme.shadow};
  padding: 2rem;
`;

const StContentWrapper = styled.div`
  padding: 2rem;
  display: flex;

  &.refund {
    height: 100px;
    padding-top: 3rem;
  }
`;

const StSpan = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-right: 3rem;
`;

export { RefundPopup, RoomTypePopup, PricePopup, SetDatePopup };
