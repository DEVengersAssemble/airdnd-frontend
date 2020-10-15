import * as homeApi from '../Api/homeApi';

const SET_CHECKIN = 'reservation/SET_CHECKIN';
const SET_CHECKOUT = 'reservation/SET_CHECKOUT';
const SET_GUESTS = 'reservation/SET_GUESTS';
const DELETE_CHECKINOUT = 'reservation/DELETE_CHECKINOUT';
const CHANGE_INITIAL_DATE = 'reservation/CHANGE_INITIAL_DATE';
const CHANGE_INITIAL_GUESTS = 'reservation/CHANGE_INITIAL_GUESTS';
const SET_TO_HOST_MESSAGE = 'reservation/SET_TO_HOST_MESSAGE';
const CHANGE_INITIAL_MESSAGE = 'reservation/CHANGE_INITIAL_MESSAGE';
const POST_RESERVATION = 'reservation/POST_RESERVATION';
const POST_RESERVATION_SUCCESS = 'reservation/POST_RESERVATION_SUCCESS';
const POST_RESERVATION_ERROR = 'reservation/POST_RESERVATION_ERROR';

export const setCheckin = checkin => ({ type: SET_CHECKIN, checkin });
export const setCheckout = checkout => ({ type: SET_CHECKOUT, checkout });
export const setResevationGuest = guests => ({ type: SET_GUESTS, guests });
export const deleteCheckInOut = () => ({ type: DELETE_CHECKINOUT });
export const setChangeInitialDate = () => ({ type: CHANGE_INITIAL_DATE });
export const setChangeInitialGuests = () => ({ type: CHANGE_INITIAL_GUESTS });
export const setToHostMessage = text => ({ type: SET_TO_HOST_MESSAGE, text });
export const setChangeInitialMessage = () => ({ type: CHANGE_INITIAL_MESSAGE });

export const postReservation = payload => async dispatch => {
  console.log('post!!!!!!!!!!');
  dispatch({ type: POST_RESERVATION }); // 요청이 시작됨
  try {
    await homeApi.postReservation(payload); // Api 호출
    dispatch({ type: POST_RESERVATION_SUCCESS }); // 성공
  } catch (e) {
    dispatch({ type: POST_RESERVATION_ERROR, error: e }); // 실패
  }
};

const getDateDiff = (date1, date2) => {
  if (!date1 || !date2) return 0;
  const checkIn = new Date(date1);
  const checkOut = new Date(date2);
  const timeDiff = checkOut.getTime() - checkIn.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

const initialState = {
  checkin: '2020.10.28',
  checkout: '2020.10.30',
  dateDiff: 3,
  reservedDates: [
    '2020.10.20',
    '2020.10.25',
    '2020.11.15',
    '2020.11.16',
    '2020.11.20',
    '2020.12.28',
  ],
  guests: { adult: 1, child: 0, infant: 0 },
  changeInitialDate: false,
  changeInitialGuests: false,
  toHostMessage: '',
  changeInitialMessage: false,
  postState: {
    isLoading: false,
    success: false,
    error: null,
  },
};

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKIN: {
      return {
        ...state,
        checkin: action.checkin,
        checkout: '',
      };
    }
    case SET_CHECKOUT: {
      return {
        ...state,
        checkout: action.checkout,
        dateDiff: getDateDiff(state.checkin, action.checkout),
      };
    }
    case DELETE_CHECKINOUT: {
      return {
        ...state,
        checkin: '',
        checkout: '',
        dateDiff: 0,
      };
    }
    case SET_GUESTS: {
      return {
        ...state,
        guests: action.guests,
      };
    }
    case CHANGE_INITIAL_DATE: {
      return {
        ...state,
        changeInitialDate: true,
      };
    }
    case CHANGE_INITIAL_GUESTS: {
      return {
        ...state,
        changeInitialGuests: true,
      };
    }
    case SET_TO_HOST_MESSAGE: {
      return {
        ...state,
        toHostMessage: action.text,
      };
    }
    case CHANGE_INITIAL_MESSAGE: {
      return {
        ...state,
        changeInitialMessage: true,
      };
    }
    case POST_RESERVATION: {
      return {
        ...state,
        postState: { isLoading: true, success: false, error: null },
      };
    }
    case POST_RESERVATION_SUCCESS: {
      return {
        ...state,
        postState: { isLoading: false, success: true, error: null },
      };
    }
    case POST_RESERVATION_ERROR: {
      return {
        ...state,
        postState: { isLoading: false, success: false, error: action.error },
      };
    }
    default:
      return state;
  }
};

export default reservation;
