import React from 'react';
import styled, { css } from 'styled-components';
import Profile from '../Global/Profile';

const HomeExplain = () => {
  return (
    <>
      <StSubTitDiv>
        <StTextWrapper>
          <StSubTitle>제주도님이 호스팅하는 공동주택의 개인실</StSubTitle>
          <StFeature>
            최대 인원 1명 · 원룸 · 침대 1개 · 단독 사용 욕실 1개
          </StFeature>
        </StTextWrapper>
        <Profile isSupperhost mark lastName="haeun" />
      </StSubTitDiv>

      <StExplainList>
        <StExplain>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm-4 2H7l-.001 26H21zm4 0h-2v26h1.999zm-7 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
          </svg>
          <strong>셀프 체크인</strong>
          <span>키패드를 이용해 체크인하세요.</span>
        </StExplain>
        <StExplain>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 20a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-7a9 9 0 0 1 8.043 4.958L22.53 21.47a7.003 7.003 0 0 0-13.058 0l-1.514-1.514A9 9 0 0 1 16 15zm0-5c4.89 0 9.193 2.506 11.697 6.304l-1.45 1.45A11.993 11.993 0 0 0 16 12c-4.339 0-8.14 2.302-10.247 5.752l-1.45-1.449A13.987 13.987 0 0 1 16 10zm0-5c6.267 0 11.826 3.034 15.286 7.714l-1.432 1.432C26.773 9.821 21.716 7 16 7 10.285 7 5.228 9.82 2.146 14.145L.714 12.714C4.174 8.034 9.733 5 16 5z"></path>
          </svg>
          <strong>일상 생활을 위한 편의시설</strong>
          <span>
            장기 숙박에도 편히 머무르시도록, 숙소에는 주방, 무선인터넷, 세탁기,
            무료 주차이(가) 구비되어 있습니다.
          </span>
        </StExplain>
      </StExplainList>

      <StDescription>
        <p>
          제주시 아라동에 위치해 있으며 공항을 자가용 및 택시로 이용할 시
          30분이면 충분히 오가는 거리로 주변이 조용하며 관광지를 용이하게 이용할
          수 있는 거리에 있습이다 종합병원과 10분여거리에 있으며 제주대학교,
          생태숲, 5.16도로와 서귀포를 이어주는 에조로 거리에 근접해 갈 수
          있습니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든
          침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기바랍니다 숙소
          제주시 아라동에 위치해 있으며 공항을 자가용 및 택시로 이용할 시
          30분이면 충분히 오가는 거리로 주변이 조용하며 관광지를 용이하게 이용할
          수 있는 거리에 있습이다 종합병원과 10분여거리에 있으며 제주대학교,
          생태숲, 5.16도로와 서귀포를 이어주는 에조로 거리에 근접해 갈 수
          있습니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든
          침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다. 공간이
          작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을
          세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다. 즐거운 여행보내시기
          바랍니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든
          침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다
        </p>
        <StMoreBtn>더 읽기</StMoreBtn>
        <StToHostBtn>호스트에게 연락하기</StToHostBtn>
      </StDescription>
    </>
  );
};

const line = () => 'border-bottom: 1px solid #ddd;';

const StSubTitDiv = styled.div`
  padding-bottom: 2.4rem;
  ${line}
`;

const StTextWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 5.6rem);
`;

const StSubTitle = styled.h3`
  margin-bottom: 0.8rem;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.6rem;
`;

const StFeature = styled.span`
  font-size: 1.6rem;
  line-height: 2rem;
`;

const StExplainList = styled.ul`
  padding: 32px 0;
  ${line}
`;

const StExplain = styled.li`
  margin-bottom: 2.4rem;

  &::after {
    display: block;
    content: '';
    clear: both;
  }

  &:last-child {
    margin: 0;
  }

  svg {
    float: left;
    width: 2.4rem;
    margin-right: 16px;
    margin-bottom: 2rem;
    fill: currentColor;
  }

  strong {
    width: calc(100% - (2.4rem + 18px));
    float: left;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 0.4rem;
  }

  span {
    width: calc(100% - (2.4rem + 18px));
    float: left;
    font-size: 14px;
    line-height: 2rem;
    color: ${({ theme }) => theme.darkGray};
  }
`;

const StDescription = styled.div`
  padding: 32px 0 48px;
  ${line}

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 2.4rem;

    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    /* max-height: 21.6rem; */
  }
`;

const underlineBtn = css`
  padding: 0;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: underline;
  border: none;
  border-radius: 0;
  outline: none;
`;

const StMoreBtn = styled.button`
  margin-top: 10px;
  ${underlineBtn}
`;

const StToHostBtn = styled.button`
  display: block;
  margin-top: 3.2rem;
  color: ${({ theme }) => theme.darkGray};
  ${underlineBtn}

  &:hover {
    color: #222222;
  }
`;

export default HomeExplain;
