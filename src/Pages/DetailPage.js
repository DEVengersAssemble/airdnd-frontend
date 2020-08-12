import React, { useState } from 'react';
import Modal from '../Components/Global/Modal';
import ModalFooter from '../Components/Global/ModalFooter';
import styled from 'styled-components';
import Popup from '../Components/Global/Popup';
import Profile from '../Components/Global/Profile';
import Rating from '../Components/Global/Rating';

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
        <button onClick={onPopup}>popup</button>
        <Popup popupState={popupState}>
          <ModalFooter>test</ModalFooter>
        </Popup>
      </PopupWrapper>

      <Profile isSupperhost="true" mark="true" lastName="haeun" />

      <Rating scale="1.4" rate="4.55" count="67" />
    </>
  );
};

const PopupWrapper = styled.div`
  position: relative;
`;

export default DetailPage;
