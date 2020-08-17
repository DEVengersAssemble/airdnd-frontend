import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import { FiPlus, FiMinus, FiMap } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { GoSettings } from 'react-icons/go';
import Checkbox from '../Global/Checkbox';

const MapButton = () => {
  return (
    <StMapButton
      btnType="oval"
      color="black"
      hover={css`
        transform: scale(1.05);
        box-shadow: 0 3px 5px ${({ theme }) => theme.color.gray};
      `}
      transition
    >
      <FiMap /> <span>지도</span>
    </StMapButton>
  );
};

const MapFilterButton = () => {
  return (
    <StButton boxShadow top="20rem" position="sticky">
      <StFilterIcon />
    </StButton>
  );
};

const MapCheckbox = () => {
  return (
    <StCheckbox map value boxShadow checked={true}>
      지도를 움직이며 검색하기
    </StCheckbox>
  );
};

const MapZoomButton = () => {
  return (
    <StBtnWrapper>
      <StButton className="plusBtn" position="relative">
        <FiPlus fontSize="2.4rem" />
      </StButton>
      <StLine />
      <StButton className="minusBtn" position="relative">
        <FiMinus fontSize="2.4rem" />
      </StButton>
    </StBtnWrapper>
  );
};

const MapMarkerButton = () => {
  return (
    <StButton boxShadow>
      <FaMapMarkerAlt />
    </StButton>
  );
};

const MapCloseButton = () => {
  return (
    <StButton
      boxShadow
      top="10rem"
      left="2rem"
      position="sticky"
      margin="0 0 91px 2rem"
    >
      <GrClose />
    </StButton>
  );
};

const StBtnWrapper = styled.div`
  height: 81px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.color.shadow};

  .plusBtn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .minusBtn {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;

const StLine = styled.hr`
  border-width: 0;
  margin: 0 auto;
  width: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.shadow};
`;

const StButton = styled(Button)`
  border: none;
  padding: 0;
  width: 40px;
  height: 40px;
  font-size: 1.7rem;
  z-index: 10;

  ${({ boxShadow, top, right, left, position, margin, theme }) =>
    css`
      top: ${top};
      right: ${right};
      left: ${left};
      position: ${position};
      margin: ${margin};
      ${boxShadow && `box-shadow: 1px 1px 3px ${theme.color.shadow}`};
    `}
`;

const StMapButton = styled(Button)`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    padding-left: 1rem;
    font-size: 1.4rem;
  }
`;

const StCheckbox = styled(Checkbox)`
  z-index: 10;
  top: 10rem;
  position: sticky;
  height: 40px;
  margin: 0 0 91px;
  border-radius: 8px;
  padding: 0 0.5rem;
  ${({ boxShadow, theme }) =>
    boxShadow && `box-shadow: 1px 1px 3px ${theme.color.shadow}`};
`;

const StFilterIcon = styled(GoSettings)`
  transform: rotate(90deg);
`;
export {
  MapButton,
  MapZoomButton,
  MapMarkerButton,
  MapCloseButton,
  MapCheckbox,
  MapFilterButton,
};
