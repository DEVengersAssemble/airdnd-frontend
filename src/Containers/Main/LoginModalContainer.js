import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import LoginModal from '../../Components/Main/LoginModal';

const LoginModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'login';
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({});
  // {email: '', firstName: '', lastName: '', pw:'', birthMonth: 0, birthDay: 0, birthYear: 0}

  const onToggleShowPw = () => {
    setShowPw(prevState => !prevState);
  };

  const openSignupMenuModal = () => {
    dispatch(openModal('signup_menu'));
  };

  return (
    <LoginModal
      modalVisible={modalVisible}
      openSignupMenuModal={openSignupMenuModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
      showPw={showPw}
      onToggleShowPw={onToggleShowPw}
    ></LoginModal>
  );
};

export default LoginModalContainer;
