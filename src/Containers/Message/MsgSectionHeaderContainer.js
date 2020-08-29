import React, { useCallback } from 'react';
import MsgSectionHeader from '../../Components/Message/MsgSectionHeader';
import { useSelector, useDispatch } from 'react-redux';
import {
  hideMsgDetailSection,
  showMsgDetailSection,
  hideMsgListSection, // 반응형 구현 시 필요
  showMsgListSection,
} from '../../Modules/message';

const MsgSectionHeaderContainer = ({ msgSectionStates }) => {
  // redux
  const media = useSelector(state => state.message.media);
  const { msgListSectionState, msgDetailSectionState } = msgSectionStates;
  const dispatch = useDispatch();

  // event
  // media = 'medium'
  // onClick 이벤트가 발생하면 msgListSectionState를 true로 바꿔준다
  // 버튼이 보이는 현재 상태는 msgListSectionState = false 상태
  const onClickShowList = useCallback(() => {
    console.log('< 버튼 클릭!!');
    return (
      media === 'medium' &&
      !msgListSectionState &&
      dispatch(showMsgListSection())
    );
  }, [dispatch, media, msgListSectionState]);

  // media = large: onClick 이벤트 발생 시 msgDetailSectionState true -> false
  // media = medium: onClick 이벤트 발생 시 msgDetailSectionState true -> false
  /** 반응형 구현할 때
   * media: large -> medium일 때 msgDetailSectionState가 true면 그대로 true
   * 대신 msgListSectionState true -> false로 변경
   * media: large -> medium일 때 msgDetailSectionState가 false면 그대로 false
   */
  const onClickDetail = useCallback(() => {
    if (msgDetailSectionState) return dispatch(hideMsgDetailSection());
    if (!msgDetailSectionState) return dispatch(showMsgDetailSection());
    if (media === 'medium' && msgDetailSectionState)
      return dispatch(hideMsgListSection());
  }, [dispatch, msgDetailSectionState]);

  return (
    <MsgSectionHeader
      media={media}
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
      onClickDetail={onClickDetail}
      onClickShowList={onClickShowList}
    />
  );
};

export default MsgSectionHeaderContainer;
