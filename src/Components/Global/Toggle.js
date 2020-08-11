import React from 'react';
import {
  StToggleButton,
  StToggleCircle,
} from '../../StyledComponents/Global/Toggle';
import { MdDone } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Toggle = ({ checked, handleClick }) => {
  return (
    <StToggleButton checked={checked} onClick={handleClick}>
      <StToggleCircle checked={checked}>{checked && <MdDone />}</StToggleCircle>
    </StToggleButton>
  );
};

export default Toggle;
