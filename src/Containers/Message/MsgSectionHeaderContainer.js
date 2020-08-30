import React, { useCallback } from 'react';
import MsgSectionHeader from '../../Components/Message/MsgSectionHeader';
import { useSelector, useDispatch } from 'react-redux';
import {
  hideMsgDetailSection,
  showMsgDetailSection,
  hideMsgListSection, // 반응형 구현 시 필요
  showMsgListSection,
  archiveMsg,
  unarchiveMsg,
} from '../../Modules/message';

const MsgSectionHeaderContainer = ({ msgSectionStates }) => {
  // redux
  const media = useSelector(state => state.message.media);
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;
  const messages = useSelector(state => state.message.messages);
  const nextActiveAllMsg = messages.find(
    msg => msg.state === 'all' && msg.readMsg && !msg.isActive,
  );
  const nextActiveHideMsg = messages.find(
    msg => msg.state === 'hide' && msg.readMsg && !msg.isActive,
  );
  const nextActiveUnreadMsg = messages.find(
    msg => msg.state === 'all' && !msg.readMsg && !msg.isActive,
  );
  console.log(nextActiveAllMsg.id);
  console.log(nextActiveHideMsg.id);
  console.log(nextActiveUnreadMsg.id);
  const dispatch = useDispatch();

  /** event
   * media = 'medium'
   * onClick 이벤트가 발생하면 msgListSectionState를 true로 바꿔준다
   * 버튼이 보이는 현재 상태는 msgListSectionState = false 상태
   */
  const onClickShowList = useCallback(() => {
    console.log('< 버튼 클릭!!');
    return (
      media === 'medium' &&
      !msgListSectionState &&
      dispatch(showMsgListSection())
    );
  }, [dispatch, media, msgListSectionState]);

  /**
   * media = large: onClick 이벤트 발생 시 msgDetailSectionState true -> false
   * media = medium: onClick 이벤트 발생 시 msgDetailSectionState true -> false
   * ! 반응형 구현할 때
   * media: large -> medium일 때 msgDetailSectionState가 true면 그대로 true
   *        msgListSectionState true -> false로 변경
   * media: large -> medium일 때 msgDetailSectionState가 false면 그대로 false
   */
  const onClickDetail = useCallback(() => {
    if (msgDetailSectionState) return dispatch(hideMsgDetailSection());
    if (!msgDetailSectionState) return dispatch(showMsgDetailSection());
    if (media === 'medium' && msgDetailSectionState)
      return dispatch(hideMsgListSection());
  }, [dispatch, msgDetailSectionState]);

  /**
   * isActive인 대화인지 먼저 알아야 함
   * isActive이면 isActive인 message.id가 필요
   * dispatch 보낼때 isActive인 message.id정보를 담아서
   * message:id의 state: all -> hide, isActive: false
   * message:id의 state: hide -> all, isActive: false
   * ! msg.isActive가 false가 되면서 다음 대화상대가 isActive로 바뀜
   * ! 다음 대화상대 조건: state = 'all' && msg.isActive === true인 msg.id의 다음 id를 검색
   * ! (find..?)
   */
  const onClickArchive = useCallback(() => {
    console.log('메시지 숨기기! 또는 메시지 취소!');
    const msg = messages.filter(msg => msg.isActive);
    console.log('test', msg);
    if (msg.isActive && msg.state === 'all')
      return dispatch(archiveMsg(msg.id, msg.isActive));
    if (msg.isActive && msg.state === 'hide')
      return dispatch(unarchiveMsg(msg.id, msg.isActive));
  }, [dispatch]);

  return (
    <MsgSectionHeader
      media={media}
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
      onClickDetail={onClickDetail}
      onClickShowList={onClickShowList}
      onClickArchive={onClickArchive}
    />
  );
};

export default MsgSectionHeaderContainer;
