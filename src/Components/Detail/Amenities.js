import React from 'react';
import styled from 'styled-components';
import Division from './Division';
import Button from '../Global/Button';

const Amenities = () => {
  return (
    <Division title="편의시설">
      <StAmenityList>
        <StAmenity>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path>
          </svg>
          <span>엘리베이터</span>
        </StAmenity>
        <StAmenity>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path>
          </svg>
          <span>무선 인터넷</span>
        </StAmenity>
        <StAmenity>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path>
          </svg>
          <span>아침식사</span>
        </StAmenity>
        <StAmenity>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path>
          </svg>
          <span>케이블 TV</span>
        </StAmenity>
        <StAmenity>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path>
          </svg>
          <span>건물 내 무료 주차</span>
        </StAmenity>
        <StAmenity>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path>
          </svg>
          <span>헤어드라이어</span>
        </StAmenity>
        <StAmenity>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path>
          </svg>
          <span>세탁기</span>
        </StAmenity>
      </StAmenityList>
      <Button padding="13px 23px" transition>
        편의시설 25개 모두 보기
      </Button>
    </Division>
  );
};

const StAmenityList = styled.ul`
  margin-bottom: 24px;
`;

const StAmenity = styled.li`
  display: inline-flex;
  align-items: center;
  width: calc(50% - 2rem);
  margin-right: 2rem;
  padding-bottom: 16px;

  @media ${({ theme }) => theme.size.medium} {
    width: 100%;
    margin-right: 0;
  }

  svg {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin-right: 16px;
    fill: currentcolor;
  }
`;

export default Amenities;
