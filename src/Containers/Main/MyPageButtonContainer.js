import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openModal } from '../../Modules/modal';
import { logoutRequest } from '../../Modules/user';
import MyPageButton from '../../Components/Main/MyPageButton';
import MyPagePopup from '../../Components/Main/MyPagePopup';
import LoginModalContainer from './LoginModalContainer';
import SignupMenuModalContainer from './SignupMenuModalContainer';
import SignupEmailModalContainer from './SignupEmailModalContainer';

// 1. 로그인 전 <GoPerson />
// 2. 로그인 후 프로필사진 존재할 시 그 이미지 url
// 3. 로그인 후 프로필사진 존재하지 않을시 기본 이미지 url
const MyPageButtonContainer = ({ isScrollTop }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [popupVisible, setPopupVisible] = useState(false);
  const { isLoggedIn, data } = useSelector(state => state.user);
  const closePopup = () => {
    setPopupVisible(false);
  };

  const togglePopup = () => {
    setPopupVisible(prevState => !prevState);
  };

  const openModalByName = name => {
    dispatch(openModal(name));
  };

  const movePage = pageName => {
    history.push(`/${pageName}`);
  };

  const onClickLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <>
      <MyPageButton
        isScrollTop={isScrollTop}
        togglePopup={togglePopup}
        isLoggedIn={isLoggedIn}
        data={data}
      ></MyPageButton>
      <MyPagePopup
        popupVisible={popupVisible}
        closePopup={closePopup}
        isLoggedIn={isLoggedIn}
        openModalByName={openModalByName}
        movePage={movePage}
        onClickLogout={onClickLogout}
      ></MyPagePopup>
      <LoginModalContainer />
      <SignupMenuModalContainer />
      <SignupEmailModalContainer />
    </>
  );
};

export default React.memo(MyPageButtonContainer);
