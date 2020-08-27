import React from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';

const MsgListFilterPopup = ({ openPopup }) => {
  return (
    <MsgListFilterPopupWrapper>
      <StMsgListFilterPopup
        popupState={openPopup}
        top="3.5rem"
        left="12rem"
        padding="1rem 0rem"
      >
        <StMsgListFilterPopupButton>
          <MsgListFilterPopupButtonInner>
            <MsgListFilterPopupButtonText>
              모든 메시지 (1)
            </MsgListFilterPopupButtonText>
          </MsgListFilterPopupButtonInner>
        </StMsgListFilterPopupButton>
        <StMsgListFilterPopupButton>
          <MsgListFilterPopupButtonInner>
            <MsgListFilterPopupButtonText>
              보관된 메시지 (1)
            </MsgListFilterPopupButtonText>
          </MsgListFilterPopupButtonInner>
        </StMsgListFilterPopupButton>
        <StMsgListFilterPopupButton>
          <MsgListFilterPopupButtonInner>
            <MsgListFilterPopupButtonText>
              읽지 않은 메시지 (1)
            </MsgListFilterPopupButtonText>
          </MsgListFilterPopupButtonInner>
        </StMsgListFilterPopupButton>
      </StMsgListFilterPopup>
    </MsgListFilterPopupWrapper>
  );
};

const MsgListFilterPopupWrapper = styled.div`
  position: absolute;
  z-index: 9999;
`;

const StMsgListFilterPopup = styled(Popup)`
  border: none;
`;

const StMsgListFilterPopupButton = styled(Button)`
  width: 23rem;
  height: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const MsgListFilterPopupButtonInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 0rem;
  width: calc(100% - 4rem);
`;

const MsgListFilterPopupButtonText = styled.div`
  font-size: 1.5rem;
  font-weight: light;
`;

export default MsgListFilterPopup;
