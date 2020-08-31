import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../Modules/modal';
import MyPageButton from '../../Components/Main/MyPageButton';
import MyPagePopup from '../../Components/Main/MyPagePopup';
import SignupEmailModalContainer from './SignupEmailModalContainer';
import LoginModalContainer from './LoginModalContainer';

// 1. 로그인 전 <GoPerson />
// 2. 로그인 후 프로필사진 존재할 시 그 이미지 url
// 3. 로그인 후 프로필사진 존재하지 않을시 기본 이미지 url
const MyPageButtonContainer = ({ isScrollTop }) => {
  const dispatch = useDispatch();
  const [popupVisible, setPopupVisible] = useState(false);
  const isLoggedIn = false;
  const closePopup = () => {
    setPopupVisible(false);
  };

  const togglePopup = () => {
    setPopupVisible(prevState => !prevState);
  };

  const openModalByName = name => {
    dispatch(openModal(name));
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
        openModalByName={openModalByName}
      ></MyPagePopup>
      <LoginModalContainer />
      <SignupEmailModalContainer />
    </>
  );
};

export default MyPageButtonContainer;
