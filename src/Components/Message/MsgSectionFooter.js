import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import Button from '../Global/Button';
import { Input } from '../Global/Input';
import { AiOutlinePicture } from 'react-icons/ai';

const MsgSectionFooter = ({ msgListSectionState, msgDetailSectionState }) => {
  return (
    <MsgSectionFooterWrapper>
      <MsgSectionFooterInner>
        <Button
          btnType="circle"
          border="none"
          hover={{
            backgroundColor: theme.color.lightGray,
          }}
          style={{ width: '4rem', height: '4rem' }}
        >
          <MsgSectionFooterImageUploadIcon />
        </Button>
        <Input message placeholder="메시지를 입력하세요." />
      </MsgSectionFooterInner>
    </MsgSectionFooterWrapper>
  );
};

const MsgSectionFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
`;

const MsgSectionFooterInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 57.5rem;
  padding: 0rem 2.5rem;
  & > label {
    margin-left: 1rem;
  }
`;

const MsgSectionFooterImageUploadIcon = styled(AiOutlinePicture)`
  font-size: 2rem;
`;

export default MsgSectionFooter;
