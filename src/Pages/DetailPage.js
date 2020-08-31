import React, { useState } from 'react';
import styled from 'styled-components';
import DetailMainContainer from '../Containers/Detail/DetailMainContainer';
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
        <DetailMainContainer />
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
