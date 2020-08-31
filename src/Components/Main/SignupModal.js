import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';
import DropDown from '../Global/DropDown';
import { Input } from '../Global/Input';
import { RiEyeCloseLine, RiMailLine, RiUserLine } from 'react-icons/ri';
import { MdCheck, MdClose } from 'react-icons/md';
import { GoogleLogin } from 'react-google-login';

const StSignupModal = styled(Modal)`
  overflow-y: scroll;
`;

const StDividerLine = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const StDividerText = styled.span`
  position: absolute;
  font-size: 14px;
  top: 120px;
  left: calc(50% - 34px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0 20px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StSignupFormWrapper = styled.div`
  padding: 20px;
`;

const StSocialLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 0 0 20px 0;
`;

const StSignupForm = styled.form`
  width: 100%;
  margin-top: 30px;
`;

const StInputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;

  & > svg {
    position: absolute;
    top: 17px;
    right: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const StInput = styled(Input)`
  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      background: #fff8f6;
      border: 1px solid ${({ theme }) => theme.color.warning};
      &:focus {
        border: 1px solid ${({ theme }) => theme.color.warning};
      }
    `};
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
  font-size: 14px;
  font-weight: 600;
  padding: 5px 0 0 5px;
`;

const StPwValidationList = styled.div`
  margin-top: 5px;
  padding-left: 5px;
`;

const StPwValidationItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: ${({ theme, isPwValid }) =>
    isPwValid ? '#2f9e44' : theme.color.warning};
`;

const StPwValidationText = styled.span`
  font-size: 14px;
  padding-left: 5px;
`;

const StPwValidationLevelText = styled.span`
  color: ${({ pwLevel, theme }) => (pwLevel ? '#2f9e44' : theme.color.warning)};
`;

const StBirthDayWrapper = styled.div`
  display: flex;
  background: transparent;
  justify-content: space-between;
  padding-top: 20px;
`;

const StBirthDayDropDown = styled(DropDown)`
  ${({ isSelectInvalid }) =>
    isSelectInvalid &&
    css`
      &:not(:focus) {
        border: 1px solid ${({ theme }) => theme.color.warning};
        background: #fff8f6;
        & + span {
          color: ${({ theme }) => theme.color.warning};
        }
      }
    `};
`;

const StSubmitButton = styled(Button)`
  margin: 30px 0 20px 0;
  width: 100%;
  padding: 20px 0;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.main};
  &:hover {
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.main};
  }
`;

const StLoginButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StLoginText = styled.span`
  font-size: 14px;
  line-height: 19px;
`;

const StLoginButton = styled(Button)`
  margin-top: 5px;
  margin-left: 10px;
  padding: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.green};
  border-radius: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const SignupModal = ({
  signupModalVisible,
  openLoginModal,
  closeModal,
  signup,
  onChangeForm,
  onChangeSelect,
  onSignup,
  refObj,
  onPwFocus,
  pwFocus,
  onGoogleLoginSuccess,
  onGoogleLoginFailure,
}) => {
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
  const { pwLevel, pwLength, pwContain, pwCase } = pwValidation;
  const { emailRef, firstNameRef, lastNameRef, pwRef } = refObj;
  console.log('-----[Signup Modal]-----');
  console.log(pwLevel, pwLength, pwContain, pwCase);

  return (
    <StSignupModal
      modalState={signupModalVisible}
      header
      title="회원가입"
      width="570px"
      height="680px"
      setModalState={() => closeModal('signup')}
    >
      <StSignupFormWrapper>
        <StSocialLoginWrapper>
          페이스북 또는{' '}
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_LOGIN_API_KEY}
            cookiePolicy={'single_host_origin'}
            onSuccess={onGoogleLoginSuccess}
            onFailure={onGoogleLoginFailure}
            btnText=""
          />
          로 회원 가입하세요.
        </StSocialLoginWrapper>
        <StDividerLine />
        <StDividerText>또는</StDividerText>
        <StSignupForm onSubmit={onSignup}>
          <StInputWrapper>
            <StInput
              value={email.value}
              onChange={e => onChangeForm(e, 'email')}
              focusBorderColor
              placeholder="이메일 주소"
              ref={emailRef}
              isInvalid={email.invalid}
            ></StInput>
            <RiMailLine />
            {email.invalid && (
              <StValidationText isInvalid={email.invalid}>
                이메일이 필요합니다.
              </StValidationText>
            )}
          </StInputWrapper>

          <StInputWrapper>
            <StInput
              value={firstName.value}
              onChange={e => onChangeForm(e, 'firstName')}
              focusBorderColor
              placeholder="이름 (예: 길동)"
              ref={firstNameRef}
              isInvalid={firstName.invalid}
            ></StInput>
            <RiUserLine />
            {firstName.invalid && (
              <StValidationText isInvalid={firstName.invalid}>
                이름을 입력하세요.
              </StValidationText>
            )}
          </StInputWrapper>

          <StInputWrapper>
            <StInput
              value={lastName.value}
              onChange={e => onChangeForm(e, 'lastName')}
              focusBorderColor
              placeholder="성 (예: 홍)"
              ref={lastNameRef}
              isInvalid={lastName.invalid}
            ></StInput>
            <RiUserLine />
            {lastName.invalid && (
              <StValidationText isInvalid={lastName.invalid}>
                성을 입력하세요.
              </StValidationText>
            )}
          </StInputWrapper>

          <StInputWrapper name="password">
            <StInput
              type="password"
              value={pw.value}
              onChange={e => onChangeForm(e, 'pw')}
              onFocus={onPwFocus}
              focusBorderColor
              placeholder="비밀번호 설정하기"
              ref={pwRef}
              isInvalid={pw.invalid}
            ></StInput>
            <RiEyeCloseLine />
            {pw.invalid && (
              <StValidationText isInvalid={pw.invalid}>
                비밀번호를 입력하세요.
              </StValidationText>
            )}
            {pwFocus && (
              <StPwValidationList>
                <StPwValidationItem isPwValid={pwLevel}>
                  {pwLevel >= 1 ? <MdCheck /> : <MdClose />}
                  <StPwValidationText>
                    비밀번호 보안 수준:
                    <StPwValidationLevelText pwLevel={pwLevel}>
                      {pwLevel ? (pwLevel === 2 ? ' 강함' : ' 보통') : ' 약함'}
                    </StPwValidationLevelText>
                  </StPwValidationText>
                </StPwValidationItem>
                {pwLevel === 0 && (
                  <>
                    <StPwValidationItem isPwValid={pwContain}>
                      {pwContain ? <MdCheck /> : <MdClose />}
                      <StPwValidationText>
                        비밀번호에 본인 이름이나 이메일 주소를 포함할 수
                        없습니다.
                      </StPwValidationText>
                    </StPwValidationItem>
                    <StPwValidationItem isPwValid={pwLength}>
                      {pwLength ? <MdCheck /> : <MdClose />}
                      <StPwValidationText>최소 8자</StPwValidationText>
                    </StPwValidationItem>
                    <StPwValidationItem isPwValid={pwCase}>
                      {pwCase ? <MdCheck /> : <MdClose />}
                      <StPwValidationText>
                        숫자나 기호를 포함하세요
                      </StPwValidationText>
                    </StPwValidationItem>
                  </>
                )}
              </StPwValidationList>
            )}
          </StInputWrapper>
          <StBirthDayTitle>생일</StBirthDayTitle>
          <StBirthDayText>
            만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
            에어비앤비 이용자에게 공개되지 않습니다.
          </StBirthDayText>
          <StBirthDayWrapper>
            <StBirthDayDropDown
              name="birthMonth"
              width="40%"
              title="월"
              options={[1, 2, 3]}
              outline
              value={birthMonth.value}
              isSelectInvalid={birthMonth.invalid}
              onChange={e => onChangeSelect(e, 'birthMonth')}
            ></StBirthDayDropDown>
            <StBirthDayDropDown
              name="birthDay"
              width="22%"
              title="일"
              options={[1, 2, 3]}
              outline
              value={birthDay.value}
              isSelectInvalid={birthDay.invalid}
              onChange={e => onChangeSelect(e, 'birthDay')}
            ></StBirthDayDropDown>
            <StBirthDayDropDown
              name="birthYear"
              width="33%"
              title="년"
              options={[1, 2, 3]}
              outline
              value={birthYear.value}
              isSelectInvalid={birthYear.invalid}
              onChange={e => onChangeSelect(e, 'birthYear')}
            ></StBirthDayDropDown>
          </StBirthDayWrapper>
          {(birthMonth.invalid || birthDay.invalid || birthYear.invalid) && (
            <StValidationText>계속하시려면 생일을 선택하세요.</StValidationText>
          )}
          <StSubmitButton border="none" type="submit">
            가입하기
          </StSubmitButton>
        </StSignupForm>
        <StDividerLine />
        <StLoginButtonWrapper>
          <StLoginText>이미 에어비앤비 계정이 있나요?</StLoginText>
          <StLoginButton btnType="color" onClick={openLoginModal}>
            로그인
          </StLoginButton>
        </StLoginButtonWrapper>
      </StSignupFormWrapper>
    </StSignupModal>
  );
};

export default SignupModal;
