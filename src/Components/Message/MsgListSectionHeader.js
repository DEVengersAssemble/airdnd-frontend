import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';
import { MdFilterList } from 'react-icons/md';
import MsgListSectionFilterPopupContainer from '../../Containers/Message/MsgListSectionFilterPopupContainer';

const MsgListSectionHeader = ({
  allState,
  hideState,
  unreadState,
  openPopup,
  setOpenPopup,
  onClickPopup,
  popupBtnRef,
  popupRef,
}) => {
  return (
    <MsgListSectionHeaderWrapper>
      <MsgListSectionHeaderTitle>
        {allState === 'all' && '메시지 주고받기'}
        {hideState === 'hide' && '보관 처리됨'}
        {unreadState === 'unread' && '읽지 않음'}
      </MsgListSectionHeaderTitle>
      <StMsgListSectionHeaderFilterButton
        btnType="circle"
        border={openPopup ? '2px solid black' : 'none'}
        hover={{ backgroundColor: theme.color.lightGray }}
        onClick={onClickPopup}
        openPopup={openPopup}
        ref={popupBtnRef}
      >
        <StMsgListSectionHeaderFilterButtonIcon />
      </StMsgListSectionHeaderFilterButton>
      <MsgListSectionFilterPopupContainer
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        popupRef={popupRef}
      />
    </MsgListSectionHeaderWrapper>
  );
};

const MsgListSectionHeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  /* width: 37.5rem; */
  /* min-width: 37.5rem; */
  height: 7.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const MsgListSectionHeaderTitle = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const StMsgListSectionHeaderFilterButton = styled(Button)`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme, openPopup }) =>
    openPopup && theme.color.lightGray};
`;

const StMsgListSectionHeaderFilterButtonIcon = styled(MdFilterList)`
  font-size: 2rem;
`;

export default MsgListSectionHeader;
