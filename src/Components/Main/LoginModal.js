import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';

const StLoginModal = styled(Modal)``;

const StLoginButton = styled(Button)``;

const LoginModal = ({ loginModalVisible, openSignupModal, closeModal }) => {
  return (
    <StLoginModal
      modalState={loginModalVisible}
      header
      title="로그인"
      setModalState={() => closeModal('login')}
    >
      <StLoginButton btnType="color" onClick={openSignupModal}>
        회원가입하기
      </StLoginButton>
    </StLoginModal>
  );
};

export default LoginModal;
