import React from 'react';
import styled from 'styled-components';
import MsgSectionChatItem from '../Message/MsgSectionChatItem';

const MsgSectionMain = ({ chatHistory, isHost }) => {
  return (
    <MsgSectionMainWrapper>
      <MsgSectionMainChattingWrapper>
        {chatHistory && (
          <MsgSectionMainChattingBox>
            {chatHistory.map(chat => (
              <MsgSectionChatItem key={chat.id} chat={chat} isHost={isHost} />
            ))}
          </MsgSectionMainChattingBox>
        )}
      </MsgSectionMainChattingWrapper>
    </MsgSectionMainWrapper>
  );
};

const MsgSectionMainWrapper = styled.div`
  overflow-y: hidden;
  max-height: calc(100% - 8rem);
  display: flex;
  flex-direction: column;
`;

const MsgSectionMainChattingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-height: calc(100vh - 22rem);
  overflow: scroll;
`;

const MsgSectionMainChattingBox = styled.ul`
  width: 100%;
  max-width: 57rem;
  min-width: 37.5rem;
  padding: 2.5rem;
  & > div + div {
    padding-top: 2rem;
  }
`;

export default MsgSectionMain;
