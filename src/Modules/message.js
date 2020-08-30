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
      isActive: false,
      contents: {
        hostProfileImg:
          'https://lh3.googleusercontent.com/proxy/HwULzhe0mrv1SXgAN_v_3xwpuiNBPMfBNs891dO_cnfBnGFuV6zxOmKexXwbbnbRrKpjFOrIGLwtPmsNQ7V5ySkWwhQCYlO0azLnePvoYsLV2boJhA',
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
      readMsg: true,
      hostname: 'Bhel',
      isActive: false,
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
      readMsg: false,
      hostname: 'James',
      isActive: false,
      contents: {
        hostProfileImg:
          'https://lh3.googleusercontent.com/proxy/oiw7i5NnxIJr3dRM9IUKn50ggw9Sd0x4JplCQ65C0sNpJ4nA1EXkwpvyTn7i06bBn7jZNMe5tNkt2HcDWrv2i_-dclwqeJROVt2LDz1wrf3ODAV5d_mLA-x69GOvnWRMlli2zxOrvBdDTKSPL9KgNyLYl7lEaBwnqOcj6Vb8K-Rw0LhotQtI',
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
      readMsg: false,
      hostname: 'Maple',
      isActive: false,
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
      state: 'all',
      readMsg: false,
      hostname: 'Linda',
      isActive: false,
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
      state: 'all',
      readMsg: false,
      hostname: 'June',
      isActive: false,
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
      readMsg: true,
      hostname: 'Jason',
      isActive: false,
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
      readMsg: true,
      hostname: 'Ronald',
      isActive: false,
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
      readMsg: true,
      hostname: 'Krystyn',
      isActive: false,
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
      readMsg: true,
      hostname: 'John',
      isActive: false,
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
