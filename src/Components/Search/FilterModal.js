import React from 'react';
import theme from '../../style/theme';
import styled, { css } from 'styled-components';
import Modal from '../Global/Modal';
import ModalFooter from '../Global/ModalFooter';
import Button from '../Global/Button';
import Toggle from '../Global/Toggle';
import { MinusButton, PlusButton } from '../Global/CounterButton';

const Counter = () => {
  return (
    <StContentWrapper align="center">
      <MinusButton />
      <StLargeSpan>0</StLargeSpan>
      <PlusButton />
    </StContentWrapper>
  );
};

const ToggleFilter = () => {
  return (
    <StFilterWrapper direction="row">
      <StContentWrapper direction="column">
        <StLargeSpan>즉시 예약</StLargeSpan>
        <StSmallSpan>
          호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소
        </StSmallSpan>
      </StContentWrapper>
      <Toggle />
    </StFilterWrapper>
  );
};

const CounterFilter = () => {
  return (
    <StFilterWrapper>
      <StTitle>침실과 침대</StTitle>
      <StContentWrapper align="center" margin>
        <StLargeSpan>침대 수</StLargeSpan>
        <Counter />
      </StContentWrapper>
      <StContentWrapper align="center" margin>
        <StLargeSpan>침실 수</StLargeSpan>
        <Counter />
      </StContentWrapper>
      <StContentWrapper align="center" margin>
        <StLargeSpan>욕실 수</StLargeSpan>
        <Counter />
      </StContentWrapper>
    </StFilterWrapper>
  );
};

const CheckboxFilter = () => {};

const FilterModal = () => {
  return (
    <StModal modalState={true} header title="필터 추가하기">
      <StFilterList>
        <ToggleFilter />
        <CounterFilter />
      </StFilterList>
      <StFooter align="space-between">
        <Button btnType="underlined" hover="background: none">
          전체 삭제
        </Button>
        <Button
          btnType="color"
          color="black"
          hover="background: #000"
          padding="1.5rem 2rem"
          transition
        >
          <span>300개 이상</span>의 숙소 보기
        </Button>
      </StFooter>
    </StModal>
  );
};

const StModal = styled(Modal)`
  width: 780px;
  height: 920px;
`;

const StFilterList = styled.ul`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
`;

const StFilterWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: 4rem 0;
  border-bottom: 1px solid ${theme.shadow};
`;

const StTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
`;

const StContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction || 'row'};
  margin-top: ${({ margin }) => margin && '2rem'};
`;

const spanStyle = css`
  display: block;
  margin-bottom: 0.3rem;
`;

const StSmallSpan = styled.span`
  font-size: 1.4rem;
  ${spanStyle};
`;

const StLargeSpan = styled.span`
  font-size: 1.6rem;
  ${spanStyle};
`;

const StFooter = styled(ModalFooter)`
  padding: 1.5rem 2rem 1.5rem 0.5rem;
`;

export default FilterModal;
