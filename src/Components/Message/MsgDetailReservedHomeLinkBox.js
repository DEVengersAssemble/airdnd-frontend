import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import { FaDoorOpen } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

const MsgDetailReservedHomeLinkBox = () => {
  const rules = false;

  return (
    <MsgDetailRhLbWrapper>
      <MsgDetailRhLbOuterWrapper>
        <MsgDetailRhLbInnerWrapper>
          <MsgDetailRhLbTitle rules={rules}>숙소</MsgDetailRhLbTitle>
          {rules && (
            <MsgDetailRhLbAddrestWrapper>
              <MsgDetailRhLbAddressTitle>
                숙소 이용규칙
              </MsgDetailRhLbAddressTitle>
              <MsgDetailRhLbAddress>밤 11시 이후에는 정숙</MsgDetailRhLbAddress>
            </MsgDetailRhLbAddrestWrapper>
          )}
        </MsgDetailRhLbInnerWrapper>
        <Link to="/detail" target="_blank">
          <StButton>
            <MsgDetailRhLbButtonWrapper>
              <MsgDetailRhLbButtonInnerWrapper>
                <FaDoorOpen />
                <MsgDetailRhLbButtonText>숙소 보기</MsgDetailRhLbButtonText>
              </MsgDetailRhLbButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailRhLbButtonWrapper>
          </StButton>
        </Link>
      </MsgDetailRhLbOuterWrapper>
    </MsgDetailRhLbWrapper>
  );
};

const MsgDetailRhLbWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MsgDetailRhLbOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const MsgDetailRhLbInnerWrapper = styled.div`
  padding: 4.5rem 2.5rem 0rem;
`;

const MsgDetailRhLbTitle = styled.h3`
  ${({ rules }) =>
    rules
      ? null
      : css`
          padding-bottom: 3rem;
        `}
  font-size: 2.2rem;
  font-weight: 500;
`;

const MsgDetailRhLbAddrestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0rem;
  word-break: keep-all;
`;

const MsgDetailRhLbAddressTitle = styled.div`
  font-weight: bold;
`;

const MsgDetailRhLbAddress = styled.div`
  padding-top: 1rem;
`;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const MsgDetailRhLbButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailRhLbButtonInnerWrapper = styled.div`
  display: flex;
`;

const MsgDetailRhLbButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default MsgDetailReservedHomeLinkBox;
