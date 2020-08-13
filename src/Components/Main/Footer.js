import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import { FaWonSign, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

const StFooter = styled.footer`
  background: ${props => props.theme.lightGray};
  padding: 50px 80px;
  color: ${props => props.theme.black};
  @media ${props => props.theme.iPad} {
    padding: 50px 40px;
  }
`;

const StUpperWrapper = styled.div`
  display: flex;
  @media ${props => props.theme.iPad} {
    flex-direction: column;
  }
`;

const StContentSection = styled.section`
  width: 25%;
  padding-bottom: 48px;
  border-bottom: 1px solid #dddddd;
  @media ${props => props.theme.iPad} {
    width: 100%;
    padding-bottom: 24px;
    margin-bottom: 24px;

    &:nth-child(even) ul {
      height: 64px;
    }
    &:nth-child(odd) ul {
      height: 96px;
    }
  }
`;

const StContentTitle = styled.h4`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
`;

const StContentList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const StContentItem = styled.li`
  padding: 3px 0px;
  margin: 5px 0;

  width: 100%;
  @media ${props => props.theme.iPad} {
    width: 33.3333%;
  }
`;

const StContentItemLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.darkGray};
    cursor: pointer;
  }
`;

const StLowerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin-top: 20px;
  font-size: 14px;
  @media ${props => props.theme.iPad} {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const StLowerLeftWrapper = styled.div`
  @media ${props => props.theme.iPad} {
    text-align: center;
    width: 100%;
  }
`;

const StCopyRight = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;

const StRuleList = styled.ul`
  display: flex;
  @media ${props => props.theme.iPad} {
    justify-content: center;
  }
`;

const StRuleItem = styled.li``;

const StRuleLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.darkGray};
    cursor: pointer;
  }
`;

const StDot = styled.span`
  display: flex;
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
`;

const StLowerRightWrapper = styled.div`
  @media ${props => props.theme.iPad} {
    text-align: center;
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StSettingButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  width: 160px;
`;

const StSettingButton = styled(Button)`
  background: transparent;
  height: 20px;
  font-size: 14px;
  border-radius: 0;
  padding: 0;
  line-height: 16px;
  &:hover {
    background: transparent;
    color: ${props => props.theme.darkGray};
  }
`;

const StButtonText = styled.span`
  line-height: 18px;
  margin-left: 6px;
  font-weight: 500;
`;

const StSiteLinkList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  @media ${props => props.theme.iPad} {
    margin-left: 70px;
  }
`;

const StSiteLinkItem = styled.li`
  text-align: center;
  & + & {
    margin-left: 20px;
  }
`;

const StSiteLink = styled.a`
  font-size: 20px;
  line-height: 20px;
  display: flex;
  vertical-align: center;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.darkGray};
  }
`;

const Footer = () => {
  return (
    <StFooter>
      <StUpperWrapper>
        <StContentSection>
          <StContentTitle>소개</StContentTitle>
          <StContentList>
            <StContentItem>
              <StContentItemLink>에어비앤비 이용 방법</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>뉴스룸</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>Airbnb Citizen</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>에어비앤비 플러스</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>에어비앤비 Luxe</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>호텔투나잇</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>
                에어비앤비 비즈니스 프로그램
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>올림픽</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>채용정보</StContentItemLink>
            </StContentItem>
          </StContentList>
        </StContentSection>
        <StContentSection>
          <StContentTitle>커뮤니티</StContentTitle>
          <StContentList>
            <StContentItem>
              <StContentItemLink>다양성 및 소속감</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>접근성</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>에어비앤비 매거진</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>에어비앤비 어소시에이트</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>구호 인력을 위한 숙소</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>친구 초대하기</StContentItemLink>
            </StContentItem>
          </StContentList>
        </StContentSection>
        <StContentSection>
          <StContentTitle>호스팅하기</StContentTitle>
          <StContentList>
            <StContentItem>
              <StContentItemLink>숙소 호스팅</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>온라인 체험 호스팅</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>체험 호스팅하기</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>
                브라이언 체스키 CEO의 메시지
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>책임감 있는 호스팅</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>Open Homes</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>자료 센터</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>커뮤니티 센터</StContentItemLink>
            </StContentItem>
          </StContentList>
        </StContentSection>
        <StContentSection>
          <StContentTitle>에어비앤비 지원</StContentTitle>
          <StContentList>
            <StContentItem>
              <StContentItemLink>코로나19 관련 업데이트</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>도움말 센터</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>예약 취소 옵션</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>에어비앤비 이웃 민원 지원</StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink>신뢰와 안전</StContentItemLink>
            </StContentItem>
          </StContentList>
        </StContentSection>
      </StUpperWrapper>
      <StLowerWrapper>
        <StLowerLeftWrapper>
          <StCopyRight>
            &copy; 2020 DEVengersAssemble. All rights reserved
          </StCopyRight>
          <StRuleList>
            <StRuleItem>
              <StRuleLink>개인정보 처리방침</StRuleLink>
            </StRuleItem>
            <StDot aria-hidden="true">・</StDot>
            <StRuleItem>
              <StRuleLink>이용약관</StRuleLink>
            </StRuleItem>
            <StDot aria-hidden="true">・</StDot>
            <StRuleItem>
              <StRuleLink>사이트맵</StRuleLink>
            </StRuleItem>
            <StDot aria-hidden="true">・</StDot>
            <StRuleItem>
              <StRuleLink>한국의 변경된 환불 정책</StRuleLink>
            </StRuleItem>
          </StRuleList>
        </StLowerLeftWrapper>
        <StLowerRightWrapper>
          <StSettingButtonWrapper>
            <StSettingButton btnType="underlined">
              <span className="a11yHidden">언어 바꾸기 버튼</span>
              <FiGlobe />
              <StButtonText>한국어(KR)</StButtonText>
            </StSettingButton>
            <StSettingButton btnType="underlined" height="20px" fontSize="14px">
              <span className="a11yHidden">화폐 바꾸기 버튼</span>
              <FaWonSign />
              <StButtonText>KRW</StButtonText>
            </StSettingButton>
          </StSettingButtonWrapper>
          <StSiteLinkList>
            <StSiteLinkItem>
              <StSiteLink>
                <span className="a11yHidden">페이스북으로 이동하기</span>
                <FaFacebookF />
              </StSiteLink>
            </StSiteLinkItem>
            <StSiteLinkItem>
              <StSiteLink>
                <span className="a11yHidden">트위터로 이동하기</span>
                <FaTwitter />
              </StSiteLink>
            </StSiteLinkItem>
            <StSiteLinkItem>
              <StSiteLink>
                <span className="a11yHidden">인스타그램으로 이동하기</span>
                <FaInstagram />
              </StSiteLink>
            </StSiteLinkItem>
          </StSiteLinkList>
        </StLowerRightWrapper>
      </StLowerWrapper>
    </StFooter>
  );
};

export default Footer;
