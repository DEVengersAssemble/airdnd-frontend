import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailSectionMain from '../../Components/Message/MsgDetailSectionMain';

const MsgDetailSectionMainContainer = () => {
  // ! redux
  const { activeMsg } = useSelector(state => state.message);
  const { contents } = activeMsg;
  console.log(contents && !contents.isCanceled);

  return (
    <MsgDetailSectionMain
      activeMsg={activeMsg}
      isCanceled={contents && contents.isCanceled}
    />
  );
};

export default MsgDetailSectionMainContainer;
