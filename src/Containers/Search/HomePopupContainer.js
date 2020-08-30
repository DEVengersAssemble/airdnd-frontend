import React, { useState } from 'react';
import HomePopup from '../../Components/Search/HomePopup';

const HomePopupContainer = ({ home, dateDiff, theme }) => {
  const [hover, setHover] = useState(false);
  const onHoverHome = () => setHover(true);
  const onBlurHome = () => setHover(false);

  return (
    <HomePopup
      home={home}
      dateDiff={dateDiff}
      hover={hover}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
      theme={theme}
    />
  );
};

export default HomePopupContainer;
