import { openModal } from '../Modules/modal';
import { changeHeart } from '../Modules/search';
import { removeBookmark, openListModal } from '../Modules/wishlists';

export const toggleBookmark = (userId, home, dispatch) => {
  if (!userId) return dispatch(openModal('login'));
  if (home.isBookmarked) {
    dispatch(removeBookmark({ bookmarkHomeId: home.homeId }));
    dispatch(changeHeart(home.homeId));
    return;
  }
  dispatch(openListModal(home.homeId, home.imageArray[0]));
};
