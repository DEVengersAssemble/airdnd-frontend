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
    pwContain: false,
    pwLength: false,
    pwCase: false,
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
          invalid: state[action.key].invalid && false,
        },
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
  const refObj = {
    emailRef,
    firstNameRef,
    lastNameRef,
    pwRef,
  };

  const [signup, dispatch] = useReducer(signupReducer, initialState);
  const [isChecking, setIsChecking] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);

  const { email, firstName, lastName, pw, pwValidation } = signup;
  const { pwLevel, pwContain, pwLength, pwCase } = pwValidation;

  const onPwFocus = () => {
    setPwFocus(true);
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
    console.log('[pwObj]', pwObj);
    const pwValidationObj = {
      pwLevel: 0,
      pwContain: false,
      pwLength: false,
      pwCase: false,
    };
    const payload = {
      email: emailObj,
      firstName: firstNameObj,
      lastName: lastNameObj,
      pw: pwObj,
      pwValidation: pwValidationObj,
    };
    dispatch({ type: 'CHECK_ALL_VALIDATION', payload });
    setIsChecking(true);
  };

  const onChangeForm = ({ target }, key) => {
    const payload = target.value;
    dispatch({ type: 'UPDATE_VALUE', key, payload });
  };

  const openLoginModal = () => {
    closeModal('signup');
    openModal('login');
  };

  const onSuccess = () => {
    console.log('===유저를 등록합니다====');
  };

  const changeFocus = () => {
    const invalidCount = Object.values(signup)
      .slice(0, 4)
      .reduce((acc, cur) => {
        return acc + +cur.invalid;
      }, 0);
    console.log(Object.entries(signup).find(v => v[1].invalid)[0]);
    if (invalidCount) {
      // Object.entries(signup)
      //   .reverse()
      //   .forEach((v, i) => {
      //     v[1].invalid && refObj[`${v[0]}Ref`].current.focus();
      //   });
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
    isChecking && changeFocus();
    setIsChecking(false);
  }, [isChecking]);

  return (
    <SignupModal
      signupModalVisible={signupModalVisible}
      openLoginModal={openLoginModal}
      closeModal={closeModal}
      signup={signup}
      onChangeForm={onChangeForm}
      onSignup={onSignup}
      refObj={refObj}
      onPwFocus={onPwFocus}
      pwFocus={pwFocus}
    ></SignupModal>
  );
};
export default SignupModalContainer;
