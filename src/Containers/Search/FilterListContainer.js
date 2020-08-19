import React, { useReducer, Children, cloneElement } from 'react';
import { FilterList, FilterButton } from '../../Components/Search/FilterList';

const popupInit = {
  refund: false,
  roomType: false,
  price: false,
  setDate: false,
  modal: false,
};

const popupReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return {
        ...popupInit,
        [action.name]: true,
      };
    case 'CLOSE':
      return {
        ...popupInit,
      };
    default:
      return state;
  }
};

const FilterButtonContainer = ({
  children,
  name,
  text,
  popupState,
  dispatch,
}) => {
  const onClick = () => {
    const type = popupState[name] ? 'CLOSE' : 'OPEN';
    dispatch({ type, name });
  };

  return (
    <FilterButton text={text} onClick={onClick}>
      {Children.map(children, child => {
        return cloneElement(child, { popupState: popupState[name] });
      })}
    </FilterButton>
  );
};

const FilterListContainer = () => {
  const [popupState, dispatch] = useReducer(popupReducer, popupInit);

  return <FilterList popupState={popupState} dispatch={dispatch} />;
};

export { FilterButtonContainer, FilterListContainer };
