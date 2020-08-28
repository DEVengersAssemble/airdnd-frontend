import React, { useState, useRef, useReducer } from 'react';
import SignupModal from '../../Components/Main/SignupModal';

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
  pw: {
    value: '',
    invalid: null,
  },
  pwValidation: {
    pwLevel: 0,
    pwContain: null,
    pwLength: null,
    pwCase: null,
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
    case 'VALIDATE_PW':
      return {
        ...state,
        pwValidation: action.payload,
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

const SignupModalContainer = ({
  signupModalVisible,
  openModal,
  closeModal,
}) => {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const pwRef = useRef();
  const birthMonthRef = useRef();
  const birthDayRef = useRef();
  const birthYearRef = useRef();
  const refObj = {
    emailRef,
    firstNameRef,
    lastNameRef,
    pwRef,
    birthMonthRef,
    birthDayRef,
    birthYearRef,
  };

  const [signup, dispatch] = useReducer(signupReducer, initialState);
  const [isChecking, setIsChecking] = useState(false);
  const [isPwChanged, setIsPwChanged] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const {
    email,
    firstName,
    lastName,
    pw,
    pwValidation,
    birthMonth,
    birthDay,
    birthYear,
  } = signup;
  const { pwLevel, pwContain, pwLength, pwCase } = pwValidation;
  const onPwFocus = () => {
    setPwFocus(true);
  };

  const checkPwValidation = () => {
    const pwLength = pw.value && pw.value.length >= 8;
    const emailResult =
      !email.value.split('@')[0] ||
      !pw.value.includes(email.value.split('@')[0]);
    const firstNameResult =
      !firstName.value || !pw.value.includes(firstName.value);
    const lastNameResult =
      !lastName.value || !pw.value.includes(lastName.value);
    const pwContain =
      pw.value && emailResult && firstNameResult && lastNameResult;
    const numberPattern = /[0-9]/;
    const specialCasePattern = /[~!@#$%^&*()_+|<>?:{}]/;
    const pwCase =
      numberPattern.test(pw.value) || specialCasePattern.test(pw.value);
    const pwCaseBoth =
      numberPattern.test(pw.value) && specialCasePattern.test(pw.value);
    const pwLevel =
      pwContain && pwLength && pwCaseBoth
        ? 2
        : pwContain && pwLength && pwCase
        ? 1
        : 0;

    const pwValidation = {
      pwLevel,
      pwContain,
      pwLength,
      pwCase,
    };

    return pwValidation;
  };
  const checkFormValidation = () => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const emailObj = {
      value: email.value,
      invalid: !emailRegExp.test(email.value),
    };
    const firstNameObj = {
      value: firstName.value,
      invalid: !firstName.value,
    };
    const lastNameObj = {
      value: lastName.value,
      invalid: !lastName.value,
    };
    const pwObj = {
      value: pw.value,
      invalid: !pwLevel,
    };
    const pwValidationObj = checkPwValidation();
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
      pw: pwObj,
      pwValidation: pwValidationObj,
      birthMonth: birthMonthObj,
      birthDay: birthDayObj,
      birthYear: birthYearObj,
    };
    dispatch({ type: 'CHECK_ALL_VALIDATION', payload });
    setIsChecking(true);
  };

  const updatePwValidation = () => {
    const payload = checkPwValidation();
    dispatch({ type: 'VALIDATE_PW', payload });
  };

  const onChangeForm = ({ target }, key) => {
    const value = target.value;
    dispatch({ type: 'UPDATE_VALUE', key, payload: value });
    setIsPwChanged(true);
  };

  const onChangeSelect = ({ target }, key) => {
    const value = Number(target.value);
    const payload = {
      value,
      invalid: isNaN(value),
    };
    dispatch({ type: 'UPDATE_SELECT', key, payload });
  };
  const openLoginModal = () => {
    closeModal('signup');
    openModal('login');
  };

  const onSuccess = () => {
    console.log('===유저를 등록합니다====');
    setPwFocus(false);
    dispatch({ type: 'RESET' });
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

  React.useEffect(() => {
    console.log('[USEEFFECT]=======');
    isChecking && changeFocus();
    isPwChanged && updatePwValidation();
    setIsChecking(false);
    setIsPwChanged(false);
  }, [isChecking, isPwChanged, signup]);

  return (
    <SignupModal
      signupModalVisible={signupModalVisible}
      openLoginModal={openLoginModal}
      closeModal={closeModal}
      signup={signup}
      pwValidation={pwValidation}
      onChangeForm={onChangeForm}
      onChangeSelect={onChangeSelect}
      onSignup={onSignup}
      refObj={refObj}
      onPwFocus={onPwFocus}
      pwFocus={pwFocus}
    ></SignupModal>
  );
};
export default SignupModalContainer;
