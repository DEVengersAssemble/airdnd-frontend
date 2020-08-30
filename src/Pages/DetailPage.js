import React, { useState } from 'react';
import Subject from '../Components/Detail/Subject';
import HomeInfos from '../Components/Detail/HomeInfos';
import FullsizeWrapper from '../Components/Detail/FullsizeWrapper';
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
      <main style={{ paddingTop: '80px' }}>
        <Subject />
        <HomeInfos />
        <FullsizeWrapper />
        <HomeFooter />
      </main>
    </>
  );
};

export default DetailPage;
