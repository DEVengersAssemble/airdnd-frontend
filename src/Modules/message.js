// ACTION TYPE
const SHOW_MESSAGE_DETAIL_SECTION = 'message/SHOW_MESSAGE_DETAIL_SECTION';
const HIDE_MESSAGE_DETAIL_SECTION = 'message/HIDE_MESSAGE_DETAIL_SECTION';
const SHOW_MESSAGE_LIST_SECTION = 'message/SHOW_MESSAGE_LIST_SECTION';
const HIDE_MESSAGE_LIST_SECTION = 'message/HIDE_MESSAGE_LIST_SECTION';
const CHANGE_MEDIA_SIZE = 'message/CHANGE_MEDIA_SIZE';

const ARCHAIVE_MESSAGE = 'message/ARCHAIVE_MESSAGE';
const UNARCHAIVE_MESSAGE = 'message/UNARCHAIVE_MESSAGE';
const UNDO = 'message/UNDO';

const ALL_MESSAGE_LIST = 'message/ALL_MESSAGE_LIST';
const HIDE_MESSAGE_LIST = 'message/HIDE_MESSAGE_LIST';
const UNREAD_MESSAGE_LIST = 'message/UNREAD_MESSAGE_LIST';

const MESSAGE_HOST_FLAG = 'message/MESSAGE_HOST_FLAG';

// ACTION CREATOR
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
export const changeMediaSize = media => ({
  type: CHANGE_MEDIA_SIZE,
  media,
});

export const archiveMsg = (id, isActive) => ({
  type: ARCHAIVE_MESSAGE,
  isActive,
});
export const unarchiveMsg = (id, isActive) => ({
  type: UNARCHAIVE_MESSAGE,
  isActive,
});
export const undo = () => ({ type: UNDO });

export const allMsgList = () => ({ type: ALL_MESSAGE_LIST });
export const hideMsgList = () => ({ type: HIDE_MESSAGE_LIST });
export const unreadMsgList = () => ({ type: UNREAD_MESSAGE_LIST });

export const isHost = isHost => ({
  type: MESSAGE_HOST_FLAG,
  isHost,
});

// INITIAL STATE
const initialState = {
  msgDetailSectionState: true, // default
  msgListSectionState: true, // default
  media: 'large', // large, medium, ipad

  messages: [
    // messageState.length = total message(10)
    // unread이면 hide일 수 없음
    {
      id: 1,
      reservationId: 1,
      state: 'all',
      readMsg: true,
      hostname: 'Paul',
      isActive: true,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/09/25',
        checkout: '2020/09/26',
      },
    },
    {
      id: 2,
      reservationId: 2,
      state: 'all',
      readMsg: true,
      hostname: 'Bhel',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/09/10',
        checkout: '2020/09/12',
      },
    },
    {
      id: 3,
      reservationId: 3,
      state: 'all',
      readMsg: false,
      hostname: 'James',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: true,
        checkin: '2020/08/15',
        checkout: '2020/08/16',
      },
    },
    {
      id: 4,
      reservationId: 4,
      state: 'all',
      readMsg: false,
      hostname: 'Maple',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: true,
        checkin: '2020/06/01',
        checkout: '2020/06/03',
      },
    },
    {
      id: 5,
      reservationId: 5,
      state: 'all',
      readMsg: false,
      hostname: 'Linda',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/07/30',
        checkout: '2020/08/01',
      },
    },
    {
      id: 6,
      reservationId: 6,
      state: 'all',
      readMsg: false,
      hostname: 'June',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/08/08',
        checkout: '2020/08/09',
      },
    },
    {
      id: 7,
      reservationId: 7,
      state: 'hide',
      readMsg: true,
      hostname: 'Jason',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/9/28',
        checkout: '2020/9/30',
      },
    },
    {
      id: 8,
      reservationId: 8,
      state: 'hide',
      readMsg: true,
      hostname: 'Ronald',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: true,
        checkin: '2020/11/20',
        checkout: '2020/11/21',
      },
    },
    {
      id: 9,
      reservationId: 9,
      state: 'hide',
      readMsg: true,
      hostname: 'Krystyn',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/12/15',
        checkout: '2020/12/16',
      },
    },
    {
      id: 10,
      reservationId: 10,
      state: 'hide',
      readMsg: true,
      hostname: 'John',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: '마지막 메시지 내용입니다.',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/10/15',
        checkout: '2020/10/16',
      },
    },
  ],
  // popup filter를 통해 걸러진 messages
  filteredMsgs: [],
  // allMsgCount: 0,
  // hideMsgCount: 0,
  // unreadMsgCount: 0,
  isHost: false,
};

// REDUCER
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
    case CHANGE_MEDIA_SIZE:
      return {
        ...state,
        media: action.media,
      };
    case ARCHAIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg.id === action.id
            ? { ...msg, isActive: !action.isActive, state: 'hide' }
            : msg,
        ),
      };
    case UNARCHAIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg.id === action.id
            ? { ...msg, isActive: !action.isActive, state: 'all' }
            : msg,
        ),
      };
    case UNDO:
      return {
        ...state,
      };
    case ALL_MESSAGE_LIST:
      return {
        ...state,
        filteredMsgs: state.messages.filter(msg => msg.state === 'all'),
      };
    case HIDE_MESSAGE_LIST:
      return {
        ...state,
        filteredMsgs: state.messages.filter(msg => msg.state === 'hide'),
      };
    case UNREAD_MESSAGE_LIST:
      return {
        ...state,
        filteredMsgs: state.messages.filter(msg => !msg.readMsg),
      };
    case MESSAGE_HOST_FLAG:
      return {
        ...state,
        isHost: action.isHost,
      };
    default:
      return state;
  }
};

export default message;
