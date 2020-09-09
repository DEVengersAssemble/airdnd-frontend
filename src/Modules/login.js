const LOG_IN = 'login/LOG_IN';
const LOG_IN_SUCCESS = 'login/LOG_IN_SUCCESS';
const LOG_IN_ERROR = 'login/LOG_IN_ERROR';

const LOG_OUT = 'login/LOG_OUT';
const LOG_OUT_SUCCESS = 'login/LOG_OUT_SUCCESS';
const LOG_OUT_ERROR = 'login/LOG_OUT_ERROR';

const initialState = {};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, loading: true };
    case LOG_IN_SUCCESS:
      return { ...state, loading: false, msg: action.msg };
    case LOG_IN_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default login;
