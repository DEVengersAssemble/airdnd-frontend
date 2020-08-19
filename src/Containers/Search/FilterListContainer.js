import React, { useState, cloneElement } from 'react';
import { FilterList, FilterButton } from '../../Components/Search/FilterList';

const FilterButtonContainer = ({ children, text }) => {
  const [popupState, setPopupState] = useState(false);
  const onClick = () => setPopupState(!popupState);

  return (
    <FilterButton text={text} onClick={onClick}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { popupState });
      })}
    </FilterButton>
  );
};

const FilterListContainer = () => {
  return <FilterList />;
};

export { FilterButtonContainer, FilterListContainer };
