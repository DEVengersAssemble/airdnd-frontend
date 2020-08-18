import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import DetailTitleBox from '../Message/DetailTitleBox';
import DetailReservedHomeBox from '../Message/DetailReservedHomeBox';
import DetailSubInfoBox from '../Message/DetailSubInfoBox';
import DetailAddressBox from '../Message/DetailAddressBox';
import DetailReservedHomeLinkBox from '../Message/DetailReservedHomeLinkBox';
import DetailHostInfoPageLinkBox from '../Message/DetailHostInfoPageLinkBox';
import DetailSettlementBox from '../Message/DetailSettlementBox';
import DetailAirbnbSupportTeamBox from '../Message/DetailAirbnbSupportTeamBox';

const DetailMain = () => {
  return (
    <DetailMainWrapper>
      <DetailMainInnerWrapper>
        <DetailTitleBox />
        <DetailReservedHomeBox />
        <DetailSubInfoBox />
        <DetailAddressBox />
        <DetailReservedHomeLinkBox />
        <DetailHostInfoPageLinkBox />
        <DetailSettlementBox />
        <DetailAirbnbSupportTeamBox />
      </DetailMainInnerWrapper>
    </DetailMainWrapper>
  );
};

const DetailMainWrapper = styled.div`
  background: lightgray;
  position: absolute;
  top: 15.5rem;
  left: calc(100vw - 37.5rem);
  min-width: 37.5rem;
  height: 100vh;
  max-height: calc(100vh - 15.5rem);
  border-left: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  overflow: scroll;
`;

const DetailMainInnerWrapper = styled.div``;

export default DetailMain;
