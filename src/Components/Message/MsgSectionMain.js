import React from 'react';
import styled from 'styled-components';
import MsgSectionChatItem from '../Message/MsgSectionChatItem';

const MsgSectionMain = ({ msgListSectionState, msgDetailSectionState }) => {
  const isHost = true;

  return (
    <MsgSectionMainWrapper>
      <MsgSectionMainChattingWrapper>
        <MsgSectionMainChattingBox>
          <MsgSectionChatItem host={isHost} />
          <MsgSectionChatItem />
          <MsgSectionChatItem />
          <MsgSectionChatItem />
        </MsgSectionMainChattingBox>
      </MsgSectionMainChattingWrapper>
    </MsgSectionMainWrapper>
  );
};

const MsgSectionMainWrapper = styled.div`
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
