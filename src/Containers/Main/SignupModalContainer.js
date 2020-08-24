import React, { useState } from 'react';
import SignupModal from '../../Components/Main/SignupModal';

const SignupModalContainer = ({
  signupModalVisible,
  openModal,
  closeModal,
}) => {
  const [form, setForm] = useState({});
  // {email: '', firstName: '', lastName: '', pw:'', birthMonth: 0, birthDay: 0, birthYear: 0}

  const openLoginModal = () => {
    console.log('[openLoginModal]');
    closeModal('signup');
    openModal('login');
  };
  return (
    <SignupModal
      signupModalVisible={signupModalVisible}
      openLoginModal={openLoginModal}
      closeModal={closeModal}
    ></SignupModal>
  );
};

export default SignupModalContainer;
