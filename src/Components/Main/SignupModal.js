import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';
import DropDownWithFocus from '../Global/DropDownWithFocus';

const StSignupModal = styled(Modal)``;

const StDropDown = styled(DropDownWithFocus)`
  background: red;
  font-size: 40px;
`;

const StLoginButton = styled(Button)``;

const SignupModal = ({ signupModalVisible, openLoginModal, closeModal }) => {
  return (
    <StSignupModal
      modalState={signupModalVisible}
      header
      title="회원가입"
      setModalState={() => closeModal('signup')}
    >
      <StDropDown name="number" title="number" options={['1', '2']}>
        hello
      </StDropDown>
      <StLoginButton btnType="color" onClick={openLoginModal}>
        로그인하기
      </StLoginButton>
    </StSignupModal>
  );
};

export default SignupModal;
