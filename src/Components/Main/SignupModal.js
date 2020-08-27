import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';
import { Input } from '../Global/Input';
import { RiEyeCloseLine, RiMailLine, RiUserLine } from 'react-icons/ri';

const StSignupModal = styled(Modal)`
  overflow-y: scroll;
`;

const StSignupForm = styled.form`
  width: 100%;
  padding: 10px;
`;

const StInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & svg {
    position: absolute;
    right: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const StInput = styled(Input)`
  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  ${({ isValid }) =>
    !isValid &&
    css`
      &:focus {
        outline: ${({ theme }) => theme.color.warning};
      }
    `}
`;

const StBirthDayTitle = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding: 10px 5px;
  color: ${({ theme }) => theme.color.black};
`;

const StBirthDayText = styled.p`
  font-size: 14px;
  line-height: 20px;
  padding-left: 5px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StValidationText = styled.p`
  color: ${({ theme }) => theme.color.warning};
  padding: 5px;
  background: lightblue;
`;

const StSubmitButton = styled(Button)``;

const StLoginButton = styled(Button)``;

const SignupModal = ({
  signupModalVisible,
  openLoginModal,
  closeModal,
  form,
  onChangeForm,
  onSignup,
  formValidation,
  refObj,
}) => {
  const {
    email,
    firstName,
    lastName,
    pw,
    // birthMonth,
    // birthDay,
    // birthYear,
  } = form;

  const {
    isEmailInvalid,
    isFirstNameInvalid,
    isLastNameInvalid,
    isPwInvalid,
    // isBirthMonthInvalid,
    // isBirthDayInvalid,
    // isBirthYearInvalid,
  } = formValidation;
  const {
    emailRef,
    firstNameRef,
    lastNameRef,
    pwRef,
    // birthMonthRef,
    // birthDayRef,
    // birthYearRef,
  } = refObj;
  return (
    <StSignupModal
      modalState={signupModalVisible}
      header
      title="회원가입"
      width="570px"
      height="680px"
      setModalState={() => closeModal('signup')}
    >
      <StSignupForm onSubmit={onSignup}>
        <StInputWrapper>
          <StInput
            value={email}
            onChange={e => onChangeForm(e, 'email')}
            focusBorderColor
            placeholder="이메일 주소"
            ref={emailRef}
          ></StInput>
          <RiMailLine />
        </StInputWrapper>
        {isEmailInvalid && (
          <StValidationText isInvalid={isEmailInvalid}>
            이메일이 필요합니다.
          </StValidationText>
        )}
        <StInputWrapper>
          <StInput
            value={firstName}
            onChange={e => onChangeForm(e, 'firstName')}
            focusBorderColor
            placeholder="이름 (예: 길동)"
            ref={firstNameRef}
          ></StInput>
          <RiUserLine />
        </StInputWrapper>
        {isFirstNameInvalid && (
          <StValidationText isInvalid={isFirstNameInvalid}>
            이름을 입력하세요.
          </StValidationText>
        )}
        <StInputWrapper>
          <StInput
            value={lastName}
            onChange={e => onChangeForm(e, 'lastName')}
            focusBorderColor
            placeholder="성 (예: 홍)"
            ref={lastNameRef}
          ></StInput>
          <RiUserLine />
        </StInputWrapper>
        {isLastNameInvalid && (
          <StValidationText isInvalid={isLastNameInvalid}>
            성을 입력하세요.
          </StValidationText>
        )}
        <StInputWrapper>
          <StInput
            type="password"
            value={pw}
            onChange={e => onChangeForm(e, 'pw')}
            focusBorderColor
            placeholder="비밀번호 설정하기"
            ref={pwRef}
          ></StInput>
          <RiEyeCloseLine />
        </StInputWrapper>
        {isPwInvalid && (
          <StValidationText isInvalid={isLastNameInvalid}>
            비밀번호를 입력하세요.
          </StValidationText>
        )}
        <StBirthDayTitle>생일</StBirthDayTitle>
        <StBirthDayText>
          만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
          에어비앤비 이용자에게 공개되지 않습니다.
        </StBirthDayText>
        <StSubmitButton type="submit">가입하기</StSubmitButton>
      </StSignupForm>
      <hr />
      <StLoginButton btnType="color" onClick={openLoginModal}>
        로그인하기
      </StLoginButton>
    </StSignupModal>
  );
};

export default SignupModal;
