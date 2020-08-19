import React, { useRef, useReducer, Children, cloneElement } from 'react';
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
  const popup = useRef();
  const onClick = () =>
    dispatch({ type: popupState[name] ? 'CLOSE' : 'OPEN', name });
  const onClose = () => dispatch({ type: 'CLOSE' });
  const offFocus = ({ target }) => {
    if (target === popup) return;
    onClose();
  };

  return (
    <FilterButton text={text} onClick={onClick}>
      {Children.map(children, child => {
        return cloneElement(child, {
          popupState: popupState[name],
          onClick: offFocus,
          onClose,
          popup,
        });
      })}
    </FilterButton>
  );
};

const FilterListContainer = () => {
  const [popupState, dispatch] = useReducer(popupReducer, popupInit);

  return <FilterList popupState={popupState} dispatch={dispatch} />;
};

export { FilterButtonContainer, FilterListContainer };
