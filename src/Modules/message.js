import * as api from '../Api/messageApi';
import {
  fetchDataThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils';

// ACTION TYPE
const FETCH_INBOX = 'message/FETCH_INBOX';
const FETCH_INBOX_SUCCESS = 'message/FETCH_INBOX_SUCCESS';
const FETCH_INBOX_ERROR = 'message/FETCH_INBOX_ERROR';

const SET_ACTIVE_ID = 'message/SET_ACTIVE_ID';

const SHOW_MESSAGE_DETAIL_SECTION = 'message/SHOW_MESSAGE_DETAIL_SECTION';
const HIDE_MESSAGE_DETAIL_SECTION = 'message/HIDE_MESSAGE_DETAIL_SECTION';
const SHOW_MESSAGE_LIST_SECTION = 'message/SHOW_MESSAGE_LIST_SECTION';
const HIDE_MESSAGE_LIST_SECTION = 'message/HIDE_MESSAGE_LIST_SECTION';
const CHANGE_MEDIA_SIZE = 'message/CHANGE_MEDIA_SIZE';

const ARCHAIVE_MESSAGE = 'message/ARCHAIVE_MESSAGE';
const UNARCHAIVE_MESSAGE = 'message/UNARCHAIVE_MESSAGE';
const SHOW_TOAST = 'message/SHOW_TOAST';
const HIDE_TOAST = 'message/HIDE_TOAST';
const UNDO = 'message/UNDO';
const SHOW_UNDO_TOAST = 'message/SHOW_UNDO_TOAST';
const HIDE_UNDO_TOAST = 'message/HIDE_UNDO_TOAST';

const ALL_MESSAGE_LIST = 'message/ALL_MESSAGE_LIST';
const HIDE_MESSAGE_LIST = 'message/HIDE_MESSAGE_LIST';
const UNREAD_MESSAGE_LIST = 'message/UNREAD_MESSAGE_LIST';

const OPEN_MODAL = 'message/OPEN_MODAL';
const CLOSE_MODAL = 'message/CLOSE_MODAL';
const PDF_INPUT = 'message/PDF_INPUT';

// ACTION CREATOR
export const fetchInbox = fetchDataThunk(FETCH_INBOX, api.fetchMessagesData);
export const setActiveId = id => ({ type: SET_ACTIVE_ID, id });

export const showMsgDetailSection = () => ({
  type: SHOW_MESSAGE_DETAIL_SECTION,
});
export const hideMsgDetailSection = () => ({
  type: HIDE_MESSAGE_DETAIL_SECTION,
});
export const showMsgListSection = () => ({ type: SHOW_MESSAGE_LIST_SECTION });
export const hideMsgListSection = () => ({ type: HIDE_MESSAGE_LIST_SECTION });
export const changeMediaSize = media => ({ type: CHANGE_MEDIA_SIZE, media });

export const archiveMsg = (index, id, state) => ({
  type: ARCHAIVE_MESSAGE,
  index,
  id,
  state,
});

export const unarchiveMsg = (index, id, state) => ({
  type: UNARCHAIVE_MESSAGE,
  index,
  id,
  state,
});

export const showToast = () => ({ type: SHOW_TOAST });
export const hideToast = () => ({ type: HIDE_TOAST });
export const undo = (id, state) => ({ type: UNDO, id, state });
export const showUndoToast = () => ({ type: SHOW_UNDO_TOAST });
export const hideUndoToast = () => ({ type: HIDE_UNDO_TOAST });

export const allMsgList = index => ({ type: ALL_MESSAGE_LIST, index });
export const hideMsgList = index => ({ type: HIDE_MESSAGE_LIST, index });
export const unreadMsgList = index => ({ type: UNREAD_MESSAGE_LIST, index });

export const openModal = name => ({ type: OPEN_MODAL, name });
export const closeModal = name => ({ type: CLOSE_MODAL, name });

export const pdfInput = value => ({ type: PDF_INPUT, value });

// INITIAL STATE
const modalInit = {
  business: false,
  flag: false,
  support: false,
  pdf: false,
  language: false,
  value: '',
};

const initialState = {
  message: reducerUtils.initial(), // filter된 메시지가 옴
  modalState: modalInit,
  toast: false,
  undoToast: false,
  isHost: false,
  msgDetailSectionState: true,
  msgListSectionState: true,
  media: 'large',
  activeId: 0,
  activeIndex: 0, // popup filter를 통해 걸러진 messages
  tempMsgs: [], // 숨김 취소했을 시 tempMsgs 불러옴
  profileImg:
    'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
  // data: {
  //   loading: '',
  //   error: '',
  //   modalState: modalInit,
  //   toast: false,
  //   undoToast: false,
  //   isHost: false,
  //   msgDetailSectionState: true,
  //   msgListSectionState: true,
  //   media: 'large',
  //   activeIndex: 0,
  //   tempMsgs: [],
  //   profileImg:
  //     'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
  //   filteredMsg: [
  //     {
  //       id: 1,
  //       reservationId: 1,
  //       state: 'all',
  //       hostname: 'Paul',
  //       contents: {
  //         hostProfileImg:
  //           'https://i.pinimg.com/originals/05/5f/2b/055f2bf2e34e410fffc5b7dc83c5ed61.jpg',
  //         lastMsg: '끼야야야야야옹~~~~~끼야야야야야옹~~~~~',
  //         lastMsgDate: '2020/08/20',
  //         isCanceled: false,
  //         checkin: '2020/09/25',
  //         checkout: '2020/09/26',
  //       },
  //       chatHistory: [
  //         {
  //           id: 1,
  //           userId: 1,
  //           name: 'Jay',
  //           timeStamp: '2020/09/10/16:00',
  //           text:
  //             'Host님 안녕하세요. 예약한 Jay입니다. 반갑습니다. 고양이 졸귀 여행가고시펑시펑. 채팅 잘 보내지는중?? 갔음?',
  //         },
  //         {
  //           id: 2,
  //           userId: 2,
  //           name: 'hostname',
  //           timeStamp: '2020/09/10/16:02',
  //           text: 'Hello Jay! 메시지 잘와씀둥 커먼커먼 여행커먼!',
  //         },
  //         {
  //           id: 3,
  //           userId: 1,
  //           name: 'Jay',
  //           timeStamp: '2020/09/10/16:00',
  //           text: '코로나 이즈 너무 심해~~ 괜찮아지면 갈게',
  //         },
  //         {
  //           id: 4,
  //           userId: 2,
  //           name: 'hostname',
  //           timeStamp: '2020/09/10/16:02',
  //           text:
  //             '예압... 코로나 쏘 호러블~ 그켬그켬~ 하루퐐리 갠촤놔 져씀 조케써',
  //         },
  //       ],
  //     },
  //   ],
  // },
};

// REDUCER
const message = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INBOX:
    case FETCH_INBOX_SUCCESS:
    case FETCH_INBOX_ERROR:
      return handleAsyncActions(FETCH_INBOX, 'message')(state, action);

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
    case SET_ACTIVE_ID:
      return {
        ...state,
        activeId: action.id,
      };

    // case ARCHAIVE_MESSAGE:
    //   return {
    //     ...state,
    //     messages: state.messages.map(msg =>
    //       msg.id === action.id ? { ...msg, state: action.state } : msg,
    //     ),
    //     tempMsgs: state.filteredMsgs,
    //     filteredMsgs: state.filteredMsgs.filter(
    //       (_, index) => index !== action.index,
    //     ),
    //   };
    // case UNARCHAIVE_MESSAGE:
    //   return {
    //     ...state,
    //     messages: state.messages.map(msg =>
    //       msg.id === action.id ? { ...msg, state: action.state } : msg,
    //     ),
    //     tempMsgs: state.filteredMsgs,
    //     filteredMsgs: state.filteredMsgs.filter(
    //       (_, index) => index !== action.index,
    //     ),
    //   };

    case SHOW_TOAST:
      return {
        ...state,
        toast: true,
      };
    case HIDE_TOAST:
      return {
        ...state,
        toast: false,
      };

    // case UNDO:
    //   return {
    //     ...state,
    //     messages: state.messages.map(msg =>
    //       msg.id === action.id ? { ...msg, state: action.state } : msg,
    //     ),
    //     tempMsgs: [],
    //     filteredMsgs: state.tempMsgs,
    //   };

    case SHOW_UNDO_TOAST:
      return {
        ...state,
        undoToast: true,
      };
    case HIDE_UNDO_TOAST:
      return {
        ...state,
        undoToast: false,
      };

    // case ALL_MESSAGE_LIST:
    //   return {
    //     ...state,
    //     activeIndex:
    //       state.activeIndex === action.index ? state.activeIndex : action.index,
    //     filteredMsgs: state.messages.filter(msg => msg.state === 'all'),
    //   };
    // case HIDE_MESSAGE_LIST:
    //   return {
    //     ...state,
    //     activeIndex:
    //       state.activeIndex === action.index ? state.activeIndex : action.index,
    //     filteredMsgs: state.messages.filter(msg => msg.state === 'hide'),
    //   };
    // case UNREAD_MESSAGE_LIST:
    //   return {
    //     ...state,
    //     activeIndex:
    //       state.activeIndex === action.index ? state.activeIndex : action.index,
    //     filteredMsgs: state.messages.filter(msg => msg.state === 'unread'),
    //   };

    case OPEN_MODAL:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          [action.name]: true,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          [action.name]: false,
        },
      };
    case PDF_INPUT:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          value: action.value,
        },
      };
    default:
      return state;
  }
};

export default message;
