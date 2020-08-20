import React, { useReducer, Children, cloneElement } from 'react';
import { FilterList, FilterButton } from '../../Components/Search/FilterList';
import { useSelector } from 'react-redux';

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
  const onClick = () =>
    dispatch({ type: popupState[name] ? 'CLOSE' : 'OPEN', name });
  const onClose = () => dispatch({ type: 'CLOSE' });

  return (
    <FilterButton text={text} onClick={onClick}>
      {Children.map(children, child => {
        return cloneElement(child, {
          popupState: popupState[name],
          onClose,
        });
      })}
    </FilterButton>
  );
};

const FilterListContainer = ({ mapState, onShowMap }) => {
  const { dateDiff } = useSelector(state => state.searchForm);
  const [popupState, dispatch] = useReducer(popupReducer, popupInit);

  return (
    <FilterList
      popupState={popupState}
      mapState={mapState}
      onShowMap={onShowMap}
      dispatch={dispatch}
      dateDiff={dateDiff}
    />
  );
};

export { FilterButtonContainer, FilterListContainer };
