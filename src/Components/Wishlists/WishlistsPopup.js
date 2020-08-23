import React from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';

const WishlistsPopup = ({ openPopup }) => {
  return (
    <Popup
      popupState={openPopup}
      top="3.5rem"
      right="0rem"
      padding="1rem 0rem"
      style={{
        border: 'none',
      }}
    >
      팝업디자인이 모달이랑 같음
    </Popup>
  );
};

export default WishlistsPopup;
