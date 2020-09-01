import React, { useEffect, useState, useRef, useReducer } from 'react';
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
    case 'CHECK_ALL_VALIDATION':
      return action.payload;
    case 'UPDATE_VALUE':
      return {
        ...state,
        [action.key]: {
          value: action.payload,
          invalid: false,
        },
      };
    case 'RESET':
      return initialState;
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
  const [isChecking, setIsChecking] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email, pw } = loginForm;

  const emailRef = useRef();
  const pwRef = useRef();
  const refObj = {
    emailRef,
    pwRef,
  };
  const onChangeForm = ({ target }, key) => {
    const value = target.value;
    _dispatch({ type: 'UPDATE_VALUE', key, payload: value });
  };

  const onToggleShowPw = () => {
    setShowPw(prevState => !prevState);
  };

  const openSignupMenuModal = () => {
    dispatch(openModal('signup_menu'));
  };

  const onSuccess = () => {
    console.log('===로그인 성공!====');
    _dispatch({ type: 'RESET' });
  };

  const changeFocus = () => {
    const invalidCount = Object.values(loginForm)
      .slice(0, 4)
      .reduce((acc, cur) => {
        return acc + +cur.invalid;
      }, 0);
    if (invalidCount) {
      refObj[
        `${Object.entries(loginForm).find(v => v[1].invalid)[0]}Ref`
      ].current.focus();
      return;
    }
    onSuccess();
  };

  const checkFormValidation = () => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const emailObj = {
      value: email.value,
      invalid: !emailRegExp.test(email.value),
    };
    const pwObj = {
      value: pw.value,
      invalid: pw.value.length < 8,
    };
    const payload = {
      email: emailObj,
      pw: pwObj,
    };
    _dispatch({ type: 'CHECK_ALL_VALIDATION', payload });
    setIsChecking(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkFormValidation();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    isChecking && changeFocus();

    setIsChecking(false);
  }, [isChecking, loginForm]);

  return (
    <LoginModal
      modalVisible={modalVisible}
      openSignupMenuModal={openSignupMenuModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
      loginForm={loginForm}
      showPw={showPw}
      onToggleShowPw={onToggleShowPw}
      loading={loading}
      handleSubmit={handleSubmit}
      onChangeForm={onChangeForm}
      refObj={refObj}
    ></LoginModal>
  );
};

export default LoginModalContainer;
