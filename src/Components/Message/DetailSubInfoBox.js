import React from 'react';
import styled from 'styled-components';
import Profile from '../Global/Profile';

const DetailSubInfoBox = () => {
  return (
    <DtSiWrapper>
      <DtSiTitle>예약세부정보</DtSiTitle>
      <DtSiInner>
        <DtSiGuest>
          <DtSiGuestText></DtSiGuestText>
          <DtSiGuestCount></DtSiGuestCount>
        </DtSiGuest>
        <DtSiGuestProfileLists>
          <DtSiGuestProfileItem>
            <Profile />
          </DtSiGuestProfileItem>
          <DtSiGuestProfileItem>
            <Profile />
          </DtSiGuestProfileItem>
        </DtSiGuestProfileLists>
      </DtSiInner>
    </DtSiWrapper>
  );
};

const DtSiWrapper = styled.div``;

const DtSiTitle = styled.h3``;

const DtSiInner = styled.div``;

const DtSiGuest = styled.div``;

const DtSiGuestText = styled.div``;

const DtSiGuestCount = styled.div``;

const DtSiGuestProfileLists = styled.ul``;

const DtSiGuestProfileItem = styled.li``;

export default DetailSubInfoBox;
