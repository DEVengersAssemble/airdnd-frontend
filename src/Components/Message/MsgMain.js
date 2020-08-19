import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import { Input } from '../Global/Input';
import Button from '../Global/Button';
import { AiOutlinePicture } from 'react-icons/ai';
import MsgItem from '../Message/MsgItem';

const MsgMain = ({ onClickFlagModal }) => {
  const host = true;

  return (
    <MsgMainWrapper>
      <MsgInbox>
        <MsgItems>
          <MsgItem host={host} onClickFlagModal={onClickFlagModal} />
          <MsgItem />
        </MsgItems>
      </MsgInbox>
      <MsgInputOuter>
        <MsgInputInner>
          <Button
            btnType="circle"
            border="none"
            hover={{
              backgroundColor: theme.color.lightGray,
            }}
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
  & > div + div {
    padding-top: 2rem;
  }
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
