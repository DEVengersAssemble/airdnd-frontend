import React from 'react';
import styled from 'styled-components';

const ReservationBox = () => {
  return (
    <StWarpper>
      <StReserveBox></StReserveBox>
    </StWarpper>
  );
};

const StWarpper = styled.div`
  background-color: #f9eae8;
  position: relative;
  margin-left: 8%;
  width: 34%;
`;

const StReserveBox = styled.div`
  background-color: #fff;
  position: sticky;
  top: 80px;
  min-height: 200px;
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  z-index: 1;
`;

export default ReservationBox;
