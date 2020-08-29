import React from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';

const MsgListFilterPopup = ({
  openPopup,
  popupRef,
  onClickAll,
  onClickHide,
  onClickUnread,
  allMsg,
  hideMsg,
  unreadMsg,
}) => {
  return (
    <MsgListFilterPopupWrapper ref={popupRef}>
      <StMsgListFilterPopup
        popupState={openPopup}
        top="3.5rem"
        left="12rem"
        padding="1rem 0rem"
      >
        <StMsgListFilterPopupButton onClick={onClickAll}>
          <MsgListFilterPopupButtonText>
            모든 메시지 ({allMsg})
          </MsgListFilterPopupButtonText>
        </StMsgListFilterPopupButton>
        <StMsgListFilterPopupButton onClick={onClickHide}>
          <MsgListFilterPopupButtonText>
            숨긴 메시지 ({hideMsg})
          </MsgListFilterPopupButtonText>
        </StMsgListFilterPopupButton>
        <StMsgListFilterPopupButton onClick={onClickUnread}>
          <MsgListFilterPopupButtonText>
            읽지 않은 메시지 ({unreadMsg})
          </MsgListFilterPopupButtonText>
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

const MsgListFilterPopupButtonText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 0rem;
  width: calc(100% - 4rem);
  font-size: 1.5rem;
  font-weight: light;
`;

export default MsgListFilterPopup;
