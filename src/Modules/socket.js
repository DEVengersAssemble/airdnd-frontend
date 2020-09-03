// action
const SEND_CHAT = 'socket/SEND_CHAT';
const RECEIVE_CHAT = 'socket/RECEIVE_CHAT';

// action creator
export const sendChat = () => ({ type: SEND_CHAT });
export const receiveChat = (id, msg) => ({ type: RECEIVE_CHAT, id, msg });

// initialState
const initialState = {
  msg: '',
  chat: [],
};

// reducer
const socket = (state = initialState, action) => {
  switch (action.type) {
    case SEND_CHAT:
      return {
        ...state,
        msg: action.data,
      };
    case RECEIVE_CHAT:
      return {
        ...state,
        chat: state.chat.concat({ id: action.id, msg: action.msg }),
      };
    default:
      return state;
  }
};

export default socket;
