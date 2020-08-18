import React from 'react';
import {
  RefundPopup,
  RoomTypePopup,
  PricePopup,
  SetDatePopup,
} from '../../Components/Search/FilterPopup';

const RefundPopupContainer = () => {
  return <RefundPopup />;
};

const RoomTypePopupContainer = () => {
  return <RoomTypePopup />;
};

const PricePopupContainer = () => {
  return <PricePopup />;
};

const SetDatePopupContainer = () => {
  return <SetDatePopup />;
};

export {
  RefundPopupContainer,
  RoomTypePopupContainer,
  PricePopupContainer,
  SetDatePopupContainer,
};
