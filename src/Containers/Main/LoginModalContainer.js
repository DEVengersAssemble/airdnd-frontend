import React, { useState } from 'react';
import LoginModal from '../../Components/Main/LoginModal';

const LoginModalContainer = ({ loginModalVisible, openModal, closeModal }) => {
  const [form, setForm] = useState({});
  // {email: '', firstName: '', lastName: '', pw:'', birthMonth: 0, birthDay: 0, birthYear: 0}

  const openSignupModal = () => {
    closeModal('login');
    openModal('signup');
  };
  return (
    <LoginModal
      loginModalVisible={loginModalVisible}
      openSignupModal={openSignupModal}
      closeModal={closeModal}
    ></LoginModal>
  );
};

export default LoginModalContainer;
