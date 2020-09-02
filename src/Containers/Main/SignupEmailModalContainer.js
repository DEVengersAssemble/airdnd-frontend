import React, { useEffect, useState, useRef, useReducer } from 'react';
import axios from 'axios';
import SignupEmailModal from '../../Components/Main/SignupEmailModal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import { sendSignUpReq } from '../../Api/signUpApi';

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

const SignupModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'signup_email';
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

  const [signup, _dispatch] = useReducer(signupReducer, initialState);
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
  const { pwLevel } = pwValidation;
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
    _dispatch({ type: 'CHECK_ALL_VALIDATION', payload });
    setIsChecking(true);
  };

  const updatePwValidation = () => {
    const payload = checkPwValidation();
    _dispatch({ type: 'VALIDATE_PW', payload });
  };

  const onChangeForm = ({ target }, key) => {
    const value = target.value;
    _dispatch({ type: 'UPDATE_VALUE', key, payload: value });
    setIsPwChanged(true);
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
    console.log('===유저를 등록합니다====');
    const payload = {
      email: email.value,
      first_name: firstName.value,
      last_name: lastName.value,
      pwd: pw.value,
      birthday: `${birthYear.value}/${birthMonth.value}/${birthDay.value}`,
      phone: '010-1111-1111',
      profileImg: '',
      description: '',
    };
    try {
      const { response } = await axios.post('/back/signUp', payload);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setPwFocus(false);
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
    isPwChanged && updatePwValidation();
    setIsChecking(false);
    setIsPwChanged(false);
  }, [isChecking, isPwChanged, signup]);

  return (
    <SignupEmailModal
      modalVisible={modalVisible}
      openLoginModal={openLoginModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
      signup={signup}
      pwValidation={pwValidation}
      onChangeForm={onChangeForm}
      onChangeSelect={onChangeSelect}
      onSignup={onSignup}
      refObj={refObj}
      onPwFocus={onPwFocus}
      pwFocus={pwFocus}
      onGoogleLoginSuccess={onGoogleLoginSuccess}
      onGoogleLoginFailure={onGoogleLoginFailure}
    ></SignupEmailModal>
  );
};
export default React.memo(SignupModalContainer);
