import * as userApi from '../Api/userApi';

// action types
const SET_RESERVATION = 'user/SET_RESERVATION';

const SIGN_UP = 'user/SIGN_UP';
const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
const SIGN_UP_ERROR = 'user/SIGN_UP_ERROR';

const SIGN_IN = 'user/SIGN_IN';
const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS';
const SIGN_IN_ERROR = 'user/SIGN_IN_ERROR';

const SIGN_OUT = 'user/SIGN_OUT';
const SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS';
const SIGN_OUT_ERROR = 'user/SIGN_OUT_ERROR';

// action creators
export const setReservation = payload => ({ type: SET_RESERVATION });

export const signupRequest = userInfo => async dispatch => {
  dispatch({ type: SIGN_UP });
  try {
    const signupRes = await userApi.sendSignUpReq(userInfo);
    console.log('signupRes: ', signupRes);
    dispatch({ type: SIGN_UP_SUCCESS, signupRes });
  } catch (error) {
    dispatch({ type: SIGN_UP_ERROR, error });
  }
};

// initialState
const initialState = {
  loading: false,
  error: null,
  signupRes: '',
  isLoggedIn: false,
  data: {
    id: 1,
    email: '',
    pwd: '',
    fistName: '',
    lastName: '',
    phone: '',
    birthDay: '',
    profileImg: '',
    description: '',
    signupDate: '',
    social: {},
    isHost: true,
    reservations: [
      {
        reservationId: '',
        homeId: 0,
        hostId: 0,
        checkIn: '',
        checkOut: '',
        isCanceled: true,
        homeTitle: '',
        homeDescription: '',
      },
    ],
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, signupRes: action.signupRes };
    case SIGN_UP_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default user;
