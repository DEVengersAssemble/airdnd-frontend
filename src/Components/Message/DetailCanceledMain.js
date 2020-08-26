import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import DetailTitleBox from "./DetailTitleBox";
import DetailReservedHomeBox from "./DetailReservedHomeBox";
import DetailSubInfoBox from "./DetailSubInfoBox";
import DetailAirbnbSupportTeamBox from "./DetailAirbnbSupportTeamBox";

const DetailCanceledMain = () => {
  return (
    <DetailMainWrapper>
      <DetailMainInnerWrapper>
        <DetailTitleBox />
        <DetailReservedHomeBox />
        <DetailSubInfoBox />
        <DetailAirbnbSupportTeamBox />
      </DetailMainInnerWrapper>
    </DetailMainWrapper>
  );
};

const DetailMainWrapper = styled.div`
  position: absolute;
  top: 15.5rem;
  left: calc(100vw - 37.5rem);
  width: 37.5rem;
  min-width: 37.5rem;
  height: 100vh;
  max-height: calc(100vh - 15.5rem);
  border-left: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  overflow: scroll;
`;

const DetailMainInnerWrapper = styled.div`
  & > div + div {
    border-top: 5px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
    border-bottom: 3px solid
      ${({ theme }) => darken(0.1, theme.color.lightGray)};
  }
  & > :last-child {
    border: none;
    padding-bottom: 7rem;
  }
`;

export default DetailCanceledMain;
