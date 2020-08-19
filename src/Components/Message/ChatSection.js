import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';
import ChatFilterPopup from './MessagePopup';
import { MdFilterList } from 'react-icons/md';

/**
 * todolist의 todo sorting과 유사
 * title: 메시지 주고받기, 보관 처리, 읽지 않음
 * button list: 모든 메시지(), 보관된 메시지(), 읽지 않은 메시지()
 * Button props: children,btnType,color,border,width,height,fontSize,hover,padding,
 * focus,transition,type,...rest
 *
 * Popup 컴포넌트 삽입하기
 */

const ChatSection = () => {
  const [openPopup, setOpenPopup] = React.useState(false);
  const onClickPopup = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <ChatSectionWrapper>
      <ChatSectionTitle>메시지 주고받기</ChatSectionTitle>
      <StChatFilterButton
        btnType="circle"
        border={openPopup ? '2px solid black' : 'none'}
        hover={{ backgroundColor: theme.color.lightGray }}
        onClick={onClickPopup}
        openPopup={openPopup}
      >
        <ChatFilterButtonIcon />
      </StChatFilterButton>
      <ChatFilterPopup openPopup={openPopup} />
    </ChatSectionWrapper>
  );
};

const ChatSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  width: 37.5rem;
  min-width: 37.5rem;
  height: 7.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const ChatSectionTitle = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const StChatFilterButton = styled(Button)`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme, openPopup }) =>
    openPopup && theme.color.lightGray};
`;

const ChatFilterButtonIcon = styled(MdFilterList)`
  font-size: 2rem;
`;

export default ChatSection;
