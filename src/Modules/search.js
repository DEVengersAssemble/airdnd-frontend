// action type
const SHOW_MAP = 'search/SHOW_MAP';
const HIDE_MAP = 'search/HIDE_MAP';
const ZOOM_IN = 'search/ZOOM_IN';
const ZOOM_OUT = 'search/ZOOM_OUT';
const SAVE_FILTER = 'search/SAVE_FILTER';
const APPLY_TOGGLE_FILTER = 'search/APPLY_TOGGLE_FILTER';
const APPLY_COUNTER_FILTER = 'search/APPLY_COUNTER_FILTER';
const APPLY_CHECK_FILTER = 'search/APPLY_CHECK_FILTER';
const RESET_MODAL_FILTER = 'search/RESET_MODAL/FILTER';

// action creator
export const showMap = () => ({ type: SHOW_MAP });
export const hideMap = () => ({ type: HIDE_MAP });
export const zoomIn = () => ({ type: ZOOM_IN });
export const zoomOut = () => ({ type: ZOOM_OUT });
export const saveFilter = (name, value) => ({ type: SAVE_FILTER, name, value });
export const applyToggleFilter = (name, value) => ({
  type: APPLY_TOGGLE_FILTER,
  name,
  value,
});
export const applyCounterFilter = (name, value) => ({
  type: APPLY_COUNTER_FILTER,
  name,
  value,
});
export const applyCheckFilter = (list, name, value) => ({
  type: APPLY_CHECK_FILTER,
  list,
  name,
  value,
});
export const resetModalFilter = filterCondition => ({
  type: RESET_MODAL_FILTER,
  filterCondition,
});

export const setModalFilter = filterCondition => {
  const filter = {};
  const {
    instantBooking,
    bedroom,
    convenience,
    convenienceList,
    facilityList,
    hostLangList,
  } = filterCondition;
  if (instantBooking) filter.instantBooking = false;
  if (bedroom) filter.bedroom = { bed: 0, room: 0, bathroom: 0 };
  if (convenience) filter.convenience = false;
  if (convenienceList) {
    filter.convenienceList = {};
    convenienceList.forEach(item => (filter.convenienceList[item] = false));
  }
  if (facilityList) {
    filter.facilityList = {};
    facilityList.forEach(item => (filter.facilityList[item] = false));
  }
  if (hostLangList) {
    filter.hostLangList = {};
    hostLangList.forEach(item => (filter.hostLangList[item] = false));
  }
  return filter;
};

// initial state
const initialState = {
  homes: [
    {
      homeId: 1,
      isSuperhost: true,
      isBookmarked: true,
      image:
        'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small', // 첫번째 이미지만
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
      homeId: 4,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 5,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 0,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 6,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 7,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 8,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 9,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 10,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
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
      homeId: 5,
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
  filterApplied: {
    refund: true,
    roomType: {
      house: false,
      private: false,
      shared: false,
    },
    price: {
      priceFrom: 12000,
      priceTo: 1000000,
    },
    instantBooking: false,
    bedroom: {
      bed: 0,
      room: 0,
      bathroom: 0,
    },
    convenience: false,
    convenienceList: {
      주방: false,
      샴푸: false,
      난방: true,
      에어컨: false,
      다리미: true,
      // ...
    },

    facilityList: {
      헬스장: true,
      수영장: false,
      // ...
    },

    hostLangList: {
      영어: false,
      프랑스어: false,
      // ...
    },
  },
  // 필터 추가하기에서 나오는 필터 조건
  filterCondition: {
    instantBooking: true,
    bedroom: true,
    convenience: true,
    convenienceList: ['주방', '샴푸', '난방', '에어컨', '다리미'],
    facilityList: ['헬스장', '수영장'],
    hostLangList: ['영어', '프랑스어'],
  },
  dataTotal: 190,
  // 2만원 단위로 숙박 개수
  priceArray: [
    0,
    0,
    0,
    0,
    0,
    54,
    13,
    45,
    76,
    43,
    21,
    32,
    12,
    43,
    8,
    21,
    24,
    23,
    45,
    7,
    78,
    77,
    56,
    54,
    63,
    22,
    45,
    77,
    1,
    3,
    44,
    54,
    65,
    22,
    37,
    48,
    73,
    24,
    54,
    45,
    7,
    78,
    77,
    56,
    54,
    63,
    22,
    45,
    1,
    3,
  ],
  // 1박 평균 가격
  averagePrice: 82094,
  mapState: true,
  mapZoom: 15,
  // map 범위 보낼때
  // mapSend: {
  //   from: { lat: 0, lng: 0 },
  //   to: { lat: 0, lng: 0 },
  // },
};

// reducer
const search = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MAP:
      return {
        ...state,
        mapState: true,
      };
    case HIDE_MAP:
      return {
        ...state,
        mapState: false,
      };
    case ZOOM_IN:
      return {
        ...state,
        mapZoom: state.mapZoom + 1,
      };
    case ZOOM_OUT:
      return {
        ...state,
        mapZoom: state.mapZoom - 1,
      };
    case SAVE_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
      };
    case APPLY_TOGGLE_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
      };
    case APPLY_COUNTER_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          bedroom: {
            ...state.filterApplied.bedroom,
            [action.name]: action.value,
          },
        },
      };
    case APPLY_CHECK_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.list]: {
            ...state.filterApplied[action.list],
            [action.name]: action.value,
          },
        },
      };
    case RESET_MODAL_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...setModalFilter(state.filterCondition),
        },
      };
    default:
      return state;
  }
};

export default search;
