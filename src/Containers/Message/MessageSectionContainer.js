import React, { useEffect } from 'react';
import MessageSection from '../../Components/Message/MessageSection';
import { useSelector, useDispatch } from 'react-redux';
import { changeMediaSize } from '../../Modules/message';
import { debounce } from 'lodash';

const MessageSectionContainer = () => {
  // ! redux
  const msgSectionStates = useSelector(state => state.message);

  const dispatch = useDispatch();
  // ! variable
  const { msgDetailSectionState, msgListSectionState } = msgSectionStates;

  const onResizeMedia = () => {
    if (window.innerWidth <= 1127) {
      dispatch(changeMediaSize('medium'));
    }
  };

  const onResizeLarge = () => {
    if (window.innerWidth > 1128) {
      dispatch(changeMediaSize('large'));
    }
  };

  useEffect(() => {
    window.addEventListener('resize', debounce(onResizeMedia, 1000));
    window.addEventListener('resize', debounce(onResizeLarge, 1000));
    return () => {
      window.removeEventListener('resize', onResizeMedia);
      window.removeEventListener('resize', onResizeLarge);
    };
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 1127) {
      dispatch(changeMediaSize('medium'));
    }
  }, [dispatch]);

  return (
    <MessageSection
      msgDetailSectionState={msgDetailSectionState}
      msgListSectionState={msgListSectionState}
    />
  );
};

export default MessageSectionContainer;
