import React from 'react';
import MsgSectionHeader from '../../Components/Message/MsgSectionHeader';
import { ToastContainer, UndoToastContainer } from '../Global/ToastContainer';

import { useSelector, useDispatch } from 'react-redux';
import {
  hideMsgDetailSection,
  showMsgDetailSection,
  archiveMsg,
  unarchiveMsg,
  showToast,
  hideToast,
  showUndoToast,
  hideUndoToast,
  undo,
} from '../../Modules/message';

const MsgSectionHeaderContainer = () => {
  // ! redux
  const msgDetailSectionState = useSelector(
    state => state.message.msgDetailSectionState,
  );
  const media = useSelector(state => state.message.media);
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  const { tempMsgs } = useSelector(state => state.message);
  const dispatch = useDispatch();

  // ! variable
  // ! activeMsg 구조할당 하면.. 망함... ㅠㅠ
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );
  const selectIndex = filteredMsgs.findIndex(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );
  const tempMsg = tempMsgs.find(
    (_, index) => tempMsgs[index] === tempMsgs[activeIndex],
  );
  console.log(tempMsg);
  // ! event
  const onClickShowList = () => {
    dispatch(hideMsgDetailSection());
  };

  const onClickDetail = () => {
    console.log(media);
    if (msgDetailSectionState) return dispatch(hideMsgDetailSection());
    if (!msgDetailSectionState) return dispatch(showMsgDetailSection());
  };

  const clearToast = () => dispatch(hideToast());
  const clearUndoToast = () => dispatch(hideUndoToast());

  const emitToast = () => {
    clearUndoToast();
    setTimeout(() => {
      dispatch(showToast());
      setTimeout(() => clearTimeout(clearToast()), 6000);
    });
  };

  const emitUndoToast = () => {
    clearToast();
    setTimeout(() => {
      dispatch(showUndoToast());
      setTimeout(() => clearTimeout(clearUndoToast()), 6000);
    });
  };

  const onClickArchive = () => {
    if (activeMsg && activeMsg.state === 'all') {
      // ! 1번 온클릭이벤트 발생하면 archive or un archive
      dispatch(archiveMsg(selectIndex, activeMsg.id, 'hide'));
      // ! 2번 Toast 발생
      emitToast();
    }
    if (activeMsg && activeMsg.state === 'hide') {
      // ! 1번 온클릭이벤트 발생하면 archive or un archive
      dispatch(unarchiveMsg(selectIndex, activeMsg.id, 'all'));
      // ! 2번 Toast 발생
      emitToast();
    }
  };

  // ! 3번 실행취소버튼 클릭 이벤트 발생
  // ! Toast.js로 연결
  const onClickUndo = () => {
    // ! 4번 기존 Toast clear
    clearToast();
    // ! 5번 이전 상태의 MsgList로 돌려놓음
    // ! messages의 all => hide로 바뀐 msg도 원래대로 복원
    // ! messages의 hide => msg 바뀐 msg도 원래대로 복원
    dispatch(undo(tempMsg.id, tempMsg.state));
    // ! 6번 UndoToast 발생
    emitUndoToast();
  };

  return (
    <>
      <MsgSectionHeader
        media={media}
        msgDetailSectionState={msgDetailSectionState}
        onClickDetail={onClickDetail}
        onClickShowList={onClickShowList}
        onClickArchive={onClickArchive}
        activeMsg={activeMsg}
        hostname={activeMsg && activeMsg.hostname}
        state={activeMsg && activeMsg.state}
      />
      <ToastContainer
        state={activeMsg && activeMsg.state}
        onClickUndo={onClickUndo}
      />
      <UndoToastContainer />
    </>
  );
};

export default MsgSectionHeaderContainer;
