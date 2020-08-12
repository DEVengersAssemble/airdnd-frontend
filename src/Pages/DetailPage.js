import React, { useState } from 'react';
import Modal from '../Components/Global/Modal';
import ModalFooter from '../Components/Global/ModalFooter';
import styled from 'styled-components';
import Popup from '../Components/Global/Popup';

const DetailPage = () => {
  const [modalState, setModalState] = useState('none');
  const [popupState, setPopupState] = useState('none');
  const onModal = () => setModalState('display');
  const onPopup = () => setPopupState('display');

  return (
    <>
      <div>Detail</div>
      <button onClick={onModal}>modal button</button>
      <Modal
        title="modal"
        header="flex"
        footer="flex"
        footerText="test"
        modalState={modalState}
        setModalState={setModalState}
      >
        <span>test</span>
        <ModalFooter>test</ModalFooter>
      </Modal>

      <PopupWrapper>
        <button onClick={onPopup}>각자 알아서 추가</button>
        <Popup popupState={popupState}>children</Popup>
      </PopupWrapper>
    </>
  );
};

export default DetailPage;

const PopupWrapper = styled.div`
  position: relative;
`;
