import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Popup from '../Global/Popup';
import DetailCalendarContainer from '../../Containers/Detail/DetailCalendarContainer';

const DetailPopupContainer = ({
  dateDiff,
  popupState,
  setPopupState,
  checkPopupRef,
  checkin,
  checkout,
}) => {
  const onClosePopup = ({ target }) => {
    console.log('@@@@close popup', target);
    if (
      checkPopupRef.current.contains(target) ||
      target.textContent === '예약 가능 여부 보기' ||
      target.textContent === '닫기'
    )
      return;
    setPopupState(false);
  };

  useEffect(() => {
    console.log('popup 나타남');
    window.addEventListener('click', onClosePopup);
    return () => {
      window.removeEventListener('click', onClosePopup);
    };
  }, []);

  // useEffect(() => {
  //   setPopupState(false);
  // }, [dateDiff]);

  // if (!popupState) return '';

  return (
    <StPopup popupState={popupState} onClosePopup={onClosePopup}>
      <StPopupTopWrapper>
        <StTextWrapper>
          <StTitle>날짜 선택</StTitle>
          <StSubText>여행 날짜를 입력하여 정확한 요금을 확인하세요.</StSubText>
        </StTextWrapper>
        <StInputsWrapper>
          <StPopupCheckIn>
            <StName>체크인</StName>
            <StContent>{checkin ? checkin : '날짜 추가'}</StContent>
          </StPopupCheckIn>
          <StPopupCheckOut>
            <StName>체크아웃</StName>
            <StContent>{checkout ? checkout : '날짜 추가'}</StContent>
          </StPopupCheckOut>
        </StInputsWrapper>
      </StPopupTopWrapper>
      <StDetailCalendarContainer />
    </StPopup>
  );
};

const CheckPopup = ({
  checkPopupRef,
  checkin,
  checkout,
  dateDiff,
  popupState,
  setPopupState,
  onOpenPopup,
}) => {
  return (
    <StCheckWrapper tabIndex="0" ref={checkPopupRef} onClick={onOpenPopup}>
      <StCheckIn>
        <StName>체크인</StName>
        <StContent>{checkin ? checkin : '날짜 추가'}</StContent>
      </StCheckIn>
      <StCheckOut>
        <StName>체크아웃</StName>
        <StContent>{checkout ? checkout : '날짜 추가'}</StContent>
      </StCheckOut>
      {popupState && (
        <DetailPopupContainer
          dateDiff={dateDiff}
          setPopupState={setPopupState}
          checkPopupRef={checkPopupRef}
          checkin={checkin}
          checkout={checkout}
        />
      )}
      {/* <StPopup popupState={popupState}>
        <StPopupTopWrapper>
          <StTextWrapper>
            <StTitle>날짜 선택</StTitle>
            <StSubText>
              여행 날짜를 입력하여 정확한 요금을 확인하세요.
            </StSubText>
          </StTextWrapper>
          <StInputsWrapper>
            <StPopupCheckIn>
              <StName>체크인</StName>
              <StContent>{checkin ? checkin : '날짜 추가'}</StContent>
            </StPopupCheckIn>
            <StPopupCheckOut>
              <StName>체크아웃</StName>
              <StContent>{checkout ? checkout : '날짜 추가'}</StContent>
            </StPopupCheckOut>
          </StInputsWrapper>
        </StPopupTopWrapper>
        <StDetailCalendarContainer />
      </StPopup> */}
    </StCheckWrapper>
  );
};

export default CheckPopup;

const StCheckWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  outline: none;
`;

const commonWrapper = css`
  position: relative;
  width: 50%;
  height: 56px;
  padding: 26px 12px 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

const StCheckIn = styled.div`
  ${commonWrapper}
  border-right: none;
  border-top-left-radius: 8px;
`;

const StCheckOut = styled.div`
  ${commonWrapper}
  border-top-right-radius: 8px;
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
  position: absolute;
  padding: 24px 32px 16px;
  width: 688px;
  min-height: 460px;
  top: -24px;
  right: -32px;
  border: none;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  z-index: 1;
`;

const StPopupTopWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const StTextWrapper = styled.div``;

const StTitle = styled.strong`
  display: block;
  padding-bottom: 8px;
  font-size: 2.2rem;
  font-weight: 600;
`;

const StSubText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StInputsWrapper = styled.div`
  display: flex;
  flex: 0 0 calc(((100vw - 256px) / 12) * 5 - 52px) !important;
  max-width: 330.8px;
  min-width: 270px;
  margin-left: 24px;
  box-shadow: ${({ theme }) => theme.color.gray} 0px 0px 0px 1px inset;
  border-radius: 8px;
`;

const StPopupCheckIn = styled(StCheckIn)`
  border-bottom-left-radius: 8px;
`;
const StPopupCheckOut = styled(StCheckOut)`
  border-bottom-right-radius: 8px;
`;

const StDetailCalendarContainer = styled(DetailCalendarContainer)`
  /* background-color: lightgrey; */
  margin-left: -9px;
  width: calc(100% + 18px);
`;
