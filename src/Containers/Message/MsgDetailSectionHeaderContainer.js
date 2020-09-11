import React, { useCallback } from 'react';
import MsgDetailSectionHeader from '../../Components/Message/MsgDetailSectionHeader';
import { useDispatch } from 'react-redux';
import { hideMsgDetailSection } from '../../Modules/message';

const MsgDetailSectionHeaderContainer = () => {
  // ! redux
  const dispatch = useDispatch();

  // ! event
  // msgDetailSectionState
  // media 상태 상관 없이 onClick 이벤트가 발생하면 무조건 hide
  // 무조건 hide 하기 때문에 '세부 정보 보기'로 유지
  const onCloseSection = useCallback(() => {
    return dispatch(hideMsgDetailSection());
  }, [dispatch]);

  return <MsgDetailSectionHeader onCloseSection={onCloseSection} />;
};

export default MsgDetailSectionHeaderContainer;
