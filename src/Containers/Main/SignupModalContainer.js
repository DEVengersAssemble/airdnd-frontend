import React, { useState, useRef } from 'react';
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
    const isFirstNameInvalid = !firstName;
    const isLastNameInvalid = !lastName;
    const isPwInvalid = !pw;
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

  const changeFocus = () => {
    if (Object.values(formValidation).filter(v => v).length) {
      Object.entries(form)
        .reverse()
        .forEach(v => {
          !v[1] && refObj[`${v[0]}Ref`].current.focus();
        });
      return;
    }
    onSuccess();
  };

  const onSignup = e => {
    e.preventDefault();
    checkFormValidation();
    changeFocus();
  };

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
