import React from 'react';
import styled, { css } from 'styled-components';
import { PrevButton, NextButton } from './SlideButton';

// size 필수: superLarge, large, medium, small
const Carousel = ({
  img,
  imageCount,
  imageArray,
  renderArray,
  homeWidth,
  isSuperhost,
  isClicked,
  transition,
  onSlideNext,
  onSlidePrev,
  onSetCarousel,
  size,
  ...rest
}) => {
  React.useEffect(() => {
    // onSetCarousel({ imageCount, imageArray });
    if (!isClicked) return;
    console.log(homeWidth);
  }, [isClicked]);

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
        {imageCount < 2 ? (
          <StImageWrapper size={size} imageCount={imageCount}>
            <StImage src={imageArray[1]} />
          </StImageWrapper>
        ) : (
          <StImageList
            img={img}
            imageCount={imageCount}
            size={size}
            homeWidth={homeWidth}
            transition={transition}
          >
            {renderArray.map((image, i) => (
              <StImageWrapper key={i} size={size} imageCount={imageCount}>
                <StImage src={image} />
              </StImageWrapper>
            ))}
          </StImageList>
        )}
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
  ${({ img, imageCount, size, transition, homeWidth }) => {
    if (size !== 'responsive') {
      return css`
        transform: ${`translate3d(-${img * sizes[size].width}px, 0, 0)`};
        transition: ${transition && '0.3s'};
      `;
    } else {
      return css`
        transition: ${transition && '0.3s'};
        /* transform: ${`translate3d(-calc(${+img} * (20vw - 5rem)), 0, 0)`};
      @media ${({ theme }) => theme.size.large} {
        transform: ${`translate3d(-calc(${+img} * (25vw - 5rem)), 0, 0)`};
        }
      @media ${({ theme }) => theme.size.medium} {
        transform: ${`translate3d(-calc(${+img} * (50vw - 5rem)), 0, 0)`};
        } */
        transform: ${
          homeWidth && `translate3d(-${img * (homeWidth - 20)}px, 0, 0)`
        };
      `;
    }
  }};
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
