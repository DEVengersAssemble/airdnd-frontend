export const fetchDataThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return param => async dispatch => {
    // param은 필요할 때만 쓰세요
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      console.log('할당햇고요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', payload);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      console.log('에러 무슨일이야', e);
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: data => ({
    loading: false,
    data,
    error: null,
  }),
  error: error => ({
    loading: false,
    data: null,
    error,
  }),
};
