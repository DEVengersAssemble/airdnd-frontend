import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { FaLock } from 'react-icons/fa';
import theme from '../../style/theme';
import Modal from '../Global/Modal';
import Button from '../Global/Button';

const ChatFlagModal = () => {
  return (
    <StFlagModal
      width="55rem"
      height="50rem"
      modalState="true"
      setModalState="false"
    >
      <StFlagModalTitle>어떤 문제가 있나요?</StFlagModalTitle>
      <StFlagModalSub>
        <StFaLock />
        <StFlagModalDescription>
          이정보는 에어비앤비만 볼 수 있습니다.
        </StFlagModalDescription>
      </StFlagModalSub>
      <StFlagModalRadioWrapper>
        <StFlagModalLabel>
          <StFlagModalText>
            사기 또는 스팸 메시지를 보내는 것 같아요
          </StFlagModalText>
          <StFlagModalInput type="radio" name="flag" />
        </StFlagModalLabel>
        <StFlagModalLabel>
          <StFlagModalText>불쾌해요</StFlagModalText>
          <StFlagModalInput type="radio" name="flag" />
        </StFlagModalLabel>
        <StFlagModalLabel>
          <StFlagModalText>기타</StFlagModalText>
          <StFlagModalInput type="radio" name="flag" />
        </StFlagModalLabel>
      </StFlagModalRadioWrapper>
      <StFlagButtonWrapper>
        <StFlagButton border="none" color="green" padding="1.5rem 2.5rem">
          확인
        </StFlagButton>
      </StFlagButtonWrapper>
    </StFlagModal>
  );
};

const StFlagModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  padding: 6rem 2.5rem 2.5rem;
`;

const StFlagModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

const StFlagModalSub = styled.div`
  display: flex;
  padding-top: 1rem;
`;

const StFaLock = styled(FaLock)`
  font-size: 1.4rem;
`;

const StFlagModalDescription = styled.div`
  padding-left: 0.5rem;
`;

const StFlagModalRadioWrapper = styled.div`
  padding: 2rem 0rem 3rem;
`;

const StFlagModalLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0rem;
  border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  & + label {
    border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  }
  cursor: pointer;
`;

const StFlagModalInput = styled.input`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const StFlagModalText = styled.div`
  font-weight: light;
`;

const StFlagButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StFlagButton = styled(Button)`
  border-radius: 3px;
`;
export default ChatFlagModal;
