import React, { useState } from 'react';
import MyPageButton from '../../Components/Main/MyPageButton';
import MyPagePopup from '../../Components/Main/MyPagePopup';
import SignupModalContainer from './SignupModalContainer';
import LoginModalContainer from './LoginModalContainer';

// 1. 로그인 전 <GoPerson />
// 2. 로그인 후 프로필사진 존재할 시 그 이미지 url
// 3. 로그인 후 프로필사진 존재하지 않을시 기본 이미지 url
const MyPageButtonContainer = ({ isScrollTop }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const isLoggedIn = false;
  const closePopup = () => {
    setPopupVisible(false);
  };

  const togglePopup = () => {
    setPopupVisible(prevState => !prevState);
  };

  const openModal = type => {
    console.log('[openModal], ', type);
    if (type === 'signup') {
      setLoginModalVisible(false);
      setSignupModalVisible(true);
    } else if (type === 'login') {
      setSignupModalVisible(false);
      setLoginModalVisible(true);
    }
  };

  const closeModal = type => {
    console.log('[closeModal], ', type);
    if (type === 'signup') {
      setSignupModalVisible(false);
    } else if (type === 'login') {
      setLoginModalVisible(false);
    }
  };

  return (
    <>
      <MyPageButton
        isScrollTop={isScrollTop}
        togglePopup={togglePopup}
      ></MyPageButton>
      <MyPagePopup
        popupVisible={popupVisible}
        closePopup={closePopup}
        isLoggedIn={isLoggedIn}
        openModal={openModal}
      ></MyPagePopup>
      <LoginModalContainer
        loginModalVisible={loginModalVisible}
        openModal={openModal}
        closeModal={closeModal}
      ></LoginModalContainer>
      <SignupModalContainer
        signupModalVisible={signupModalVisible}
        openModal={openModal}
        closeModal={closeModal}
      ></SignupModalContainer>
    </>
  );
};

export default MyPageButtonContainer;
