import React, { useState } from 'react';
import styled from 'styled-components';
import Subject from '../Components/Detail/Subject';
import HomeInfos from '../Components/Detail/HomeInfos';
import FullsizeWrapper from '../Components/Detail/FullsizeWrapper';
import HomeFooter from '../Components/Detail/HomeFooter';

const DetailPage = () => {
  const [modalState, setModalState] = useState(false);
  const [popupState, setPopupState] = useState(false);

  const onModal = () => setModalState(true);
  const onPopup = () => setPopupState(true);

  return (
    <>
      <TestHeader />
      <main>
        <Subject />
        <HomeInfos />
        <FullsizeWrapper />
        <HomeFooter />
      </main>
    </>
  );
};

const TestHeader = styled.header`
  height: 8rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
`;

export default DetailPage;
