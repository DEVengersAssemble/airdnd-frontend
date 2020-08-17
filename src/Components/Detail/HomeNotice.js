import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';
import { MdCheckCircle } from 'react-icons/md';
import Division from './Division';

const HomeNotice = () => {
  return (
    <Division title="알아두어야 할 사항" border="none">
      <StWrapper>
        <strong>숙소 이용규칙</strong>
        <ul>
          <li>
            <MdCheckCircle />
            체크인 시간: 오후 4:00 - 오전 2:00
          </li>
          <li>
            <MdCheckCircle />
            체크아웃 시간: 오전 10:00
          </li>
        </ul>
        <StButton>
          모두 보기 <AiOutlineRight />
        </StButton>
      </StWrapper>
      <StWrapper>
        <strong>건강과 안전</strong>
        <ul>
          <li>
            <MdCheckCircle />
            에어비앤비 청결 강화 기준을 준수합니다.
          </li>
        </ul>
        <StButton>
          모두 보기 <AiOutlineRight />
        </StButton>
      </StWrapper>
      <StWrapper>
        <strong>환불 정책</strong>
        <span>
          8월 15일 4:00 PM 이전에 예약을 취소하면, 첫 30박 요금 및 서비스
          수수료를 제외한 요금 전액이 환불됩니다.
        </span>
        <StButton>
          자세한 정보 <AiOutlineRight />
        </StButton>
      </StWrapper>
    </Division>
  );
};

const StWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 32%;
  margin-right: 2%;
  padding-right: 1rem;

  &:last-child {
    margin-right: 0;
    padding-right: 0;
  }

  strong {
    display: block;
    margin-bottom: 12px;
  }

  li {
    display: flex;
    align-items: baseline;
    margin-bottom: 8px;
  }

  svg {
    display: inline-block;
    min-height: 17px;
    min-width: 17px;
    margin-right: 12px;
    font-size: 17px;
  }
`;

const StButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 24px;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.darkGray};
  outline: none;

  &:hover {
    color: #222;
  }

  svg {
    margin-left: 8px;
  }
`;

export default HomeNotice;
