// action type
const CREATE_BOOKMARKLIST = 'wishlists/CREATE_BOOKMARKLIST';

// action creator
let id = 5;
export const createBookmarkList = value => ({
  type: CREATE_BOOKMARKLIST,
  bookmarkLists: [
    { bookmarkListId: id++, bookmarkListTitle: value, bookmarks: [] },
  ],
});

// initial state
const initialState = {
  bookmarkLists: [
    {
      bookmarkListId: 1,
      bookmarkListTitle: '흐앙 놀러가자ㅠㅠ 코로나님꺼져주세여',
      bookmarks: [
        {
          homeId: 1,
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
        {
          homeId: 3,
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
    default:
      return state;
  }
};

export default wishlists;
