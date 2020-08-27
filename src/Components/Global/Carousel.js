import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { PrevButton, NextButton } from './SlideButton';

// size 필수: superLarge, large, medium, small
const Carousel = ({
  direction,
  isSliding,
  imageCount,
  imageArray,
  renderArray,
  homeWidth,
  isSuperhost,
  onSlideNext,
  onSlidePrev,
  size,
  ...rest
}) => {
  return (
    <StWrapper size={size} homeWidth={homeWidth} {...rest}>
      <StPrevBtn styleType="transparent" onClick={onSlidePrev} />
      <StNextBtn styleType="transparent" onClick={onSlideNext} />
      <StLink
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.airbnb.co.kr/rooms/36094960?adults=1&location=%EB%A7%88%EB%93%9C%EB%A6%AC%EB%93%9C&source_impression_id=p3_1597324281_lNy0Q31ggfi0f1St&check_in=2020-09-26&guests=1&check_out=2020-09-30"
      >
        {isSuperhost && <StBadge>슈퍼호스트</StBadge>}
        <StImageList
          size={size}
          direction={direction}
          isSliding={isSliding}
          homeWidth={homeWidth}
        >
          {renderArray.map((index, i) => (
            <StImageWrapper key={i} size={size} imageCount={imageCount}>
              <StImage src={imageArray[index]} />
            </StImageWrapper>
          ))}
        </StImageList>
        <StCircleWrapper>
          {imageArray.map((_, i) => {
            return i < 5 ? <StCircle key={i} color="lightGray" /> : null;
          })}
        </StCircleWrapper>
      </StLink>
    </StWrapper>
  );
};

const sizes = {
  superLarge: {
    width: '327',
    height: '184',
  },
  large: {
    width: '300',
    height: '200',
  },
  medium: {
    width: '270',
    height: '180',
  },
  small: {
    width: '148',
    height: '105',
  },
};

const slideNext = keyframes`
0% {
  transform: translate3d(0,0,0);
}
100% {
  transform: translate3d(-300px,0,0);
}
`;

const slidePrev = keyframes`
0% {
  transform: translate3d(0,0,0);
}
100% {
  transform: translate3d(300px,0,0);
}
`;

const sizeStyles = css`
  ${({ size }) => {
    if (size !== 'responsive') {
      return css`
        min-width: ${`${sizes[size].width}px`};
        width: ${`${sizes[size].width}px`};
        height: ${`${sizes[size].height}px`};
      `;
    } else {
      return css`
        width: 100%;
        height: 0;
        padding-bottom: 75%;
      `;
    }
  }}
`;

const StWrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 8px;
  background: ${({ theme }) => theme.color.gray};
  overflow: hidden;
  ${sizeStyles};
`;

const StLink = styled.a`
  /* text-decoration: none; */
`;

const StBadge = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.lightGray};
  border-radius: 3px;
  padding: 0.2rem 0.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  top: 1rem;
  left: 1rem;
  z-index: 3;
`;

const StCircleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StCircle = styled.div`
  margin: 1rem 0.3rem;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ color, theme }) => theme.color[color]};
`;

const StImageList = styled.ul`
  display: flex;
  position: absolute;
  right: ${({ direction }) => direction === 'left' && 0};
  left: ${({ direction }) => direction === 'right' && 0};

  ${({ size, direction, isSliding }) => {
    if (size !== 'responsive' && direction === 'right' && isSliding) {
      return css`
        animation-name: ${slideNext};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
      `;
    } else if (size !== 'responsive' && direction === 'left' && isSliding) {
      return css`
        animation-name: ${slidePrev};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
      `;
    }
  }}
`;

const StImageWrapper = styled.li`
  ${sizeStyles};
  ${({ size }) =>
    size === 'responsive' &&
    css`
      min-width: 100%;
    `}
`;

const StImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StPrevBtn = styled(PrevButton)`
  position: absolute;
  top: calc(50% - 16px);
  left: 1rem;
  z-index: 5;
`;

const StNextBtn = styled(NextButton)`
  position: absolute;
  top: calc(50% - 16px);
  right: 1rem;
  z-index: 5;
`;

export default Carousel;
