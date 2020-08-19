import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Profile from '../Global/Profile';
import Button from '../Global/Button';
import { MdKeyboardArrowRight, MdPhoneIphone } from 'react-icons/md';

const DetailHostInfoPageLinkBox = () => {
  return (
    <DtHpLinkWrapper>
      <DtHpLinkOuterWrapper>
        <DtHpLinkInnerWrapper>
          <DtHpLinkTitleWrapper>
            <DtHpLinkTitle>호스트 호스트이름님</DtHpLinkTitle>
            <StLink to="/users/show/hostId" target="_blank">
              프로필 보기
            </StLink>
          </DtHpLinkTitleWrapper>
          <DtHpLinkProfileWrapper>
            <Profile />
          </DtHpLinkProfileWrapper>
        </DtHpLinkInnerWrapper>
        <a href="tel:+8210-6415-4738">
          <StButton>
            <DtHpLinkButtonWrapper>
              <DtHpLinkButtonInnerWrapper>
                <MdPhoneIphone />
                <DtHpLinkButtonText>호스트에게 전화하기</DtHpLinkButtonText>
              </DtHpLinkButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </DtHpLinkButtonWrapper>
          </StButton>
        </a>
      </DtHpLinkOuterWrapper>
    </DtHpLinkWrapper>
  );
};

const DtHpLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DtHpLinkOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const DtHpLinkInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.5rem 2.5rem 2.5rem;
`;

const DtHpLinkTitleWrapper = styled.div`
  font-weight: bold;
`;

const DtHpLinkTitle = styled.h3`
  padding-bottom: 1.2rem;
  font-size: 2.2rem;
`;

const StLink = styled(Link)`
  font-weight: 400;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.darkGray};
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const DtHpLinkProfileWrapper = styled.div``;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const DtHpLinkButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const DtHpLinkButtonInnerWrapper = styled.div`
  display: flex;
`;

const DtHpLinkButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default DetailHostInfoPageLinkBox;
