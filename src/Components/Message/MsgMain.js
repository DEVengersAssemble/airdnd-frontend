import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import { Input } from '../Global/Input';
import Button from '../Global/Button';
import { AiOutlinePicture } from 'react-icons/ai';
const MsgMain = () => {
  return (
    <MsgMainWrapper>
      <MsgInbox>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
        <MsgItems>채팅내역</MsgItems>
      </MsgInbox>
      <MsgInputOuter>
        <MsgInputInner>
          <Button
            btnType="circle"
            border="none"
            hover={{ backgroundColor: theme.lightGray }}
            style={{ width: '4rem', height: '4rem' }}
          >
            <MsgImageUploadIcon />
          </Button>
          <MsgInput message placeholder="메시지를 입력하세요." />
        </MsgInputInner>
      </MsgInputOuter>
    </MsgMainWrapper>
  );
};

const MsgMainWrapper = styled.div`
  width: calc(100vw - 75rem);
  min-width: 37.5rem;
  position: absolute;
  top: 15.5rem;
  left: 37.5rem;
`;

const MsgInbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-height: calc(100vh - 22rem);
  overflow: scroll;
`;

const MsgItems = styled.div`
  width: 100%;
  max-width: 57rem;
  min-width: 37.5rem;
  padding: 2.5rem;
`;

const MsgInputOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
`;

const MsgInputInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 57.5rem;
  min-width: 37.5rem;
  padding: 0rem 2.5rem;
  & > label {
    margin-left: 1rem;
  }
`;

const MsgImageUploadIcon = styled(AiOutlinePicture)`
  font-size: 2rem;
`;

const MsgInput = styled(Input)`
  margin-left: 4rem;
`;

export default MsgMain;
