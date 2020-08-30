//action type
const SHOW_MESSAGE_DETAIL_SECTION = 'message/SHOW_MESSAGE_DETAIL_SECTION';
const HIDE_MESSAGE_DETAIL_SECTION = 'message/HIDE_MESSAGE_DETAIL_SECTION';
const SHOW_MESSAGE_LIST_SECTION = 'message/SHOW_MESSAGE_LIST_SECTION';
const HIDE_MESSAGE_LIST_SECTION = 'message/HIDE_MESSAGE_LIST_SECTION';
const MEDIA_SIZE_LARGE = 'message/MEDIA_SIZE_LARGE';
const MEDIA_SIZE_MEDIUM = 'message/MEDIA_SIZE_MEDIUM';
const MEDIA_SIZE_IPAD = 'message/MEDIA_SIZE_IPAD';

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
export const mediaSizeLarge = () => ({
  type: MEDIA_SIZE_LARGE,
});
export const mediaSizeMedium = () => ({
  type: MEDIA_SIZE_MEDIUM,
});
export const mediaSizeIPAD = () => ({
  type: MEDIA_SIZE_IPAD,
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
        msgDetailSectionState: true,
      };
    case HIDE_MESSAGE_DETAIL_SECTION:
      return {
        ...state,
        msgDetailSectionState: false,
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
