import React, { useState, useRef, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import LoginModal from '../../Components/Main/LoginModal';

const initialState = {
  email: {
    value: '',
    invalid: null,
  },
  pw: {
    value: '',
    invalid: null,
  },
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        [action.key]: {
          value: action.payload,
          invalid: false,
        },
      };

    default:
      return state;
  }
};

const LoginModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'login';
  const [showPw, setShowPw] = useState(false);
  const [loginForm, _dispatch] = useReducer(loginReducer, initialState);
  const { email, pw } = loginForm;

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
      loginForm={loginForm}
    ></LoginModal>
  );
};

export default LoginModalContainer;
