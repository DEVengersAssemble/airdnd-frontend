import React, { useEffect } from 'react';
import SignupMenuModal from '../../Components/Main/SignupMenuModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';

const SignupMenuModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'signup_menu';
  const openLoginModal = () => {
    dispatch(openModal('login'));
  };

  const openSignupEmailModal = () => {
    dispatch(openModal('signup_email'));
  };

  const onSuccessGoogle = res => {
    console.log('[onSuccess]');
    console.log('res: ', res);
    console.log('currentUser: ', res.profileObj);
  };

  const onFailureGoogle = res => {
    console.log('[onFailure]');
    console.log('res: ', res);
    console.log('currentUser: ', res.profileObj);
  };

  return (
    <SignupMenuModal
      modalVisible={modalVisible}
      openLoginModal={openLoginModal}
      openSignupEmailModal={openSignupEmailModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
      onSuccessGoogle={onSuccessGoogle}
      onFailureGoogle={onFailureGoogle}
    ></SignupMenuModal>
  );
};

export default SignupMenuModalContainer;
