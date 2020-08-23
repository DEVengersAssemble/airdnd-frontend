import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';

const StSignupModal = styled(Modal)``;

const SignupModal = ({ signupModalVisible, closeSignupModal }) => {
  return (
    <StSignupModal modalState={signupModalVisible} header title="회원가입">
      <div>hello</div>
    </StSignupModal>
  );
};

export default SignupModal;
