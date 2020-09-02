import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';

const CalendarDeleteBtn = ({ onClick }) => (
  <StDeleteDate btnType="underlined" transition onClick={onClick}>
    날짜 지우기
  </StDeleteDate>
);

const StDeleteDate = styled(Button)`
  vertical-align: super;
  padding: 8px;
  margin-left: calc(100% - 145px);
`;

export default CalendarDeleteBtn;
