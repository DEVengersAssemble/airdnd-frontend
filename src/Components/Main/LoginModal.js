import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';
import { Input } from '../Global/Input';
import { GoogleLogin } from 'react-google-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiMailLine, RiLock2Line } from 'react-icons/ri';

const StLoginModal = styled(Modal)``;

const StLoginModalWrapper = styled.div`
  padding: 20px;
`;

const StDividerLine = styled.hr`
  border: none;
  margin: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const StDividerText = styled.span`
  position: absolute;
  font-size: 14px;
  top: 210px;
  left: calc(50% - 34px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0 20px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StFacebookButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  background: #4568b1;
  color: ${({ theme }) => theme.color.white};
  transition: 0.125s all ease-in;
  height: 52px;
  margin-bottom: 12px;
  &:hover {
    background: #4568b1;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  }
`;

const StGoogleButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  transition: 0.125s all ease-in;
  height: 52px;
  border: 2px solid #495057;
  &:hover {
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  }
`;

const StButtonText = styled.span`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  margin-left: 10px;
`;

const StLoginForm = styled.form``;

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

const StLoginButton = styled(Button)``;

const LoginModal = ({ modalVisible, openSignupMenuModal, closeModal }) => {
  return (
    <StLoginModal
      modalState={modalVisible}
      header
      width="570px"
      height="600px"
      title="로그인"
      setModalState={closeModal}
    >
      <StLoginModalWrapper>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_API_KEY}
          cookiePolicy={'single_host_origin'}
          onSuccess={res => console.log(res)}
          onFailure={res => console.log(res)}
          render={() => (
            <StFacebookButton>
              <FaFacebookF />
              <StButtonText>페이스북 계정으로 로그인</StButtonText>
            </StFacebookButton>
          )}
        ></GoogleLogin>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_API_KEY}
          cookiePolicy={'single_host_origin'}
          onSuccess={res => console.log(res)}
          onFailure={res => console.log(res)}
          render={() => (
            <StGoogleButton>
              <FcGoogle />
              <StButtonText>구글 계정으로 로그인</StButtonText>
            </StGoogleButton>
          )}
        ></GoogleLogin>
        <StDividerLine />
        <StDividerText>또는</StDividerText>
        <StLoginForm>
          <StInputWrapper>
            <StInput
              // value={email.value}
              // onChange={e => onChangeForm(e, 'email')}
              focusBorderColor
              placeholder="이메일 주소"
              // ref={emailRef}
              // isInvalid={email.invalid}
            ></StInput>
            <RiMailLine />
            {/* {email.invalid && (
              <StValidationText isInvalid={email.invalid}>
                이메일이 필요합니다.
              </StValidationText>
            )} */}
          </StInputWrapper>
          <StInputWrapper name="password">
            <StInput
              type="password"
              // value={pw.value}
              // onChange={e => onChangeForm(e, 'pw')}
              // onFocus={onPwFocus}
              focusBorderColor
              placeholder="비밀번호"
              // ref={pwRef}
              // isInvalid={pw.invalid}
            ></StInput>
            <RiLock2Line />
            {/* {pw.invalid && (
              <StValidationText isInvalid={pw.invalid}>
                비밀번호를 입력하세요.
              </StValidationText>
            )} */}
          </StInputWrapper>
        </StLoginForm>
        <StLoginButton btnType="color" onClick={openSignupMenuModal}>
          회원가입하기
        </StLoginButton>
      </StLoginModalWrapper>
    </StLoginModal>
  );
};

export default LoginModal;
