import React from 'react';
import styled from 'styled-components';
import MsgSectionChatItemContainer from '../../Containers/Message/MsgSectionChatItemContainer';

const MsgSectionMain = ({ activeMsg, chatHistory, isHost, chat }) => {
  return (
    <MsgSectionMainWrapper>
      <MsgSectionMainChattingWrapper>
        {/* {chatHistory && (
          <MsgSectionMainChattingBox>
            {chatHistory.map(chat => (
              <MsgSectionChatItemContainer
                activeMsg={activeMsg}
                key={chat.id}
                chat={chat}
                isHost={isHost}
              />
            ))}
          </MsgSectionMainChattingBox>
        )} */}
        <MsgSectionMainChattingBox>
          {chat.map(({ id, msg }, idx) => (
            <li key={idx}>
              <div style={{ color: 'green' }}>{id}: </div>
              <div>{msg}</div>
            </li>
          ))}
        </MsgSectionMainChattingBox>
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
  border: 1px solid red;
  width: 100%;
  max-width: 57rem;
  min-width: 37.5rem;
  padding: 2.5rem;
  & > div + div {
    padding-top: 2rem;
  }
`;

export default MsgSectionMain;
