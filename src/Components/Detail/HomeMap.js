import React, { useState } from 'react';
import styled from 'styled-components';
import Division from './Division';
import Map from '../Global/Map';
import Checkbox from '../Global/Checkbox';
import Button from '../Global/Button';

const HomeMap = () => {
  const [check, setCheck] = useState(false);

  const onToggle = e => setCheck(e.target.checked);
  return (
    <Division title="위치">
      <StMap aria-label="숙소 위치 지도 입니다">
        <StCheckbox value checked={check} onChange={onToggle}>
          대중교통
        </StCheckbox>
        <StScaleBtn>
          <Button type="submit">
            <svg viewBox="0 0 16 16" focusable="false">
              <path d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path>
              <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path>
            </svg>
          </Button>
          <Button>
            <svg viewBox="0 0 16 16" focusable="false">
              <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path>
            </svg>
          </Button>
        </StScaleBtn>
        <StHomeIconWapper>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          >
            <path d="m8 10.5005941c0-.82930697.67155309-1.5005941 1.5-1.5005941.8284469 0 1.5.67128713 1.5 1.5005941 0 .8281188-.6715531 1.4994059-1.5 1.4994059-.82844691 0-1.5-.6712871-1.5-1.4994059zm4.1667406-8.44681501c-.0992881-.07170545-.2338787-.07170545-.3331668 0l-8.41742741 5.00062819c-.45120941.32653562-.55049754.95644047-.2239499 1.4065301.19636987.27358389.50416308.41699481.8152659.41699481h1.46063878v10.83083331c0 .1610615.13017777.2912345.29234839.2912345h5.80394304c.1246618 0 .2250531-.1003876.2250531-.2250448v-4.6983621c0-.8108233.8803548-1.4683071 1.6912079-1.4683071s1.7485744.6574838 1.7485744 1.4683071v4.6983621c0 .1246572.1014945.2250448.2250531.2250448h2.786687c.1610674 0 .2923483-.130173.2923483-.2912345v-10.83083331l1.4804964-.00006898c.3033805 0 .6023481-.1499609.7943051-.41692583.3265477-.45008963.2261563-1.07999448-.2239499-1.4065301z"></path>
          </svg>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </StHomeIconWapper>
        <StNotice>정확한 위치는 예약 완료 후에 표시됩니다.</StNotice>
      </StMap>
      <StH4>Ara-dong, Jeju-si, 제주도, 한국</StH4>
      <p>
        생태숲, 제주대학교, 별빛누리공원, 4.3공원(제주의 아픈 역사를 들여다 보는
        시간도 좋을 듯 합니다)생태숲, 제주대학교, 별빛누리공원, 4.3공원(제주의
        아픈 역사를 들여다 보는 시간도 좋을 듯 합니다)생태숲, 제주대학교,
        별빛누리공원, 4.3공원(제주의 아픈 역사를 들여다 보는 시간도 좋을 듯
        합니다)생태숲, 제주대학교, 별빛누리공원, 4.3공원(제주의 아픈 역사를
        들여다 보는 시간도 좋을 듯 합니다)생태숲, 제주대학교, 별빛누리공원,
        4.3공원(제주의 아픈 역사를 들여다 보는 시간도 좋을 듯 합니다)생태숲,
        제주대학교, 별빛누리공원, 4.3공원(제주의 아픈 역사를 들여다 보는 시간도
        좋을 듯 합니다)생태숲, 제주대학교, 별빛누리공원, 4.3공원(제주의 아픈
        역사를 들여다 보는 시간도 좋을 듯 합니다)생태숲, 제주대학교,
        별빛누리공원, 4.3공원(제주의 아픈 역사를 들여다 보는 시간도 좋을 듯
        합니다)생태숲, 제주대학교, 별빛누리공원, 4.3공원(제주의 아픈 역사를
        들여다 보는 시간도 좋을 듯 합니다)생태숲, 제주대학교, 별빛누리공원,
        4.3공원(제주의 아픈 역사를 들여다 보는 시간도 좋을 듯 합니다)생태숲,
        제주대학교, 별빛누리공원, 4.3공원(제주의 아픈 역사를 들여다 보는 시간도
        좋을 듯 합니다)생태숲, 제주대학교, 별빛누리공원, 4.3공원(제주의 아픈
        역사를 들여다 보는 시간도 좋을 듯 합니다)
      </p>
      <Button padding="13px 23px;" transition>
        자세한 위치 정보
      </Button>
    </Division>
  );
};

// const StMap = styled.div`
const StMap = styled(Map)`
  background-color: #e3e8d6;
  position: relative;
  width: 100%;
  height: 480px;
  margin-bottom: 32px;
`;

const StCheckbox = styled(Checkbox)`
  position: absolute;
  top: 24px;
  right: 82px;
  padding: 0.5rem 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  border-radius: 8px;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.lightGray};
  }

  span:nth-of-type(1) {
    background-color: ${({ theme }) => theme.color.white};
  }

  span:last-child {
    padding-left: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
`;

const StScaleBtn = styled.div`
  width: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 24px;
  right: 24px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  button {
    border: none;
    padding: 0%;
    border-radius: 0;

    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;

      &::before {
        content: '';
        width: 80%;
        min-width: 80%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    svg {
      margin: 12px;
      width: 16px;
      height: 16px;
      font-size: 16px;
      color: #222;
      height: 16;
      width: 16;
      fill: currentColor;
    }
  }
`;

const StNotice = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 18px;
  background-color: ${({ theme }) => theme.color.white};
`;

const StHomeIconWapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  transform: translate(-50%, -50%);
  background-color: #000;
  border-radius: 50%;
  z-index: 10;
  color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.18) 0px 1px 2px;

  svg:nth-of-type(1) {
    height: 28px;
    width: 28px;
    fill: currentcolor;
  }
  svg:nth-of-type(2) {
    position: absolute;
    top: -1px;
    right: 0;
    fill: ${({ theme }) => theme.color.main};
    height: 16px;
    width: 16px;
    stroke: ${({ theme }) => theme.color.white};
    stroke-width: 8;
    overflow: visible;
    paint-order: stroke;
  }
`;

const StH4 = styled.h4`
  margin-bottom: 16px;
  line-height: 20px;
  font-weight: 600;

  & + p {
    width: 92%;
    overflow: hidden;
    margin-bottom: 48px;
    line-height: 24px;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export default HomeMap;
