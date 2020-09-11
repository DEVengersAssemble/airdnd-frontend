import React, { useState } from 'react';
import DetailMainContainer from '../Containers/Detail/DetailMainContainer';
import HomeFooter from '../Components/Detail/HomeFooter';
import DetailHeaderContainer from '../Containers/Detail/DetailHeaderContainer';

const DetailPage = () => {
  const [modalState, setModalState] = useState(false);
  const [popupState, setPopupState] = useState(false);

  const onModal = () => setModalState(true);
  const onPopup = () => setPopupState(true);

  return (
    <>
      <DetailHeaderContainer />
      <main>
        <DetailMainContainer />
        <HomeFooter />
      </main>
    </>
  );
};

export default DetailPage;
