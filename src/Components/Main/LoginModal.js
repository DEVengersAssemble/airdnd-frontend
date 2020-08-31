import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';

const StLoginModal = styled(Modal)``;

const StLoginButton = styled(Button)``;

const LoginModal = ({ modalVisible, openSignupMenuModal, closeModal }) => {
  return (
    <StLoginModal
      modalState={modalVisible}
      header
      title="로그인"
      setModalState={closeModal}
    >
      <StLoginButton btnType="color" onClick={openSignupMenuModal}>
        회원가입하기
      </StLoginButton>
    </StLoginModal>
  );
};

export default LoginModal;
