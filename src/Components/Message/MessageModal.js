import React from 'react';
import Modal from '../Global/Modal';

const ChatFlagModal = ({ openFlagModal }) => {
  return (
    <Modal
      width="20rem"
      height="20rem"
      modalState={openFlagModal}
      setModalState={openFlagModal}
      header
    >
      칠드런이다
    </Modal>
  );
};

export default ChatFlagModal;
