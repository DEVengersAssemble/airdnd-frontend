import React, { useState } from 'react';
import MyPageButton from '../../Components/Main/MyPageButton';
import MyPagePopup from '../../Components/Main/MyPagePopup';
import SignupModal from '../../Components/Main/SignupModal';
import LoginModal from '../../Components/Main/LoginModal';

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

  const openSignupModal = () => {
    setSignupModalVisible(() => true);
  };

  const closeSignupModal = () => {
    setSignupModalVisible(() => false);
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
        openSignupModal={openSignupModal}
      ></MyPagePopup>
      <SignupModal
        signupModalVisible={signupModalVisible}
        closeSignupModal={closeSignupModal}
      ></SignupModal>
    </>
  );
};

export default MyPageButtonContainer;
