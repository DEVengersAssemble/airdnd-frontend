import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from './Button';
import { FaBox } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

const Toast = ({ inbox, ...rest }) => {
  return (
    <ToastWrapper>
      <StFaBox />
      <ToastText>
        {inbox ? '대화 보관 처리 취소됨' : '대화 보관 처리됨'}
        {' · '}
      </ToastText>

      <Button
        btnType="underlined"
        padding="0rem 0rem 0rem 0.2rem"
        fontSize="1.4rem"
        {...rest}
      >
        실행취소
      </Button>
    </ToastWrapper>
  );
};

const CanceledToast = () => {
  return (
    <ToastWrapper>
      <StFaBox />
      <ToastText>실행 취소</ToastText>
    </ToastWrapper>
  );
};

const CopyToast = () => {
  return (
    <ToastWrapper>
      <MdCheckCircle />
      <ToastText>클립보드에 복사 완료</ToastText>
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  border-radius: 3rem;
  padding: 0.9rem 1.5rem;
  width: fit-content;
  box-shadow: 0rem 0rem 2rem ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const ToastText = styled.div`
  padding-left: 0.5rem;
  font-size: 1.4rem;
`;

const StFaBox = styled(FaBox)`
  font-size: 1.2rem;
`;

export { Toast, CopyToast, CanceledToast };
