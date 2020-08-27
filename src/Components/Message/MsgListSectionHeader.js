import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';
import MsgListSectionFilterPopup from './MsgListSectionFilterPopup';
import { MdFilterList } from 'react-icons/md';

const MsgListSectionHeader = () => {
  const [openPopup, setOpenPopup] = React.useState(false);
  const onClickPopup = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <MsgListSectionHeaderWrapper>
      <MsgListSectionHeaderTitle>메시지 주고받기</MsgListSectionHeaderTitle>
      <StMsgListSectionHeaderFilterButton
        btnType="circle"
        border={openPopup ? '2px solid black' : 'none'}
        hover={{ backgroundColor: theme.color.lightGray }}
        onClick={onClickPopup}
        openPopup={openPopup}
      >
        <StMsgListSectionHeaderFilterButtonIcon />
      </StMsgListSectionHeaderFilterButton>
      <MsgListSectionFilterPopup openPopup={openPopup} />
    </MsgListSectionHeaderWrapper>
  );
};

const MsgListSectionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  width: 37.5rem;
  min-width: 37.5rem;
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
