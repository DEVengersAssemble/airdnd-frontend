// ACTION TYPE
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

const SHOW_MESSAGE = 'message/SHOW_MESSAGE';
const HIDE_MESSAGE = 'message/HIDE_MESSAGE';

const MESSAGE_HOST_FLAG = 'message/MESSAGE_HOST_FLAG';

const OPEN_MODAL = 'message/OPEN_MODAL';
const CLOSE_MODAL = 'message/CLOSE_MODAL';

// ACTION CREATOR
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
export const undo = () => ({ type: UNDO });
export const showUndoToast = () => ({ type: SHOW_UNDO_TOAST });
export const hideUndoToast = () => ({ type: HIDE_UNDO_TOAST });

export const allMsgList = index => ({ type: ALL_MESSAGE_LIST, index });
export const hideMsgList = index => ({ type: HIDE_MESSAGE_LIST, index });
export const unreadMsgList = index => ({ type: UNREAD_MESSAGE_LIST, index });

export const isHost = isHost => ({ type: MESSAGE_HOST_FLAG, isHost });

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
      hostname: 'Paul',
      contents: {
        hostProfileImg:
          'https://i.pinimg.com/originals/05/5f/2b/055f2bf2e34e410fffc5b7dc83c5ed61.jpg',
        lastMsg: '끼야야야야야옹~~~~~끼야야야야야옹~~~~~',
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
      hostname: 'Bhel',
      contents: {
        hostProfileImg:
          'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F192F1C464DD57EB614',
        lastMsg: '유후유후',
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
      hostname: 'James',
      contents: {
        hostProfileImg:
          'https://image.dongascience.com/Photo/2020/06/353a1307fc8cad69a8aaf6777b2862c1.jpg',
        lastMsg: '코로나인데 올수있음?',
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
      hostname: 'Maple',
      contents: {
        hostProfileImg:
          'https://www.1xbetkrs.com/wp-content/uploads/2020/03/0-e1583216806476.jpg',
        lastMsg: '끼야호! 여행 개꿀~',
        lastMsgDate: '2020/08/20',
        isCanceled: true,
        checkin: '2020/06/01',
        checkout: '2020/06/03',
      },
    },
    {
      id: 5,
      reservationId: 5,
      state: 'unread',
      hostname: 'Linda',
      contents: {
        hostProfileImg:
          'https://mblogthumb-phinf.pstatic.net/MjAxNzEwMjNfMzIg/MDAxNTA4NzQxMzIwMDY0.iuNB_sdkpC4PIscgbOArKNr5qFu9KFUUwQuvcVGtrWUg.6nqdqSlCQblZpSID9LH3vLaNrdkHo-9OiWrC39ebIdwg.JPEG.soko1274/009_20171023.jpg?type=w800',
        lastMsg: '여행 개꿀이었슴다',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/07/30',
        checkout: '2020/08/01',
      },
    },
    {
      id: 6,
      reservationId: 6,
      state: 'unread',
      hostname: 'June',
      contents: {
        hostProfileImg:
          'https://i.pinimg.com/originals/05/5f/2b/055f2bf2e34e410fffc5b7dc83c5ed61.jpg',
        lastMsg: '췍췍 메시지 췍!',
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
      hostname: 'Jason',
      contents: {
        hostProfileImg:
          'https://www.catcare.or.kr/files/attach/images/260/358/867/002/d4d55e3427874b6aa9a467499b913975.jpg',
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
      hostname: 'Ronald',
      contents: {
        hostProfileImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFpHJt-TLd1nvnt17LKYGqAt_q-jtw_dvheQ&usqp=CAU',
        lastMsg: '로나를ㄹㄹㄹ도!!',
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
      hostname: 'Krystyn',
      contents: {
        hostProfileImg:
          'https://cdn.crowdpic.net/list-thumb/thumb_l_3E51F47F947E3C9D46DF66C41496ED70.jpg',
        lastMsg: 'Hey, krystyn! im jay!',
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
      hostname: 'John',
      contents: {
        hostProfileImg:
          'https://t1.daumcdn.net/cfile/tistory/146C13354E56E5420D',
        lastMsg: 'what the holy s...',
        lastMsgDate: '2020/08/20',
        isCanceled: false,
        checkin: '2020/10/15',
        checkout: '2020/10/16',
      },
    },
  ],
  // popup filter를 통해 걸러진 messages
  activeIndex: 0,
  tempMsgs: [], // 숨김 취소했을 시 tempMsgs 불러옴
  filteredMsgs: [
    {
      id: 1,
      reservationId: 1,
      state: 'all',
      hostname: 'Paul',
      contents: {
        hostProfileImg:
          'https://i.pinimg.com/originals/05/5f/2b/055f2bf2e34e410fffc5b7dc83c5ed61.jpg',
        lastMsg: '끼야야야야야옹~~~~~끼야야야야야옹~~~~~',
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
      hostname: 'Bhel',
      contents: {
        hostProfileImg:
          'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F192F1C464DD57EB614',
        lastMsg: '유후유후',
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
      hostname: 'James',
      contents: {
        hostProfileImg:
          'https://image.dongascience.com/Photo/2020/06/353a1307fc8cad69a8aaf6777b2862c1.jpg',
        lastMsg: '코로나인데 올수있음?',
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
      hostname: 'Maple',
      contents: {
        hostProfileImg:
          'https://www.1xbetkrs.com/wp-content/uploads/2020/03/0-e1583216806476.jpg',
        lastMsg: '끼야호! 여행 개꿀~',
        lastMsgDate: '2020/08/20',
        isCanceled: true,
        checkin: '2020/06/01',
        checkout: '2020/06/03',
      },
    },
  ],
  toast: false,
  undoToast: false,
  schedulePdf: { text: '', language: '' },
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
          msg.id === action.id ? { ...msg, state: 'hide' } : msg,
        ),
        tempMsgs: state.filteredMsgs,
        filteredMsgs: state.filteredMsgs.filter(
          (_, index) => index !== action.index,
        ),
      };
    case UNARCHAIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg.id === action.id ? { ...msg, state: 'all' } : msg,
        ),
        tempMsgs: state.filteredMsgs,
        filteredMsgs: state.filteredMsgs.filter(
          (_, index) => index !== action.index,
        ),
      };
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
    case UNDO:
      return {
        ...state,
        filteredMsgs: state.tempMsgs,
      };
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
    case ALL_MESSAGE_LIST:
      return {
        ...state,
        activeIndex:
          state.activeIndex === action.index ? state.activeIndex : action.index,
        filteredMsgs: state.messages.filter(msg => msg.state === 'all'),
      };
    case HIDE_MESSAGE_LIST:
      return {
        ...state,
        activeIndex:
          state.activeIndex === action.index ? state.activeIndex : action.index,
        filteredMsgs: state.messages.filter(msg => msg.state === 'hide'),
      };
    case UNREAD_MESSAGE_LIST:
      return {
        ...state,
        activeIndex:
          state.activeIndex === action.index ? state.activeIndex : action.index,
        filteredMsgs: state.messages.filter(msg => msg.state === 'unread'),
      };
    case MESSAGE_HOST_FLAG:
      return {
        ...state,
        activeIndex: 0,
        isHost: action.isHost,
      };
    default:
      return state;
  }
};

export default message;
