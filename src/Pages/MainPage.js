import React, { useState } from 'react';
import Toggle from '../Components/Global/Toggle';

const MainPage = () => {
  const [toggleState, setToggleState] = useState(false);
  const handleClick = () => {
    setToggleState(prevToggleState => !prevToggleState);
  };

  return (
    <div>
      <p>Main</p>
      <Toggle checked={toggleState} handleClick={handleClick} />
    </div>
  );
};

export default MainPage;
