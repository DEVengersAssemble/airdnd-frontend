import React from 'react';
import styled from 'styled-components';

const DetailTitleBox = () => {
  return (
    <DtTitleBoxWrapper>
      <DtTitleBoxSection>
        <DitTitleBoxLocation>Seongdong-gu, Seongsu</DitTitleBoxLocation>
        {' · '}
        <DtTitleBoxReservedDate>8월 17일 - 8월 18일</DtTitleBoxReservedDate>
        <DtTitleBoxTitle>호스트이름님의 숙소</DtTitleBoxTitle>
      </DtTitleBoxSection>
    </DtTitleBoxWrapper>
  );
};

const DtTitleBoxWrapper = styled.div`
  border: 1px solid red;
  padding: 4.5rem 2.5rem 4rem;
`;

const DtTitleBoxSection = styled.section`
  font-size: 1.2rem;
  font-weight: light:
`;

const DitTitleBoxLocation = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

const DtTitleBoxReservedDate = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

const DtTitleBoxTitle = styled.h3`
  margin-top: 2rem;
  font-size: 3.1rem;
  font-weight: 600;
`;

export default DetailTitleBox;
