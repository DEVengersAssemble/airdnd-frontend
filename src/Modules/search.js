// action type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const SET_DIFF = 'counter/SET_DIFF';

// action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = diff => ({ type: SET_DIFF, diff });

// initial state
const initialState = {
  searchPage: {
    homes: [
      {
        homeId: 0,
        isSuperhost: true,
        isBookmarked: true,
        image: '', // 첫번째 이미지만
        imageCount: 0, // 이미지 개수
        subTitle: '',
        title: '',
        feature: '',
        rating: 0,
        reviewCount: 0,
        location: { lat: 0, lng: 0 },
      },
    ],
    homeImage: '', // 캐러셀 버튼 클릭할 때 받아올 이미지
    recentHomes: [
      {
        homeId: 0,
        isSuperhost: true,
        isBookmarked: true,
        image: '', // 첫번째 이미지만
        imageCount: 0, // 이미지 개수
        subTitle: '',
        title: '',
        rating: 0,
        reviewCount: 0,
      },
    ],
    filter: [],
    dataTotal: 0,
    price: [0], // 만원 단위로 숙박 개수
  },
  // map 범위 보낼때
  // mapSend: {
  //   from: { lat: 0, lng: 0 },
  //   to: { lat: 0, lng: 0 },
  // },
};

// reducer
const search = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    default:
      return state;
  }
};

export default search;
