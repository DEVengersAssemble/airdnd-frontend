import React, { useState } from 'react';
import Toggle from '../Components/Global/Toggle';
import DropDown from '../Components/Global/DropDown';
import DropDownWithFocus from '../Components/Global/DropDownWithFocus';

const MainPage = () => {
  // Toggle
  const [toggleState, setToggleState] = useState(false);
  const handleClick = () => {
    setToggleState(prevToggleState => !prevToggleState);
  };

  // DropDown
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);

  const toggleOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  const clickOption = option => {
    setOptionSelected(option);
  };

  return (
    <div>
      <p>Main</p>
      <Toggle checked={toggleState} handleClick={handleClick} />
      <div></div>
      <DropDown
        title="월"
        options={['1', '2', '3', '4', '5']}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        optionSelected={optionSelected}
        clickOption={clickOption}
      />
      <div></div>
      <DropDownWithFocus
        name="일"
        title="일"
        options={['1', '2', '3', '4', '5', '6', '7']}
      ></DropDownWithFocus>
    </div>
  );
};

export default MainPage;
