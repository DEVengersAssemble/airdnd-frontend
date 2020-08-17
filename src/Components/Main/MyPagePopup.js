import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Popup from '../Global/Popup';

const StMyPagePopupWrapper = styled.div`
  position: relative;
`;

const StMyPagePopup = styled(Popup)`
  right: 0px;
  width: 250px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};
`;

const StMyPageOptionItem = styled.li``;

const StMyPageOptionList = styled.ul`
  ${({ isLoggedIn }) =>
    isLoggedIn
      ? css`
          & ${StMyPageOptionItem}:nth-child(-n+3) {
            font-weight: 600;
          }
          & ${StMyPageOptionItem}:nth-child(3n)::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: ${({ theme }) => theme.color.line};
            margin-top: 0.6rem;
            margin-bottom: 0.6rem;
          }
        `
      : css`
          & ${StMyPageOptionItem}:nth-child(1) {
            font-weight: 600;
          }
          & ${StMyPageOptionItem}:nth-child(2)::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: ${({ theme }) => theme.color.line};
            margin-top: 0.6rem;
            margin-bottom: 0.6rem;
          }
        `}
`;

const StMyPageOptionLink = styled.a`
  display: block;
  padding: 1rem 0 1rem 2rem;
  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

const MyPagePopup = ({ popupVisible, closePopup, isLoggedIn }) => {
  const popupRef = useRef();
  const handlePopup = ({ target }) => {
    if (popupVisible && !popupRef.current.contains(target)) {
      closePopup();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handlePopup);
    return () => {
      document.removeEventListener('click', handlePopup);
    };
  }, [handlePopup]);
  return (
    <StMyPagePopupWrapper ref={popupRef}>
      <StMyPagePopup popupState={popupVisible} right="0" padding="1rem 0">
        <StMyPageOptionList isLoggedIn={isLoggedIn}>
          {!isLoggedIn && (
            <>
              <StMyPageOptionItem>
                <StMyPageOptionLink>로그인</StMyPageOptionLink>
              </StMyPageOptionItem>
              <StMyPageOptionItem>
                <StMyPageOptionLink>회원가입</StMyPageOptionLink>
              </StMyPageOptionItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <StMyPageOptionItem>
                <StMyPageOptionLink>메시지</StMyPageOptionLink>
              </StMyPageOptionItem>
              <StMyPageOptionItem>
                <StMyPageOptionLink>여행</StMyPageOptionLink>
              </StMyPageOptionItem>
              <StMyPageOptionItem>
                <StMyPageOptionLink>저장목록</StMyPageOptionLink>
              </StMyPageOptionItem>
            </>
          )}

          <StMyPageOptionItem>
            <StMyPageOptionLink>숙소 호스트 되기</StMyPageOptionLink>
          </StMyPageOptionItem>
          <StMyPageOptionItem>
            <StMyPageOptionLink>체험 호스팅하기</StMyPageOptionLink>
          </StMyPageOptionItem>
          {isLoggedIn && (
            <StMyPageOptionItem>
              <StMyPageOptionLink>계정</StMyPageOptionLink>
            </StMyPageOptionItem>
          )}
          <StMyPageOptionItem>
            <StMyPageOptionLink>도움말</StMyPageOptionLink>
          </StMyPageOptionItem>
          {isLoggedIn && (
            <StMyPageOptionItem>
              <StMyPageOptionLink>로그아웃</StMyPageOptionLink>
            </StMyPageOptionItem>
          )}
        </StMyPageOptionList>
      </StMyPagePopup>
    </StMyPagePopupWrapper>
  );
};

export default MyPagePopup;
