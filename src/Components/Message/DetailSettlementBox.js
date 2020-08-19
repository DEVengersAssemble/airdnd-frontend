import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import {
  MdKeyboardArrowRight,
  MdAssignmentTurnedIn,
  MdReceipt,
} from 'react-icons/md';

const DetailSettlementBox = () => {
  return (
    <DtSettlementWrapper>
      <DtSettlementOuterWrapper>
        <DtSettlementInnerWrapper>
          <DtSettlementTitle>결제 정보</DtSettlementTitle>
          <DtSettlementAddrestWrapper>
            <DtSettlementAddressTitle>총 비용</DtSettlementAddressTitle>
            <DtSettlementAddress>₩78010</DtSettlementAddress>
          </DtSettlementAddrestWrapper>
        </DtSettlementInnerWrapper>
        <StButton>
          <DtSettlementButtonWrapper>
            <DtSettlementButtonInnerWrapper>
              <MdAssignmentTurnedIn />
              <DtSettlementButtonText>
                출장 경비 청구를 위한 세부 정보 입력하기
              </DtSettlementButtonText>
            </DtSettlementButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </DtSettlementButtonWrapper>
        </StButton>
        <Link to="/receipt" target="_blank">
          <StButton>
            <DtSettlementButtonWrapper>
              <DtSettlementButtonInnerWrapper>
                <MdReceipt />
                <DtSettlementButtonText>영수증 받기</DtSettlementButtonText>
              </DtSettlementButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </DtSettlementButtonWrapper>
          </StButton>
        </Link>
      </DtSettlementOuterWrapper>
    </DtSettlementWrapper>
  );
};

const DtSettlementWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DtSettlementOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const DtSettlementInnerWrapper = styled.div`
  padding: 4.5rem 2.5rem 0rem;
`;

const DtSettlementTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
`;

const DtSettlementAddrestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0rem;
  word-break: keep-all;
`;

const DtSettlementAddressTitle = styled.div`
  font-weight: bold;
`;

const DtSettlementAddress = styled.div`
  padding-top: 1rem;
`;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const DtSettlementButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const DtSettlementButtonInnerWrapper = styled.div`
  display: flex;
`;

const DtSettlementButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default DetailSettlementBox;
