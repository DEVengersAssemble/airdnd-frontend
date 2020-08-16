import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import theme from '../../style/theme';

const MapZoomButton = ({ top, right }) => {
  return (
    <StBtnWrapper top={top} right={right}>
      <StButton className="plusBtn">
        <FiPlus fontSize="2.4rem" />
      </StButton>
      <StLine />
      <StButton className="minusBtn">
        <FiMinus fontSize="2.4rem" />
      </StButton>
    </StBtnWrapper>
  );
};

const MapMarkerButton = ({ top, right }) => {
  return (
    <StButton boxShadow top={top} right={right}>
      <FaMapMarkerAlt />
    </StButton>
  );
};

const MapCloseButton = ({ top, left }) => {
  return (
    <StButton boxShadow top={top} left={left}>
      <GrClose />
    </StButton>
  );
};

const StBtnWrapper = styled.div`
  height: 81px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  background: ${theme.white};
  border-radius: 8px;
  box-shadow: 1px 1px 3px ${theme.shadow};
  position: fixed;
  z-index: 50;
  ${({ top, right }) => css`
    top: ${top};
    right: ${right};
  `}

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
  border-bottom: 1px solid ${theme.shadow};
`;

const StButton = styled(Button)`
  border: none;
  padding: 0;
  width: 40px;
  height: 40px;
  font-size: 1.7rem;
  position: fixed;
  z-index: 50;

  &.plusBtn,
  &.minusBtn {
    position: relative;
  }

  ${({ boxShadow, top, right, left }) =>
    css`
      top: ${top};
      right: ${right};
      left: ${left};
      ${boxShadow && `box-shadow: 1px 1px 3px ${theme.shadow}`};
    `}
`;

export { MapZoomButton, MapMarkerButton, MapCloseButton };
