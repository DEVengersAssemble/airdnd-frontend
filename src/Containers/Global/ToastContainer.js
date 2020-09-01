import React from 'react';
import { useSelector } from 'react-redux';
import { Toast, UndoToast } from '../../Components/Global/Toast';

const ToastContainer = ({ state, onClickUndo }) => {
  const toast = useSelector(state => state.message.toast);

  return <Toast state={state} toast={toast} onClickUndo={onClickUndo} />;
};

const UndoToastContainer = () => {
  const undoToast = useSelector(state => state.message.undoToast);
  return <UndoToast undoToast={undoToast} />;
};
export { ToastContainer, UndoToastContainer };
