import React from 'react';
import { useSelector } from 'react-redux';
import { Toast, UndoToast } from '../../Components/Global/Toast';

const ToastContainer = ({ state, onClickUndo }) => {
  const filteredMsgs = useSelector(state => state.message.filteredMsgs);
  const toast = useSelector(state => state.message.toast);

  const fmLength = filteredMsgs.length;
  return (
    <Toast
      state={state}
      toast={toast}
      onClickUndo={onClickUndo}
      fmLength={fmLength}
    />
  );
};

const UndoToastContainer = () => {
  const undoToast = useSelector(state => state.message.undoToast);
  return <UndoToast undoToast={undoToast} />;
};
export { ToastContainer, UndoToastContainer };
