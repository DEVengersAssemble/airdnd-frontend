/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';
import ModalFooter from '../Global/ModalFooter';
import Button from '../Global/Button';
import {
  BookingFilter,
  CounterFilter,
  MoreFilters,
  CheckboxFilter,
  PriceFilter,
  RoomTypeFilter,
  RefundFilter,
} from './Filter';

const FilterModal = ({
  popupState,
  viewState,
  filterCondition,
  filter,
  seemore,
  range,
  setRange,
  onSeemore,
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
      setModalState={() => onClose('modal')}
      header
      title="필터 추가하기"
    >
      <StFilterList>
        {viewState === 'map' && <RefundFilter />}
        {viewState === 'map' && <RoomTypeFilter />}
        {viewState === 'map' && (
          <PriceFilter range={range} setRange={setRange} />
        )}
        {instantBooking && (
          <BookingFilter filter={filter} onToggle={onToggle} />
        )}
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
            seemore={seemore.convenience}
            onSeemore={() => onSeemore('convenience')}
          />
        )}
        {facilityList && (
          <CheckboxFilter
            title="시설"
            listName="facilityList"
            list={facilityList}
            filter={filter.facilityList}
            onCheck={onCheck}
            seemore={seemore.facility}
            onSeemore={() => onSeemore('facility')}
          />
        )}
        {hostLangList && (
          <CheckboxFilter
            title="호스트 언어"
            listName="hostLangList"
            list={hostLangList}
            filter={filter.hostLangList}
            onCheck={onCheck}
            seemore={seemore.hostLang}
            onSeemore={() => onSeemore('hostLang')}
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
  width: 720px;
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

const StFooter = styled(ModalFooter)`
  padding: 1.5rem 2rem 1.5rem 0.5rem;
`;

export default FilterModal;
