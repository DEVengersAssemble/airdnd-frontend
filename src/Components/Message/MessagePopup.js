import React from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';

const ChatFilterPopup = ({ openPopup }) => {
  return (
    <PopupWrapper>
      <Popup
        popupState={openPopup}
        top="3.5rem"
        left="12rem"
        padding="1rem 0rem"
        style={{
          border: 'none',
        }}
      >
        <StButton>
          <StPopupButtonWrapper>
            <StPopupButtonText>모든 메시지 (1)</StPopupButtonText>
          </StPopupButtonWrapper>
        </StButton>
        <StButton>
          <StPopupButtonWrapper>
            <StPopupButtonText>보관된 메시지 (1)</StPopupButtonText>
          </StPopupButtonWrapper>
        </StButton>
        <StButton>
          <StPopupButtonWrapper>
            <StPopupButtonText>읽지 않은 메시지 (1)</StPopupButtonText>
          </StPopupButtonWrapper>
        </StButton>
      </Popup>
    </PopupWrapper>
  );
};

const PopupWrapper = styled.div`
  position: absolute;
  z-index: 9999;
`;

const StButton = styled(Button)`
  width: 23rem;
  height: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const StPopupButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 0rem;
  width: calc(100% - 4rem);
`;

const StPopupButtonText = styled.div`
  font-size: 1.5rem;
  font-weight: light;
`;
export default ChatFilterPopup;
