import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import { AiFillHome } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdHelp, MdPhoneIphone } from 'react-icons/md';

const DetailAirbnbSupportTeamBox = () => {
  return (
    <DtAdrsWrapper>
      <DtAdrsOuterWrapper>
        <DtAdrsInnerWrapper>
          <DtAdrsTitle>에어비엔비 지원</DtAdrsTitle>
        </DtAdrsInnerWrapper>
        <StButton>
          <DtAdrsButtonWrapper>
            <DtAdrsButtonInnerWrapper>
              <MdHelp />
              <DtAdrsButtonText>도움말 센터</DtAdrsButtonText>
            </DtAdrsButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </DtAdrsButtonWrapper>
        </StButton>
        <StButton>
          <DtAdrsButtonWrapper>
            <DtAdrsButtonInnerWrapper>
              <AiFillHome />
              <DtAdrsButtonText>해결 센터</DtAdrsButtonText>
            </DtAdrsButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </DtAdrsButtonWrapper>
        </StButton>
        <StButton>
          <DtAdrsButtonWrapper>
            <DtAdrsButtonInnerWrapper>
              <MdPhoneIphone />
              <DtAdrsButtonText>호스트에게 전화하기</DtAdrsButtonText>
            </DtAdrsButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </DtAdrsButtonWrapper>
        </StButton>
        <StButton>
          <DtAdrsButtonWrapper>
            <DtAdrsButtonInnerWrapper>
              <MdPhoneIphone />
              <DtAdrsButtonText>
                출장자를 위한 고객 지원팀에 연락하기
              </DtAdrsButtonText>
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
  padding-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 500;
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

export default DetailAirbnbSupportTeamBox;
