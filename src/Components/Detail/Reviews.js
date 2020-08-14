import React from 'react';
import styled from 'styled-components';
import Division from './Division';
import Rating from '../Global/Rating';
import Button from '../Global/Button';
import Profile from '../Global/Profile';

const Reviews = () => {
  return (
    <Division
      title={
        <Rating scale="2.2" rate="4.92점" starSize="2.2rem" count="후기 12개" />
      }
    >
      <div style={{ marginBottom: '24px' }}>
        <StEstimation percent="80">
          <span>청결도</span>
          <div aria-label="5.0점 만점에 4.9점">
            <div />
          </div>
          <span>4.9</span>
        </StEstimation>
        <StEstimation percent="80">
          <span>정확성</span>
          <div aria-label="5.0점 만점에 4.9점">
            <div />
          </div>
          <span>4.9</span>
        </StEstimation>
        <StEstimation percent="80">
          <span>의사소통</span>
          <div aria-label="5.0점 만점에 4.9점">
            <div />
          </div>
          <span>4.9</span>
        </StEstimation>
        <StEstimation percent="80">
          <span>위치</span>
          <div aria-label="5.0점 만점에 4.9점">
            <div />
          </div>
          <span>4.9</span>
        </StEstimation>
        <StEstimation percent="80">
          <span>체크인</span>
          <div aria-label="5.0점 만점에 4.9점">
            <div />
          </div>
          <span>4.9</span>
        </StEstimation>
        <StEstimation percent="80">
          <span>가격 대비 만족도</span>
          <div aria-label="5.0점 만점에 4.9점">
            <div />
          </div>
          <span>4.9</span>
        </StEstimation>
      </div>
      <ul>
        <StReview>
          <StRiviewer>
            <Profile lastName="Chan Young" />
            <div>
              Chan Young<div>2020년 8월</div>
            </div>
          </StRiviewer>
          <p>
            걸어서 15분만 나오면 제주 어디든 버스로 이동가능해요 15분 걷는게
            운동도 되고 지루하지 않았어요 필요한 것들 넉넉히 준비되어요
            일주일이상 머물기 좋아요 재방문 의사 있어요
          </p>
        </StReview>
        <StReview>
          <div>
            <Profile lastName="Chan Young" />
          </div>
          <p>
            걸어서 15분만 나오면 제주 어디든 버스로 이동가능해요 15분 걷는게
            운동도 되고 지루하지 않았어요 필요한 것들 넉넉히 준비되어요
            일주일이상 머물기 좋아요 재방문 의사 있어요
          </p>
        </StReview>
        <StReview>
          <div>
            <Profile lastName="Chan Young" />
          </div>
          <p>
            걸어서 15분만 나오면 제주 어디든 버스로 이동가능해요 15분 걷는게
            운동도 되고 지루하지 않았어요 필요한 것들 넉넉히 준비되어요
            일주일이상 머물기 좋아요 재방문 의사 있어요
          </p>
        </StReview>
        <StReview>
          <div>
            <Profile lastName="Chan Young" />
          </div>
          <p>
            걸어서 15분만 나오면 제주 어디든 버스로 이동가능해요 15분 걷는게
            운동도 되고 지루하지 않았어요 필요한 것들 넉넉히 준비되어요
            일주일이상 머물기 좋아요 재방문 의사 있어요
          </p>
        </StReview>
      </ul>
      <Button padding="13px 23px" transform>
        후기 5개 모두 보기
      </Button>
    </Division>
  );
};

const StEstimation = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 42%;
  margin-right: 8%;
  margin-bottom: 16px;

  span:first-child {
    flex-grow: 1;
  }

  div {
    position: relative;
    max-width: 125px;
    width: 40%;
    height: 4px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #ddd;

    div {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 125px;
      width: ${props => props.percent || 3.5}%;
      height: 4px;
      border-radius: 4px;
      background-color: #000;
    }
  }

  span:last-child {
    margin-left: 9px;
    font-size: 12px;
    font-weight: 600;
  }
`;

const StReview = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 42%;
  margin-right: 8%;
  margin-bottom: 48px;

  p {
    line-height: 2.4rem;
    /* word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical; */
  }
`;

const StRiviewer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  line-height: 2rem;

  & > div {
    margin-left: 12px;
    font-weight: 600;

    div {
      color: #717171;
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

export default Reviews;
