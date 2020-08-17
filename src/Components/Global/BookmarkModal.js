import React from 'react';
import Modal from './Modal';
import ModalFooter from './ModalFooter';
import Button from './Button';

const BookmarkListModal = () => {
  return (
    <Modal
      modalState={true}
      width="520px"
      height="90vh"
      title="목록에 저장하기"
      header
    >
      <ModalFooter>
        <Button btnType="underlined" width="100%" fontWeight="500">
          목록 만들기
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const NewBookmarkModal = () => {
  return (
    <Modal
      modalState={false}
      width="520px"
      height="305px"
      title="목록 이름 작성하기"
      header
    >
      <ModalFooter>
        <Button
          btnType="color"
          color="black"
          hover="background: #000"
          width="100%"
          fontWeight="500"
        >
          새로 만들기
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export { BookmarkListModal, NewBookmarkModal };
