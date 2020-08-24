import React, { useState, useRef, useCallback } from 'react';
import SignupModal from '../../Components/Main/SignupModal';

const SignupModalContainer = ({
  signupModalVisible,
  openModal,
  closeModal,
}) => {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    pw: '',
    // birthMonth: null,
    // birthDay: null,
    // birthYear: null,
  });
  const [formValidation, setFormValidation] = useState({
    isEmailInvalid: null,
    isFirstNameInvalid: null,
    isLastNameInvalid: null,
    isPwInvalid: null,
    // isBirthMonthInvalid: null,
    // isBirthDayInvalid: null,
    // isBirthYearInvalid: null,
  });
  console.log('[formValidation]: ', formValidation);
  console.log('[form]', form);

  const checkFormValidation = () => {
    const {
      email,
      firstName,
      lastName,
      pw,
      // birthMonth,
      // birthDay,
      // birthYear,
    } = form;

    const isEmailInvalid = !email;
    console.log('isEmailInvalid: ', !email);
    const isFirstNameInvalid = !firstName;
    console.log('isFirstNameInvalid: ', !firstName);
    const isLastNameInvalid = !lastName;
    console.log('isLastNameInvalid: ', !lastName);
    const isPwInvalid = !pw;
    console.log('isPwInvalid: ', !pw);

    // const isBirthMonthInvalid = !birthMonth;
    // const isBirthDayInvalid = !birthDay;
    // const isBirthYearInvalid = !birthYear;
    const result = {
      isEmailInvalid,
      isFirstNameInvalid,
      isLastNameInvalid,
      isPwInvalid,
      // isBirthMonthInvalid,
      // isBirthDayInvalid,
      // isBirthYearInvalid,
    };
    console.log('[result]: ', result);
    setFormValidation(result);
  };

  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const pwRef = useRef();
  // const birthMonthRef = useRef();
  // const birthDayRef = useRef();
  // const birthYearRef = useRef();

  const refObj = {
    emailRef,
    firstNameRef,
    lastNameRef,
    pwRef,
    // birthMonthRef,
    // birthDayRef,
    // birthYearRef,
  };
  const onChangeForm = ({ target }, type) => {
    setForm({ ...form, [type]: target.value });
  };

  const openLoginModal = () => {
    closeModal('signup');
    openModal('login');
  };

  const onSuccess = () => {
    console.log('===유저를 등록합니다====');
    console.log('유저정보: ', form);
  };

  const onSignup = useCallback(
    e => {
      e.preventDefault();
      checkFormValidation();
      console.log('[onSignup..formValiation]', formValidation);
      console.log(Object.values(formValidation));
      console.log(Object.values(formValidation).filter(v => v));
      console.log(Object.values(formValidation).filter(v => v).length);
      if (Object.values(form).map(v => v).length) {
        Object.entries(form)
          .reverse()
          .forEach(v => {
            !v[1] && refObj[`${v[0]}Ref`].current.focus();
          });
        return;
      }
      onSuccess();
    },
    [formValidation, form],
  );

  return (
    <SignupModal
      signupModalVisible={signupModalVisible}
      openLoginModal={openLoginModal}
      closeModal={closeModal}
      form={form}
      formValidation={formValidation}
      onChangeForm={onChangeForm}
      onSignup={onSignup}
      refObj={refObj}
    ></SignupModal>
  );
};

export default SignupModalContainer;
