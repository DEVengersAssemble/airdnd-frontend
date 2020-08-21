import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Global/Modal';
import ModalFooter from '../Global/ModalFooter';
import Button from '../Global/Button';
import Toggle from '../Global/Toggle';
import { MinusButton, PlusButton } from '../Global/CounterButton';
import Checkbox from '../Global/Checkbox';
import { GrFormDown } from 'react-icons/gr';

const ToggleFilter = ({ onToggle, filter }) => {
  return (
    <StFilterWrapper direction="row">
      <StContentWrapper direction="column">
        <StLargeSpan>즉시 예약</StLargeSpan>
        <StSmallSpan>
          호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소
        </StSmallSpan>
      </StContentWrapper>
      <Toggle
        handleClick={() => onToggle('instantBooking', !filter.instantBooking)}
        checked={filter.instantBooking}
      />
    </StFilterWrapper>
  );
};

const MoreFilters = ({ onToggle, filter }) => {
  return (
    <StFilterWrapper>
      <StTitle>편의시설 더 보기</StTitle>
      <StContentWrapper align="center" margin="0 0 2rem">
        <StContentWrapper direction="column">
          <StLargeSpan>슈퍼호스트</StLargeSpan>
          <StSmallSpan>슈퍼호스트의 숙소에 머물러보세요</StSmallSpan>
          <StLink>더 알아보기</StLink>
        </StContentWrapper>
        <Toggle
          checked={filter.convenience}
          handleClick={() => onToggle('convenience', !filter.convenience)}
        />
      </StContentWrapper>
      <StLargeSpan>장애인 편의시설</StLargeSpan>
      <StSmallSpan>
        원활한 이동에 필요한 조건을 갖춘 숙소를 찾아보세요
      </StSmallSpan>
      <StLink>숙소에 갖춰진 편의시설을 선택하세요.</StLink>
    </StFilterWrapper>
  );
};

const Counter = ({ onIncrease, onDecrease, filter, name }) => {
  return (
    <StContentWrapper align="center" width="10rem">
      <MinusButton
        onClick={() => onDecrease(name, filter - 1)}
        disabled={filter <= 0}
      />
      <StLargeSpan>{filter}</StLargeSpan>
      <PlusButton
        onClick={() => onIncrease(name, filter + 1)}
        disabled={filter >= 15}
      />
    </StContentWrapper>
  );
};

const CounterFilter = ({ onIncrease, onDecrease, filter }) => {
  return (
    <StFilterWrapper>
      <StTitle>침실과 침대</StTitle>
      <StContentWrapper align="center" margin="0 0 2rem">
        <StLargeSpan>침대 수</StLargeSpan>
        <Counter
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          filter={filter.bed}
          name="bed"
        />
      </StContentWrapper>
      <StContentWrapper align="center" margin="0 0 2rem">
        <StLargeSpan>침실 수</StLargeSpan>
        <Counter
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          filter={filter.room}
          name="room"
        />
      </StContentWrapper>
      <StContentWrapper align="center">
        <StLargeSpan>욕실 수</StLargeSpan>
        <Counter
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          filter={filter.bathroom}
          name="bathroom"
        />
      </StContentWrapper>
    </StFilterWrapper>
  );
};

const CheckboxFilter = ({ title, listName, list, filter, onCheck }) => {
  return (
    <StFilterWrapper>
      <StTitle>{title}</StTitle>
      <StCheckboxList>
        {list.map((name, i) => (
          <StCheckbox
            key={i}
            value
            checked={filter[name]}
            onClick={() => onCheck(listName, name, !filter[name])}
          >
            <StLargeSpan>{name}</StLargeSpan>
          </StCheckbox>
        ))}
      </StCheckboxList>
      <Button
        btnType="underlined"
        width="fit-content"
        padding="1rem 0 0"
        hover="background: none"
      >
        편의시설 모두 보기
        <GrFormDown />
      </Button>
    </StFilterWrapper>
  );
};

const FilterModal = ({
  popupState,
  filterCondition,
  filter,
  onClose,
  onSave,
  onCheck,
  onReset,
  onToggle,
  onIncrease,
  onDecrease,
}) => {
  const {
    instantBooking,
    bedroom,
    convenience,
    convenienceList,
    facilityList,
    hostLangList,
  } = filterCondition;

  return (
    <StModal
      modalState={popupState}
      setModalState={onClose}
      header
      title="필터 추가하기"
    >
      <StFilterList>
        {instantBooking && <ToggleFilter filter={filter} onToggle={onToggle} />}
        {bedroom && (
          <CounterFilter
            filter={filter.bedroom}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        )}
        {convenience && <MoreFilters filter={filter} onToggle={onToggle} />}
        {convenienceList && (
          <CheckboxFilter
            title="편의 시설"
            listName="convenienceList"
            list={convenienceList}
            filter={filter.convenienceList}
            onCheck={onCheck}
          />
        )}
        {facilityList && (
          <CheckboxFilter
            title="시설"
            listName="facilityList"
            list={facilityList}
            filter={filter.facilityList}
            onCheck={onCheck}
          />
        )}
        {hostLangList && (
          <CheckboxFilter
            title="호스트 언어"
            listName="hostLangList"
            list={hostLangList}
            filter={filter.hostLangList}
            onCheck={onCheck}
          />
        )}
      </StFilterList>
      <StFooter align="space-between">
        <Button btnType="underlined" hover="background: none" onClick={onReset}>
          전체 삭제
        </Button>
        <Button
          btnType="color"
          color="black"
          hover="background: #000"
          padding="1.5rem 2rem"
          transition
          onClick={onSave}
        >
          <span>300개 이상</span>의 숙소 보기
        </Button>
      </StFooter>
    </StModal>
  );
};

const StModal = styled(Modal)`
  width: 780px;
  height: 92vh;
`;

const StFilterList = styled.ul`
  padding: 3rem 5rem 0;
  display: flex;
  flex-direction: column;
  max-height: calc(92vh - 144px);
  overflow: auto;

  & li:nth-last-child(1) {
    border: none;
  }
`;

const StFilterWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: 4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.shadow};
`;

const StTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const StContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction || 'row'};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width && '10rem'};
`;

const spanStyle = css`
  display: block;
`;

const StSmallSpan = styled.span`
  font-size: 1.4rem;
  ${spanStyle};
`;

const StLargeSpan = styled.span`
  font-size: 1.6rem;
  ${spanStyle};
`;

const StLink = styled.a`
  font-size: 1.4rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.darkGray};
  margin-top: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const StCheckboxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StCheckbox = styled(Checkbox)`
  width: 30rem;
  margin: 0 4rem 1rem 0;
`;

const StFooter = styled(ModalFooter)`
  padding: 1.5rem 2rem 1.5rem 0.5rem;
`;

export default FilterModal;
