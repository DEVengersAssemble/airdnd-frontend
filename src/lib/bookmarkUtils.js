import { openModal } from '../Modules/modal';
import { changeHeart } from '../Modules/search';
import { removeBookmark, openListModal } from '../Modules/wishlists';

export const toggleBookmark = (userId, home, dispatch) => {
  if (!userId) return dispatch(openModal('login'));
  if (home.isBookmarked) {
    dispatch(removeBookmark(home.homeId));
    return;
  }
  dispatch(openListModal(home.homeId, home.imageArray[0]));
};

export const fetchBookmarkDataThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return param => async dispatch => {
    console.log(param);
    dispatch({ type });
    try {
      const payload = await promiseCreator(param); // API 호출
      dispatch({ type: SUCCESS, payload, param }); // 호출 성공
      dispatch(changeHeart(param.bookmarkHomeId));
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true }); // 호출 실패
    }
  };
};

export const createBookmarkDataThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return param => async dispatch => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload, param });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};
