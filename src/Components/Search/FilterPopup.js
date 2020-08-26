import React from 'react';
import Slider from 'rc-slider';
import Popup from '../Global/Popup';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import Toggle from '../Global/Toggle';
import ModalFooter from '../Global/ModalFooter';
import Checkbox from '../Global/Checkbox';
import { NewInput } from '../Global/Input';
import { GiHamburgerMenu } from 'react-icons/gi';

const Range = Slider.createSliderWithTooltip(Slider.Range);

const RefundPopup = ({
  popupState,
  isDisabled,
  toggle,
  handleClick,
  onReset,
  onSave,
}) => {
  return (
    <FilterPopup
      popupState={popupState}
      isDisabled={isDisabled}
      size="350px"
      value={toggle}
      onSave={onSave}
      onReset={() => onReset(false)}
    >
      <StContentWrapper content="refund">
        <StSmallSpan>
          유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시
        </StSmallSpan>
        <Toggle checked={toggle} handleClick={handleClick} />
      </StContentWrapper>
    </FilterPopup>
  );
};

const RoomTypePopup = ({
  popupState,
  isDisabled,
  check,
  onChange,
  onReset,
  onSave,
}) => {
  return (
    check && (
      <FilterPopup
        popupState={popupState}
        isDisabled={isDisabled}
        size="365px"
        onReset={onReset}
        onSave={onSave}
        check={check}
      >
        <StCheckboxList>
          <StCheckboxWrapper>
            <Checkbox
              value
              checked={check.house}
              onChange={() => onChange('house')}
            >
              <StContentWrapper content="roomType">
                <StLargeSpan>집 전체</StLargeSpan>
                <StSmallSpan>집 전체를 단독으로 사용합니다</StSmallSpan>
              </StContentWrapper>
            </Checkbox>
          </StCheckboxWrapper>
          <StCheckboxWrapper>
            <Checkbox
              value
              checked={check.private}
              onChange={() => onChange('private')}
            >
              <StContentWrapper content="roomType">
                <StLargeSpan>개인실</StLargeSpan>
                <StSmallSpan>
                  침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와
                  함께 이용할 수도 있습니다
                </StSmallSpan>
              </StContentWrapper>
            </Checkbox>
          </StCheckboxWrapper>
          <StCheckboxWrapper>
            <Checkbox
              value
              checked={check.shared}
              onChange={() => onChange('shared')}
            >
              <StContentWrapper content="roomType">
                <StLargeSpan>다인실</StLargeSpan>
                <StSmallSpan>
                  사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
                  이용합니다
                </StSmallSpan>
              </StContentWrapper>
            </Checkbox>
          </StCheckboxWrapper>
        </StCheckboxList>
      </FilterPopup>
    )
  );
};

const PricePopup = ({
  priceArray,
  averagePrice,
  popupState,
  isDisabled,
  min,
  max,
  left,
  right,
  width,
  range,
  onHandler,
  onSetRange,
  onChangeMinPrice,
  onChangeMaxPrice,
  onReset,
  onSave,
}) => {
  return (
    <FilterPopup
      popupState={popupState}
      isDisabled={isDisabled}
      size="430px"
      onReset={onReset}
      onSave={onSave}
    >
      <StContentWrapper content="price">
        <StLargeSpan>
          평균 1박 요금은 ₩{averagePrice.toLocaleString()}입니다
        </StLargeSpan>
        <StRangeWrapper>
          <Range
            min={12000}
            max={1000000}
            allowCross={false}
            value={range.value}
            defaultValue={[12000, 1000000]}
            onChange={onHandler}
          />
          <StGraph>
            {priceArray.map((price, i) => {
              const isSmaller = right > (width / 20) * (i + 1);
              const isBigger = left < (width / 20) * i;
              return (
                <StStick
                  key={i}
                  height={price}
                  inRange={isSmaller && isBigger}
                />
              );
            })}
          </StGraph>
        </StRangeWrapper>
        <StInputWrapper>
          <NewInput
            type="number"
            title="최저 요금"
            value={min}
            short
            pay="₩"
            onChange={onChangeMinPrice}
            onBlur={onSetRange}
          />
          <span>―</span>
          <NewInput
            type="number"
            title="최고 요금"
            value={max}
            short
            pay="₩"
            onChange={onChangeMaxPrice}
            onBlur={onSetRange}
          />
        </StInputWrapper>
      </StContentWrapper>
    </FilterPopup>
  );
};

const SetDatePopup = ({ popupState }) => {
  return (
    <StPopup popupState={popupState} size="35px">
      <StContentWrapper content="setDate">
        <StLargeSpan>요금을 확인하려면 여행 날짜를 입력하세요</StLargeSpan>
        <Button btnType="color" color="black" fontSize="1.4rem">
          날짜 입력
        </Button>
      </StContentWrapper>
    </StPopup>
  );
};

const FilterPopup = ({
  children,
  popupState,
  isDisabled,
  size,
  onReset,
  onSave,
}) => {
  return (
    <StPopup popupState={popupState} size={size}>
      {children}
      <StFooter align="space-between">
        <Button
          btnType="underlined"
          padding="1rem"
          fontSize="1.6rem"
          onClick={onReset}
          disabled={isDisabled}
        >
          지우기
        </Button>
        <Button
          btnType="color"
          color="black"
          padding="1rem 1.5rem"
          fontSize="1.4rem"
          hover="background: #000"
          transition
          onClick={onSave}
        >
          저장
        </Button>
      </StFooter>
    </StPopup>
  );
};

const StPopup = styled(Popup)`
  top: 5rem;
  padding: 0;
  width: ${({ size }) => size};
`;

const contentStyles = {
  refund: css`
    display: flex;
    height: 165px;
    padding-top: 3rem;
  `,
  roomType: css`
    padding: 1rem;
    height: 100%;
    & > * {
      margin: 0 0 0.3rem;
    }
  `,
  setDate: css`
    height: 110px;
    & > * {
      margin-bottom: 1.3rem;
    }
  `,
  price: css`
    height: 330px;
  `,
};

const StContentWrapper = styled.div`
  padding: 2rem;
  ${({ content }) =>
    css`
      ${contentStyles[content]}
    `}
`;

const spanStyle = css`
  line-height: 2rem;
  margin-right: 3rem;
  word-break: keep-all;
  display: block;
`;

const StSmallSpan = styled.span`
  font-size: 1.4rem;
  ${spanStyle}
`;

const StLargeSpan = styled.span`
  font-size: 1.6rem;
  ${spanStyle}
`;

const StCheckboxList = styled.ul`
  padding: 2rem;
  height: 380px;
`;

const StCheckboxWrapper = styled.li`
  margin-bottom: 1rem;
`;

const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > * {
    margin: 0 1rem;
  }

  & > span {
    margin: 0;
  }
`;

const StRangeWrapper = styled.div`
  height: 10rem;
  margin: 3rem 0 1rem;
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;

  .rc-slider {
    position: relative;
    height: 10px;
    width: 95%;
    margin: 0 auto;
    border-radius: 3px;
  }
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: ${({ theme }) => theme.color.shadow};
    height: 2px;
    border-radius: 3px;
  }
  .rc-slider-track {
    position: absolute;
    height: 2px;
    background-color: ${({ theme }) => theme.color.gray};
  }
  .rc-slider-handle {
    position: absolute;
    width: 27px;
    height: 27px;
    cursor: pointer;
    cursor: -webkit-grab;
    margin-top: -13.5px;
    cursor: grab;
    border-radius: 50%;
    border: solid 1px ${({ theme }) => theme.color.gray};
    background-color: #fff;
    touch-action: pan-x;
    z-index: 15;
    &:focus {
      outline: none;
    }
    &:after {
      content: '|||';
      position: absolute;
      font-size: 1.3rem;
      padding: 2.5px 6px;
      color: ${({ theme }) => theme.color.gray};
      /* background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4tuEhLkej_9yySmSYJbuwaSzzQnK7czK1Bw&usqp=CAU'); */
      /* transform: rotate(90deg); */
    }
  }
  .rc-slider-tooltip {
    display: none;
  }
`;

const StGraph = styled.ul`
  display: flex;
  align-items: flex-end;
  width: 95%;
  margin: 0 auto;
  position: relative;
`;

const StStick = styled.li`
  width: 5%;
  z-index: -1;
  height: ${({ height }) => `${height * 0.8}px`};
  margin: 0 1px -1px;
  border-radius: 1px;
  background: ${({ theme, inRange }) =>
    inRange ? `${theme.color.gray}` : `${theme.color.shadow}`};
`;

const StFooter = styled(ModalFooter)`
  padding: 1.5rem 1.5rem 1.5rem 0.5rem;
`;

export { RefundPopup, RoomTypePopup, PricePopup, SetDatePopup };
