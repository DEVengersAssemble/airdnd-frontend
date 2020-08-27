//action type
const SHOW_MESSAGE_DETAIL_SECTION = 'message/SHOW_MESSAGE_DETAIL_SECTION';
const HIDE_MESSAGE_DETAIL_SECTION = 'message/HIDE_MESSAGE_DETAIL_SECTION';
const SHOW_MESSAGE_LIST_SECTION = 'message/SHOW_MESSAGE_LIST_SECTION';
const HIDE_MESSAGE_LIST_SECTION = 'message/HIDE_MESSAGE_LIST_SECTION';

// action creator
export const showMsgDetailSection = () => ({
  type: SHOW_MESSAGE_DETAIL_SECTION,
});
export const hideMsgDetailSection = () => ({
  type: HIDE_MESSAGE_DETAIL_SECTION,
});
export const showMsgListSection = () => ({
  type: SHOW_MESSAGE_LIST_SECTION,
});
export const hideMsgListSection = () => ({
  type: HIDE_MESSAGE_LIST_SECTION,
});

// initial state
const initialState = {
  msgDetailSectionState: true, // default
  msgListSectionState: true, // default
};

// reducer
const message = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE_DETAIL_SECTION:
      return {
        ...state,
        msgDetailSectionState: false,
      };
    case HIDE_MESSAGE_DETAIL_SECTION:
      return {
        ...state,
        msgDetailSectionState: true,
      };
    case SHOW_MESSAGE_LIST_SECTION:
      return {
        ...state,
        msgListSectionState: true,
      };
    case HIDE_MESSAGE_LIST_SECTION:
      return {
        ...state,
        msgListSectionState: false,
      };
    default:
      return state;
  }
};

export default message;
