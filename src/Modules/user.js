// action types
import * as userApi from '../Api/userApi';

const GET_USER = 'user/GET_USER';

const LOG_OUT = 'user/LOG_OUT';
const LOG_OUT_SUCCESS = 'user/LOG_OUT_SUCCESS';
const LOG_OUT_ERROR = 'user/LOG_OUT_ERROR';

// testing
const SET_IS_LOGGED_IN = 'user/SET_IS_LOGGED_IN';

// action creators
export const setIsLoggedIn = value => ({ type: SET_IS_LOGGED_IN, value });

export const getUser = data => ({
  type: GET_USER,
  data,
});

export const logoutRequest = () => async dispatch => {
  dispatch({ type: LOG_OUT });
  try {
    const { result } = await userApi.sendLogOutReq();
    console.log('[logout] ', result);
    dispatch({ type: LOG_OUT_SUCCESS, result });
  } catch (error) {
    dispatch({ type: LOG_OUT_ERROR, error });
  }
};

// initialState
const initialState = {
  isLoggedIn: false,
  data: {
    id: null,
    email: '',
    pwd: '',
    fistName: '',
    lastName: '',
    phone: '',
    birthDay: '',
    profileImg: '',
    description: '',
    isHost: false,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        isLoggedIn: true,
        data: action.data,
      };
    case LOG_OUT:
      return initialState;
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.value,
      };
    default:
      return state;
  }
};

export default user;
