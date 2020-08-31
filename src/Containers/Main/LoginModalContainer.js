import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import LoginModal from '../../Components/Main/LoginModal';

const LoginModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const loginModalVisible = name === 'login';
  const [form, setForm] = useState({});
  // {email: '', firstName: '', lastName: '', pw:'', birthMonth: 0, birthDay: 0, birthYear: 0}

  const openSignupModal = () => {
    dispatch(openModal('signup'));
  };

  return (
    <LoginModal
      loginModalVisible={loginModalVisible}
      openSignupModal={openSignupModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
    ></LoginModal>
  );
};

export default LoginModalContainer;
