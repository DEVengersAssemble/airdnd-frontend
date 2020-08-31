// action type
const CREATE_BOOKMARKLIST = 'wishlists/CREATE_BOOKMARKLIST';
const ADD_BOOKMARK_OLD_LIST = 'wishlists/ADD_BOOKMARK_OLD_LIST';
const ADD_BOOKMARK_NEW_LIST = 'wishlists/ADD_BOOKMARK_NEW_LIST';
const REMOVE_BOOKMARK = 'wishlists/REMOVE_BOOKMARK';

const OPEN_LIST_MODAL = 'wishlists/OPEN_LIST_MODAL';
const CLOSE_LIST_MODAL = 'wishlists/CLOSE_LIST_MODAL';
const OPEN_NEW_MODAL = 'wishlists/OPEN_NEW_MODAL';
const CLOSE_NEW_MODAL = 'wishlists/CLOSE_NEW_MODAL';

// action creator
let id = 5;
export const createBookmarkList = value => ({
  type: CREATE_BOOKMARKLIST,
  bookmarkLists: [
    { bookmarkListId: id++, bookmarkListTitle: value, bookmarks: [] },
  ],
});

export const addBookmarkOldList = (homeId, bookmarkListId) => ({
  type: ADD_BOOKMARK_OLD_LIST,
  bookmark: { homeId, images: [] },
  bookmarkListId,
});

export const addBookmarkNewList = (title, homeId) => ({
  type: ADD_BOOKMARK_NEW_LIST,
  bookmarkLists: [
    {
      bookmarkListId: id++,
      bookmarkListTitle: title,
      bookmarks: [{ homeId, images: [] }],
    },
  ],
});

export const removeBookmark = homeId => ({ type: REMOVE_BOOKMARK, homeId });

// initial state
const initialState = {
  listModal: false,
  newModal: false,
  bookmarkLists: [
    {
      bookmarkListId: 1,
      bookmarkListTitle: '흐앙 놀러가자ㅠㅠ 코로나님꺼져주세여',
      bookmarks: [
        {
          homeId: 0,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ], // 첫번째 이미지만 노출
        },
      ],
    },
    {
      bookmarkListId: 2,
      bookmarkListTitle: '서울특별시',
      bookmarks: [
        {
          homeId: 1,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
        {
          homeId: 2,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
      ],
    },
    {
      bookmarkListId: 3,
      bookmarkListTitle: '제주도가고싶다',
      bookmarks: [
        {
          homeId: 3,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
        {
          homeId: 4,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
        {
          homeId: 5,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
      ],
    },
    {
      bookmarkListId: 4,
      bookmarkListTitle: '괌으로 고고씽',
      bookmarks: [
        {
          homeId: 6,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
        {
          homeId: 7,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
        {
          homeId: 8,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
        {
          homeId: 9,
          images: [
            'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
          ],
        },
      ],
    },
  ],
};

// reducer
const wishlists = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKMARKLIST:
      return {
        ...state,
        bookmarkLists: state.bookmarkLists.concat(action.bookmarkLists),
      };

    case ADD_BOOKMARK_OLD_LIST:
      return {
        ...state,
        listModal: false,
        bookmarkLists: state.bookmarkLists.map(bmList =>
          bmList.bookmarkListId === action.bookmarkListId
            ? { ...bmList, bookmarks: [...bmList.bookmarks, action.bookmark] }
            : bmList,
        ),
      };
    case ADD_BOOKMARK_NEW_LIST:
      return {
        ...state,
        newModal: false,
        bookmarkLists: state.bookmarkLists.concat(action.bookmarkLists),
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarkLists: state.bookmarkLists.map(bmList => ({
          ...bmList,
          bookmarks: bmList.bookmarks.filter(bm => bm.homeId !== action.homeId),
        })),
      };
    default:
      return state;
  }
};

export default wishlists;
