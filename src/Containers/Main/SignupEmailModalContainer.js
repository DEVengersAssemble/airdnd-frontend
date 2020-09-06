import React, { useEffect, useState, useRef, useReducer } from 'react';
import axios from 'axios';
import SignupEmailModal from '../../Components/Main/SignupEmailModal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import { signupRequest } from '../../Modules/user';

const initialState = {
  email: {
    value: '',
    invalid: null,
  },
  firstName: {
    value: '',
    invalid: null,
  },
  lastName: {
    value: '',
    invalid: null,
  },
  pwd: {
    value: '',
    invalid: null,
  },
  pwdValidation: {
    pwdLevel: 0,
    pwdContain: null,
    pwdLength: null,
    pwdCase: null,
  },
  birthMonth: {
    value: '월',
    invalid: null,
  },
  birthDay: {
    value: '일',
    invalid: null,
  },
  birthYear: {
    value: '년',
    invalid: null,
  },
};

const signupReducer = (state, action) => {
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
    case 'VALIDATE_PWD':
      return {
        ...state,
        pwdValidation: action.payload,
      };
    case 'RESET':
      return initialState;
    case 'UPDATE_SELECT':
      return {
        ...state,
        [action.key]: action.payload,
      };
    default:
      return state;
  }
};

const SignupModalContainer = () => {
  const dispatch = useDispatch();
  const { loading, error, signupRes } = useSelector(state => state.user);
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'signup_email';
  const [signup, _dispatch] = useReducer(signupReducer, initialState);
  const [isChecking, setIsChecking] = useState(false);
  const [isPwdChanged, setIsPwdChanged] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const {
    email,
    firstName,
    lastName,
    pwd,
    pwdValidation,
    birthMonth,
    birthDay,
    birthYear,
  } = signup;
  const { pwdLevel } = pwdValidation;

  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const pwdRef = useRef();
  const birthMonthRef = useRef();
  const birthDayRef = useRef();
  const birthYearRef = useRef();
  const refObj = {
    emailRef,
    firstNameRef,
    lastNameRef,
    pwdRef,
    birthMonthRef,
    birthDayRef,
    birthYearRef,
  };

  const onPwdFocus = () => {
    setPwdFocus(true);
  };

  const checkPwdValidation = () => {
    const pwdLength = pwd.value && pwd.value.length >= 8;
    const emailResult =
      !email.value.split('@')[0] ||
      !pwd.value.includes(email.value.split('@')[0]);
    const firstNameResult =
      !firstName.value || !pwd.value.includes(firstName.value);
    const lastNameResult =
      !lastName.value || !pwd.value.includes(lastName.value);
    const pwdContain =
      pwd.value && emailResult && firstNameResult && lastNameResult;
    const numberPattern = /[0-9]/;
    const specialCasePattern = /[~!@#$%^&*()_+|<>?:{}]/;
    const pwdCase =
      numberPattern.test(pwd.value) || specialCasePattern.test(pwd.value);
    const pwdCaseBoth =
      numberPattern.test(pwd.value) && specialCasePattern.test(pwd.value);
    const pwdLevel =
      pwdContain && pwdLength && pwdCaseBoth
        ? 2
        : pwdContain && pwdLength && pwdCase
        ? 1
        : 0;

    const pwdValidation = {
      pwdLevel,
      pwdContain,
      pwdLength,
      pwdCase,
    };

    return pwdValidation;
  };
  const checkFormValidation = () => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const numberRegExp = /[\d]/;
    const specialCharRegExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    const emailObj = {
      value: email.value,
      invalid: !emailRegExp.test(email.value),
    };
    const firstNameObj = {
      value: firstName.value,
      invalid:
        firstName.value.length < 1 ||
        firstName.value.length > 35 ||
        numberRegExp.test(firstName.value) ||
        specialCharRegExp.test(firstName.value),
    };
    const lastNameObj = {
      value: lastName.value,
      invalid:
        lastName.value.length < 1 ||
        lastName.value.length > 35 ||
        numberRegExp.test(lastName.value) ||
        specialCharRegExp.test(lastName.value),
    };
    const pwdObj = {
      value: pwd.value,
      invalid: !pwdLevel,
    };
    const pwdValidationObj = checkPwdValidation();
    const birthMonthObj = {
      value: birthMonth.value,
      invalid: isNaN(birthMonth.value),
    };
    const birthDayObj = {
      value: birthDay.value,
      invalid: isNaN(birthDay.value),
    };
    const birthYearObj = {
      value: birthYear.value,
      invalid: isNaN(birthYear.value),
    };
    const payload = {
      email: emailObj,
      firstName: firstNameObj,
      lastName: lastNameObj,
      pwd: pwdObj,
      pwdValidation: pwdValidationObj,
      birthMonth: birthMonthObj,
      birthDay: birthDayObj,
      birthYear: birthYearObj,
    };
    _dispatch({ type: 'CHECK_ALL_VALIDATION', payload });
    setIsChecking(true);
  };

  const updatePwdValidation = () => {
    const payload = checkPwdValidation();
    _dispatch({ type: 'VALIDATE_PWD', payload });
  };

  const onChangeForm = ({ target }, key) => {
    const value = target.value;
    _dispatch({ type: 'UPDATE_VALUE', key, payload: value });
    setIsPwdChanged(true);
  };

  const onChangeSelect = ({ target }, key) => {
    const value = Number(target.value);
    const payload = {
      value,
      invalid: isNaN(value),
    };
    _dispatch({ type: 'UPDATE_SELECT', key, payload });
  };

  const openLoginModal = () => {
    dispatch(openModal('login'));
  };

  const onSuccess = async () => {
    console.log('===회원가입 시도====');
    const userInfo = {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      pwd: pwd.value,
      birthday: `${birthYear.value}/${birthMonth.value}/${birthDay.value}`,
      phone: '010-1111-1111',
      profileImg: '',
      description: '',
    };
    console.log('userInfo: ', userInfo);
    dispatch(signupRequest(userInfo));

    setPwdFocus(false);
    _dispatch({ type: 'RESET' });
  };

  const onGoogleLoginSuccess = res => {
    console.log('[googleLoginSucess]: ', res);
  };

  const onGoogleLoginFailure = res => {
    console.log('[googleLoginFailure]: ', res);
  };

  const changeFocus = () => {
    const invalidCount = Object.values(signup)
      .slice(0, 4)
      .reduce((acc, cur) => {
        return acc + +cur.invalid;
      }, 0);
    if (invalidCount) {
      refObj[
        `${Object.entries(signup).find(v => v[1].invalid)[0]}Ref`
      ].current.focus();
      return;
    }
    onSuccess();
  };

  const onSignup = e => {
    e.preventDefault();
    checkFormValidation();
  };

  useEffect(() => {
    isChecking && changeFocus();
    isPwdChanged && updatePwdValidation();
    setIsChecking(false);
    setIsPwdChanged(false);
  }, [isChecking, isPwdChanged, signup]);

  return (
    <SignupEmailModal
      modalVisible={modalVisible}
      openLoginModal={openLoginModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
      signup={signup}
      loading={loading}
      signupRes={signupRes}
      pwdValidation={pwdValidation}
      onChangeForm={onChangeForm}
      onChangeSelect={onChangeSelect}
      onSignup={onSignup}
      refObj={refObj}
      onPwdFocus={onPwdFocus}
      pwdFocus={pwdFocus}
      onGoogleLoginSuccess={onGoogleLoginSuccess}
      onGoogleLoginFailure={onGoogleLoginFailure}
    ></SignupEmailModal>
  );
};
export default React.memo(SignupModalContainer);
