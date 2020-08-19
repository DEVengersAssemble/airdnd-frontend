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
  homes: [
    {
      homeId: 1,
      isSuperhost: true,
      isBookmarked: true,
      image:
        'https://www.airbnb.co.kr/rooms/36094960?adults=1&location=%EB%A7%88%EB%93%9C%EB%A6%AC%EB%93%9C&source_impression_id=p3_1597324281_lNy0Q31ggfi0f1St&check_in=2020-09-26&guests=1&check_out=2020-09-30', // 첫번째 이미지만
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실',
      title: 'Pia Resort Hotel Corner Studio Room',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개',
      rating: 4.25,
      reviewCount: 89,
      price: 54324,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 2,
      isSuperhost: false,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이지롱',
      title: 'Pia Resort Hotel Corner Studio Room~~~',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개!!!',
      rating: 3.95,
      reviewCount: 111,
      price: 98839,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 3,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
  ],
  homeImage: '', // 캐러셀 버튼 클릭할 때 받아올 이미지
  recentHomes: [
    {
      homeId: 4,
      isSuperhost: true,
      isBookmarked: true,
      image:
        'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large', // 첫번째 이미지만
      imageCount: 4, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      rating: 3.33,
      reviewCount: 312,
    },
  ],
  filter: [],
  dataTotal: 290,
  price: [0], // 만원 단위로 숙박 개수

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
