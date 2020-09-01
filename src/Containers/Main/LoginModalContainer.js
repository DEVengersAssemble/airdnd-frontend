import React, { useState, useRef, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import LoginModal from '../../Components/Main/LoginModal';

const LoginModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'login';
  const [showPw, setShowPw] = useState(false);

  const emailRef = useRef();
  const pwRef = useRef();
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
