import React from 'react';
import styled from 'styled-components';

const MsgDetailTitleBox = () => {
  // Canceled props일때 render 작업 필요

  return (
    <MsgDetailTitleBoxWrapper>
      <MsgDetailTitleBoxSection>
        <DitTitleBoxLocation>Seongdong-gu, Seongsu</DitTitleBoxLocation>
        {' · '}
        <MsgDetailTitleBoxReservedDate>
          8월 17일 - 8월 18일
        </MsgDetailTitleBoxReservedDate>
        <MsgDetailTitleBoxTitle>호스트이름님의 숙소</MsgDetailTitleBoxTitle>
      </MsgDetailTitleBoxSection>
    </MsgDetailTitleBoxWrapper>
  );
};

const MsgDetailTitleBoxWrapper = styled.div`
  padding: 4.5rem 2.5rem 4rem;
`;

const MsgDetailTitleBoxSection = styled.section`
  font-size: 1.2rem;
  font-weight: light;
`;

const DitTitleBoxLocation = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

const MsgDetailTitleBoxReservedDate = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

const MsgDetailTitleBoxTitle = styled.h3`
  margin-top: 2rem;
  font-size: 3.1rem;
  font-weight: 600;
`;

export default MsgDetailTitleBox;
