import React from 'react';
import styled, { css } from 'styled-components';
import { StBtn } from '../Global/Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import theme from '../../style/theme';

const MapZoomButton = () => {
  return (
    <StBtnWrapper>
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

const MapMarkerButton = () => {
  return (
    <StButton>
      <FaMapMarkerAlt />
    </StButton>
  );
};

const MapCloseButton = () => {
  return (
    <StButton>
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
  width: 34px;
  border-bottom: 1px solid ${theme.gray};
`;

const StButton = styled(StBtn)`
  border: none;
  padding: 0;
  width: 40px;
  height: 40px;
  font-size: 1.7rem;
  box-shadow: 1px 1px 3px ${theme.shadow};
`;

export { MapZoomButton, MapMarkerButton, MapCloseButton };
