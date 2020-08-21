/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
const StSearchGuestsPopupWrapper = styled.div`
  position: relative;
`;

const StSearchGuestsPopup = styled(Popup)`
  top: 46px;
  right: 0px;
  border-radius: 20px;
  padding: 20px;
  min-width: 400px;
  min-height: 240px;
`;

const StSearchGuestsList = styled.ul`
  display: block;
  flex-direction: column;
  width: 100%;
`;

const StSearchGuestsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightblue;
  width: 100%;
`;

const StSearchGuestsTextWrapper = styled.div`
  background: lightgreen;
`;

const StSearchGuestsType = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const StSearchGuestsTypeAge = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StSearchGuestsCountWrapper = styled.div`
  background: lightpink;
`;

const StSearchGuestsCountBtn = styled(Button)``;

const SearchGuestsPopup = forwardRef(
  ({ type, searchData, increaseGuestCount }, ref) => {
    const { adult, child, infant } = searchData.guests;

    return (
      <StSearchGuestsPopupWrapper ref={ref}>
        <StSearchGuestsPopup popupState={type === 'guests'}>
          <StSearchGuestsList>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>성인</StSearchGuestsType>
                <StSearchGuestsTypeAge>만 13세 이상</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn btnType="circle">
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                {adult}
                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() => increaseGuestCount(searchData.guests, 'adult')}
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
          </StSearchGuestsList>
          <StSearchGuestsList>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>어린이</StSearchGuestsType>
                <StSearchGuestsTypeAge>2~12세</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn btnType="circle">
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                {child}
                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() => increaseGuestCount(searchData.guests, 'child')}
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
          </StSearchGuestsList>
          <StSearchGuestsList>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>유아</StSearchGuestsType>
                <StSearchGuestsTypeAge>2세 미만</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn btnType="circle">
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                {infant}
                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() =>
                    increaseGuestCount(searchData.guests, 'infant')
                  }
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
          </StSearchGuestsList>
        </StSearchGuestsPopup>
      </StSearchGuestsPopupWrapper>
    );
  },
);

export default SearchGuestsPopup;
