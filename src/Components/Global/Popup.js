import React from 'react';
import styled from 'styled-components';

// Popup 사용방법
// <PopupWrapper>  << 여기에 position: relative; 해야함
//   <button/ >  << 각자 알아서 이벤트 걸고 popupState에 불리언값 내려줌
//   <Popup>children</Popup>
// </PopupWrapper>

const Popup = ({ children, popupState, top, left, padding, radius }) => {
  if (!popupState) return '';

  return (
    <PopupBox
      popupState={popupState}
      top={top}
      left={left}
      padding={padding}
      radius={radius}
    >
      {children}
    </PopupBox>
  );
};

export default Popup;

export const PopupBox = styled.div`
  position: absolute;
  min-width: 100px;
  min-height: 100px;
  top: ${props => props.top || '5.4rem'};
  left: ${props => props.left || '0'};
  padding: ${props => props.padding || '2rem'};
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  border: 0.5px solid rgba(118, 118, 118, 0.28);
  border-radius: ${props => props.radius || '1.2rem'};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 37px;
  z-index: 10;
`;
