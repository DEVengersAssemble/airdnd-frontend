import React from 'react';
import { useSelector } from 'react-redux';
import { Toast, CanceledToast } from '../../Components/Global/Toast';

const ToastContainer = ({ state }) => {
  const toast = useSelector(state => state.message.toast);
  console.log('toast', toast);
  return <Toast state={state} toast={toast} />;
};

const CanceledToastContainer = ({ state }) => {
  return <CanceledToast state={state} />;
};
export { ToastContainer, CanceledToastContainer };
