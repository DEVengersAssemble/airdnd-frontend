import React, { useState } from 'react';
import styled from 'styled-components';
import Subject from '../Components/Detail/Subject';
import HomeInfos from '../Components/Detail/HomeInfos';
import FullsizeWrapper from '../Components/Detail/FullsizeWrapper';

const DetailPage = () => {
  const [modalState, setModalState] = useState(false);
  const [popupState, setPopupState] = useState(false);

  const onModal = () => setModalState(true);
  const onPopup = () => setPopupState(true);

  return (
    <>
      <TestHeader />
      <StMain>
        <Subject />
        <HomeInfos />
        <FullsizeWrapper />
      </StMain>
    </>
  );
};

const TestHeader = styled.header`
  height: 8rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
`;

const StMain = styled.main`
  background-color: #efeaf7;
`;

export default DetailPage;
