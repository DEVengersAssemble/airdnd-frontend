import React, { useState } from 'react';
import Modal from '../Components/Global/Modal';

const DetailPage = () => {
  const [modalState, setModalState] = useState('none');
  const onClick = () => setModalState('display');

  return (
    <>
      <div>Detail</div>
      <button onClick={onClick}>modal button</button>
      <Modal
        title="modal"
        header="flex"
        footer="flex"
        footerText="test"
        modalState={modalState}
        setModalState={setModalState}
      >
        <span>test</span>
      </Modal>
    </>
  );
};

export default DetailPage;
