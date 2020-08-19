import React from 'react';
import Modal from '../Global/Modal';

const ChatFlagModal = () => {
  return (
    <Modal
      width="20rem"
      height="20rem"
      modalState="true"
      setModalState="false"
      header
      style={{ zIndex: '9999' }}
    >
      칠드런이다
    </Modal>
  );
};

export default ChatFlagModal;
