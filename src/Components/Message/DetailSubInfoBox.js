import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { MdKeyboardArrowRight, MdPrint, MdReceipt } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';
import Profile from '../Global/Profile';
import Button from '../Global/Button';
import Modal from '../Global/Modal';

const DetailSubInfoBox = () => {
  return (
    <DtSiWrapper>
      <DtSiOuterWrapper>
        <DtSiInnerWrapper>
          <DtSiTitle>예약 세부정보</DtSiTitle>
          <DtSiGuestProfilesWrapper>
            <DtSiGuestWrapper>
              <DtSiGuestText>게스트</DtSiGuestText>
              <DtSiGuestCount>게스트 2명</DtSiGuestCount>
            </DtSiGuestWrapper>
            <DtSiGuestProfileLists>
              <DtSiGuestProfileItem>
                <Profile lastName="박" size="4.8rem" />
              </DtSiGuestProfileItem>
              <DtSiGuestProfileItem>
                <Profile lastName="박" size="4.8rem" />
              </DtSiGuestProfileItem>
            </DtSiGuestProfileLists>
          </DtSiGuestProfilesWrapper>
          <DtSiReservedNumberWrapper>
            <DtSiReservedNumberText>예약 번호</DtSiReservedNumberText>
            <DtSiReservedNumber>HMAAHJX3BX</DtSiReservedNumber>
          </DtSiReservedNumberWrapper>
        </DtSiInnerWrapper>
        <StButton>
          <DtSiButtonWrapper>
            <DtSiButtonInnerWrapper>
              <FaGlobe />
              <DtSiButtonText>여행일정표 PDF로 받기(비자신청용)</DtSiButtonText>
            </DtSiButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </DtSiButtonWrapper>
        </StButton>
        <StButton>
          <DtSiButtonWrapper>
            <DtSiButtonInnerWrapper>
              <MdPrint />
              <DtSiButtonText>세부정보 인쇄하기</DtSiButtonText>
            </DtSiButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </DtSiButtonWrapper>
        </StButton>
        <StButton>
          <DtSiButtonWrapper>
            <DtSiButtonInnerWrapper>
              <MdReceipt />
              <DtSiButtonText>영수증 받기</DtSiButtonText>
            </DtSiButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </DtSiButtonWrapper>
        </StButton>
      </DtSiOuterWrapper>
    </DtSiWrapper>
  );
};

const DtSiWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DtSiOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const DtSiInnerWrapper = styled.div`
  padding: 4.5rem 2.5rem 0rem;
`;

const DtSiTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
`;

const DtSiGuestProfilesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0rem;
`;

const DtSiGuestWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DtSiGuestText = styled.div`
  font-weight: bold;
`;

const DtSiGuestCount = styled.div`
  padding-top: 1rem;
`;

const DtSiGuestProfileLists = styled.ul`
  display: flex;
  position: relative;
  & > :first-child {
    position: absolute;
    right: 3rem;
  }
  & > :first-child > :first-child :first-child {
    border: 1px solid ${({ theme }) => theme.color.white};
  }
  & > :last-child > :first-child :first-child {
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`;

const DtSiGuestProfileItem = styled.li``;

const DtSiReservedNumberWrapper = styled.div`
  padding: 3rem 0rem;
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const DtSiReservedNumberText = styled.div`
  font-weight: bold;
`;

const DtSiReservedNumber = styled.div`
  padding-top: 1rem;
`;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const DtSiButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const DtSiButtonInnerWrapper = styled.div`
  display: flex;
`;

const DtSiButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default DetailSubInfoBox;
