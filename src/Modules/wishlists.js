import * as api from '../Api/bookmarkApi';
import {
  fetchDataThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils';
// action type
const FETCH_BOOKMARKLISTS = 'wishlists/FETCH_BOOKMARKLISTS';
const FETCH_BOOKMARKLISTS_SUCCESS = 'wishlists/FETCH_BOOKMARKLISTS_SUCCESS';
const FETCH_BOOKMARKLISTS_ERROR = 'wishlists/FETCH_BOOKMARKLISTS_ERROR';
const CREATE_BOOKMARKLIST = 'wishlists/CREATE_BOOKMARKLIST';
const CREATE_BOOKMARKLIST_SUCCESS = 'wishlists/CREATE_BOOKMARKLIST_SUCCESS';
const CREATE_BOOKMARKLIST_ERROR = 'wishlists/CREATE_BOOKMARKLIST_ERROR';
const ADD_BOOKMARK_OLD_LIST = 'wishlists/ADD_BOOKMARK_OLD_LIST';
const ADD_BOOKMARK_NEW_LIST = 'wishlists/ADD_BOOKMARK_NEW_LIST';
const REMOVE_BOOKMARK = 'wishlists/REMOVE_BOOKMARK';
const OPEN_LIST_MODAL = 'wishlists/OPEN_LIST_MODAL';
const CLOSE_LIST_MODAL = 'wishlists/CLOSE_LIST_MODAL';
const OPEN_NEW_MODAL = 'wishlists/OPEN_NEW_MODAL';
const CLOSE_NEW_MODAL = 'wishlists/CLOSE_NEW_MODAL';
// action creator
export const fetchBookmarkLists = fetchDataThunk(
  FETCH_BOOKMARKLISTS,
  api.fetchWishlistsData,
);
export const createBookmarkList = fetchDataThunk(
  CREATE_BOOKMARKLIST,
  api.postWishlists,
);
let id = 5;
// export const createBookmarkList = value => ({
//   type: CREATE_BOOKMARKLIST,
//   bookmarkList: {
//     bookmarkListId: id++,
//     bookmarkListTitle: value,
//     bookmarks: [],
//   },
// });

export const addBookmarkOldList = bookmarkListId => ({
  type: ADD_BOOKMARK_OLD_LIST,
  bookmarkListId,
});
export const addBookmarkNewList = title => ({
  type: ADD_BOOKMARK_NEW_LIST,
  bookmarkList: {
    bookmarkListId: id++,
    bookmarkListTitle: title,
  },
});
export const removeBookmark = homeId => ({ type: REMOVE_BOOKMARK, homeId });
export const openListModal = (homeId, homeImg) => ({
  type: OPEN_LIST_MODAL,
  homeId,
  homeImg,
});
export const closeListModal = () => ({ type: CLOSE_LIST_MODAL });
export const openNewModal = () => ({ type: OPEN_NEW_MODAL });
export const closeNewModal = () => ({ type: CLOSE_NEW_MODAL });
// initial state
const initialState = {
  ...reducerUtils.initial(),
  listModal: false,
  newModal: false,
  selectedId: null,
  selectedImg: '',
  // bookmarkLists: [
  //   {
  //     bookmarkListId: 1,
  //     bookmarkListTitle: '흐앙 놀러가자ㅠㅠ 코로나님꺼져주세여',
  //     bookmarks: [
  //       {
  //         homeId: 0,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ], // 첫번째 이미지만 노출
  //       },
  //     ],
  //   },
  //   {
  //     bookmarkListId: 2,
  //     bookmarkListTitle: '서울특별시',
  //     bookmarks: [
  //       {
  //         homeId: 1,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 2,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     bookmarkListId: 3,
  //     bookmarkListTitle: '제주도가고싶다',
  //     bookmarks: [
  //       {
  //         homeId: 3,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 4,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 5,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     bookmarkListId: 4,
  //     bookmarkListTitle: '괌으로 고고씽',
  //     bookmarks: [
  //       {
  //         homeId: 6,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 7,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 8,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 9,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //     ],
  //   },
  // ],
};
// reducer
const wishlists = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKMARKLISTS:
    case FETCH_BOOKMARKLISTS_SUCCESS:
    case FETCH_BOOKMARKLISTS_ERROR:
      return handleAsyncActions(FETCH_BOOKMARKLISTS)(state, action);
    case CREATE_BOOKMARKLIST:
    case CREATE_BOOKMARKLIST_SUCCESS:
    case CREATE_BOOKMARKLIST_ERROR:
      return {
        ...state,
        ...handleAsyncActions(FETCH_BOOKMARKLISTS)(state, action),
        // ...state.data.bookmarkLists.concat(action.bookmarkList),
      };

    // case CREATE_BOOKMARKLIST:
    //   return {
    //     ...state,
    //     ...state.data.bookmarkLists.concat(action.bookmarkList),
    //   };

    case ADD_BOOKMARK_OLD_LIST:
      return {
        ...state,
        listModal: false,
        selectedId: null,
        selectedImg: '',
        bookmarkLists: state.bookmarkLists.map(bmList =>
          bmList.bookmarkListId === action.bookmarkListId
            ? {
                ...bmList,
                bookmarks: [
                  ...bmList.bookmarks,
                  { homeId: state.selectedId, images: state.selectedImg },
                ],
              }
            : bmList,
        ),
      };
    case ADD_BOOKMARK_NEW_LIST:
      return {
        ...state,
        newModal: false,
        selectedId: null,
        selectedImg: '',
        bookmarkLists: state.bookmarkLists.concat({
          ...action.bookmarkList,
          bookmarks: [{ homeId: state.selectedId, images: state.selectedImg }],
        }),
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarkLists: state.bookmarkLists.map(bmList => ({
          ...bmList,
          bookmarks: bmList.bookmarks.filter(bm => bm.homeId !== action.homeId),
        })),
      };
    case OPEN_LIST_MODAL:
      return {
        ...state,
        listModal: true,
        selectedId: action.homeId,
        selectedImg: action.homeImg,
      };
    case CLOSE_LIST_MODAL:
      return {
        ...state,
        listModal: false,
        selectedId: null,
        selectedImg: '',
      };
    case OPEN_NEW_MODAL:
      return {
        ...state,
        listModal: false,
        newModal: true,
      };
    case CLOSE_NEW_MODAL:
      return {
        ...state,
        listModal: true,
        newModal: false,
      };
    default:
      return state;
  }
};
export default wishlists;
