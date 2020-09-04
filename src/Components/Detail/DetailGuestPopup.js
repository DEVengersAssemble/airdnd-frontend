import React from 'react';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { GoDash } from 'react-icons/go';
import Popup from '../Global/Popup';
import Button from '../Global/Button';

const DetailGuestPopup = ({
  popup,
  onOpenPopup,
  popupState,
  onClosePopup,
  increaseGuestCount,
  decreaseGuestCount,
  guests,
  displayName,
  ...rest
}) => {
  const { adult, child, infant } = guests;

  return (
    <StGuests tabIndex="0" ref={popup} onClick={onOpenPopup} {...rest}>
      {displayName && <StName>인원</StName>}
      <StContent>
        게스트 {adult + child > 0 ? adult + child : 0}명
        {!!infant && infant > 0 && `, 유아 ${infant}명`}
      </StContent>
      <StPopup popupState={popupState} top="57px" left="-2px">
        <ul>
          <StCountGuest>
            <div>성인</div>
            <StCountBtn
              btnType="circle"
              onClick={() => decreaseGuestCount(guests, 'adult')}
            >
              <GoDash />
            </StCountBtn>
            <div>{adult}</div>
            <StCountBtn
              btnType="circle"
              onClick={() => increaseGuestCount(guests, 'adult')}
            >
              <GoPlus />
            </StCountBtn>
          </StCountGuest>
          <StCountGuest>
            <div>
              어린이<div>2~12세</div>
            </div>
            <StCountBtn
              btnType="circle"
              onClick={() => decreaseGuestCount(guests, 'child')}
            >
              <GoDash />
            </StCountBtn>
            <div>{child}</div>
            <StCountBtn
              btnType="circle"
              onClick={() => increaseGuestCount(guests, 'child')}
            >
              <GoPlus />
            </StCountBtn>
          </StCountGuest>
          <StCountGuest>
            <div>
              유아<div>2세 미만</div>
            </div>
            <StCountBtn
              btnType="circle"
              onClick={() => decreaseGuestCount(guests, 'infant')}
            >
              <GoDash />
            </StCountBtn>
            <div>{infant}</div>
            <StCountBtn
              btnType="circle"
              onClick={() => increaseGuestCount(guests, 'infant')}
            >
              <GoPlus />
            </StCountBtn>
          </StCountGuest>
        </ul>
        <StCloseBtn
          btnType="underlined"
          fontWeight="600"
          onClick={onClosePopup}
        >
          닫기
        </StCloseBtn>
      </StPopup>{' '}
    </StGuests>
  );
};

const StGuests = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  padding: 26px 12px 10px;
  margin-top: -1px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  outline: none;

  :focus {
    margin-top: -1px;
    /* border: 2px solid ${({ theme }) => theme.color.black}; */
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.black};
    border-radius: 8px;
    border: 1px solid rgba(0 0 0 0);
    z-index: 1;
    /* padding: 25px 11px 10px; */

    & > div:first-child {
      /* top: 9px;
      left: 11px; */
    }
  }
`;

const StName = styled.div`
  position: absolute;
  top: 10px;
  left: 12px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;

const StContent = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StPopup = styled(Popup)`
  width: calc(100% + 4px);
  padding: 0 16px 16px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px,
    rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
`;

const StCountGuest = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px 0;
  font-weight: 500;

  & > div:first-child {
    margin-right: auto;

    div {
      padding-top: 4px;
      line-height: 18px;
      font-size: 14px;
      font-weight: 400;
    }
  }
  & > div:nth-of-type(2) {
    width: 40px;
    text-align: center;
  }
`;

const StCountBtn = styled(Button)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.color.darkGray};

  :hover {
    border-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.black};
  }

  svg {
    font-size: 14px;
  }
`;

const StCloseBtn = styled(Button)`
  float: right;
  padding: 10px;
  margin-right: -5px;
`;

export default DetailGuestPopup;
