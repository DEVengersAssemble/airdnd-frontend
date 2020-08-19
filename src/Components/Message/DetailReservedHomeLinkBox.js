import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import { FaDoorOpen } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

const DetailReservedHomeLinkBox = () => {
  const rules = false;

  return (
    <DtAdrsWrapper>
      <DtAdrsOuterWrapper>
        <DtAdrsInnerWrapper>
          <DtAdrsTitle rules={rules}>숙소</DtAdrsTitle>
          {rules && (
            <DtAdrsAddrestWrapper>
              <DtAdrsAddressTitle>숙소 이용규칙</DtAdrsAddressTitle>
              <DtAdrsAddress>밤 11시 이후에는 정숙</DtAdrsAddress>
            </DtAdrsAddrestWrapper>
          )}
        </DtAdrsInnerWrapper>
        <StButton>
          <DtAdrsButtonWrapper>
            <DtAdrsButtonInnerWrapper>
              <FaDoorOpen />
              <DtAdrsButtonText>숙소 보기</DtAdrsButtonText>
            </DtAdrsButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </DtAdrsButtonWrapper>
        </StButton>
      </DtAdrsOuterWrapper>
    </DtAdrsWrapper>
  );
};

const DtAdrsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DtAdrsOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const DtAdrsInnerWrapper = styled.div`
  padding: 4.5rem 2.5rem 0rem;
`;

const DtAdrsTitle = styled.h3`
  ${({ rules }) =>
    rules
      ? null
      : css`
          padding-bottom: 3rem;
        `}
  font-size: 2.2rem;
  font-weight: 500;
`;

const DtAdrsAddrestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0rem;
  word-break: keep-all;
`;

const DtAdrsAddressTitle = styled.div`
  font-weight: bold;
`;

const DtAdrsAddress = styled.div`
  padding-top: 1rem;
`;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const DtAdrsButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const DtAdrsButtonInnerWrapper = styled.div`
  display: flex;
`;

const DtAdrsButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default DetailReservedHomeLinkBox;
