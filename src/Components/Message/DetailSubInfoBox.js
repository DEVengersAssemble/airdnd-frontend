import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight, MdPrint, MdReceipt } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';
import Profile from '../Global/Profile';
import Button from '../Global/Button';

const DetailSubInfoBox = () => {
  return (
    <DtSiWrapper>
      <DtSiTitle>예약세부정보</DtSiTitle>
      <DtSiGuestProfilesWrapper>
        <DtSiGuest>
          <DtSiGuestText>게스트</DtSiGuestText>
          <DtSiGuestCount>게스트 2명</DtSiGuestCount>
        </DtSiGuest>
        <DtSiGuestProfileLists>
          <DtSiGuestProfileItem>
            <Profile />
          </DtSiGuestProfileItem>
          <DtSiGuestProfileItem>
            <Profile />
          </DtSiGuestProfileItem>
        </DtSiGuestProfileLists>
      </DtSiGuestProfilesWrapper>
      <DtSiReservedNumberWrapper>
        <DtSiReservedNumberText></DtSiReservedNumberText>
        <DtSiReservedNumber></DtSiReservedNumber>
      </DtSiReservedNumberWrapper>
      <Button>
        <FaGlobe />
        여행일정표 PDF로 받기(비자신청용)
        <MdKeyboardArrowRight />
      </Button>
      <Button>
        <MdPrint />
        세부정보 인쇄하기
        <MdKeyboardArrowRight />
      </Button>
      <Button>
        <MdReceipt />
        영수증 받기
        <MdKeyboardArrowRight />
      </Button>
    </DtSiWrapper>
  );
};

const DtSiWrapper = styled.div``;

const DtSiTitle = styled.h3``;

const DtSiGuestProfilesWrapper = styled.div``;

const DtSiGuest = styled.div``;

const DtSiGuestText = styled.div``;

const DtSiGuestCount = styled.div``;

const DtSiGuestProfileLists = styled.ul``;

const DtSiGuestProfileItem = styled.li``;

const DtSiReservedNumberWrapper = styled.div``;

const DtSiReservedNumberText = styled.div``;

const DtSiReservedNumber = styled.div``;

export default DetailSubInfoBox;
