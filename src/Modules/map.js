import * as api from '../Api/Api';
import { fetchDataThunk, reducerUtils } from '../lib/asyncUtils';

const initialState = reducerUtils.initial();

const map = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default map;
