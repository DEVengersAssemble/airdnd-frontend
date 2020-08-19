import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import { IoIosCopy } from 'react-icons/io';
import { MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md';

const DetailAddressBox = () => {
  const address = '한국, 서울특별시, 성동구, 성수2가3동, 연무장13길, 9';

  return (
    <DtAdrsWrapper>
      <DtAdrsOuterWrapper>
        <DtAdrsInnerWrapper>
          <DtAdrsTitle>찾아가는 방법</DtAdrsTitle>
          <DtAdrsAddrestWrapper>
            <DtAdrsAddressTitle>주소</DtAdrsAddressTitle>
            <DtAdrsAddress>
              한국, 서울특별시, 성동구, 성수2가3동, 연무장13길, 9
            </DtAdrsAddress>
          </DtAdrsAddrestWrapper>
        </DtAdrsInnerWrapper>
        <CopyToClipboard text={address}>
          <StButton>
            <DtAdrsButtonWrapper>
              <DtAdrsButtonInnerWrapper>
                <IoIosCopy />
                <DtAdrsButtonText>주소 복사하기</DtAdrsButtonText>
              </DtAdrsButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </DtAdrsButtonWrapper>
          </StButton>
        </CopyToClipboard>
        <a
          href={`https://www.google.com/maps/place/<homename>/<lang>/<long>`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StButton>
            <DtAdrsButtonWrapper>
              <DtAdrsButtonInnerWrapper>
                <MdLocationOn />
                <DtAdrsButtonText>찾아가는 방법 보기</DtAdrsButtonText>
              </DtAdrsButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </DtAdrsButtonWrapper>
          </StButton>
        </a>
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

export default DetailAddressBox;
