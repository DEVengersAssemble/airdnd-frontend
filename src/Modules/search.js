import * as api from '../Api/searchApi';
import { fetchDataThunk, reducerUtils } from '../lib/asyncUtils';
import _ from 'lodash';

// action type
const FETCH_DATA = 'search/FETCH_DATA';
const FETCH_DATA_SUCCESS = 'search/FETCH_DATA_SUCCESS';
const FETCH_DATA_ERROR = 'search/FETCH_DATA_ERROR';
const GET_SEARCH_FORM = 'search/GET_SEARCH_FORM';

const HOVER_HOME = 'search/HOVER_HOME';
const BLUR_HOME = 'search/BLUR_HOME';
const CHANGE_HEART = 'search/CHANGE_HEART';

const OPEN_HEADER = 'search/OPEN_HEADER';
const CLOSE_HEADER = 'search/CLOSE_HEADER';
const SET_DATE_HEADER = 'search/SET_DATE_HEADER';

const OPEN_MAP = 'search/OPEN_MAP';
const CLOSE_MAP = 'search/CLOSE_MAP';
const SHOW_MAP = 'search/SHOW_MAP';
const HIDE_MAP = 'search/HIDE_MAP';
const ZOOM_IN = 'search/ZOOM_IN';
const ZOOM_OUT = 'search/ZOOM_OUT';
const ZOOM_SET = 'search/ZOOM_SET';
const OPEN_MARKER = 'search/OPEN_MARKER';
const CLOSE_MARKER = 'search/CLOSE_MARKER';

const OPEN_POPUP = 'search/OPEN_POPUP';
const CLOSE_POPUP = 'search/CLOSE_POPUP';
const HANDLE_RANGE = 'search/HANDLE_RANGE';
const SET_FILTER = 'search/SET_FILTER';
const RESET_FILTER = 'search/RESET_FILTER';
const UNSAVE_FILTER = 'search/UNSAVE_FILTER';

const APPLY_TOGGLE_FILTER = 'search/APPLY_TOGGLE_FILTER';
const APPLY_COUNTER_FILTER = 'search/APPLY_COUNTER_FILTER';
const APPLY_CHECK_FILTER = 'search/APPLY_CHECK_FILTER';
const SET_MODAL_FILTER = 'search/SET_MODAL_FILTER';
const RESET_MODAL_FILTER = 'search/RESET_MODAL/FILTER';

// action creator
export const fetchData = fetchDataThunk(FETCH_DATA, api.fetchSearchedData);
export const getSearchForm = searchForm => ({
  type: GET_SEARCH_FORM,
  searchForm,
});

export const hoverHome = homeId => ({ type: HOVER_HOME, homeId });
export const blurHome = () => ({ type: BLUR_HOME });
export const changeHeart = homeId => ({ type: CHANGE_HEART, homeId });

export const openHeader = () => ({ type: OPEN_HEADER });
export const closeHeader = () => ({ type: CLOSE_HEADER });
export const setDateHeader = () => ({ type: SET_DATE_HEADER });

export const openMap = () => ({ type: OPEN_MAP });
export const closeMap = () => ({ type: CLOSE_MAP });
export const showMap = () => ({ type: SHOW_MAP });
export const hideMap = () => ({ type: HIDE_MAP });
export const zoomIn = () => ({ type: ZOOM_IN });
export const zoomOut = () => ({ type: ZOOM_OUT });
export const zoomSet = zoom => ({ type: ZOOM_SET, zoom });
export const openMarker = id => ({ type: OPEN_MARKER, id });
export const closeMarker = () => ({ type: CLOSE_MARKER });

export const openPopup = name => ({ type: OPEN_POPUP, name });
export const closePopup = (name, isApplied) => ({
  type: CLOSE_POPUP,
  name,
  isApplied,
});
export const handleRange = handler => ({ type: HANDLE_RANGE, handler });
export const setFilter = (name, value) => ({ type: SET_FILTER, name, value });
export const resetFilter = name => ({ type: RESET_FILTER, name });
export const unsaveFilter = name => ({ type: UNSAVE_FILTER, name });

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
export const setModalFilter = modalFilter => ({
  type: SET_MODAL_FILTER,
  modalFilter,
});
export const resetModalFilter = filterCondition => ({
  type: RESET_MODAL_FILTER,
  filterCondition,
});
export const modalFilterInit = filterCondition => {
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
const popupInit = {
  refund: false,
  roomType: false,
  price: false,
  modal: false,
};

const filterInit = {
  refund: false,
  roomTypeHouse: false,
  roomTypePrivate: false,
  roomTypeShared: false,
  priceMin: 12000,
  priceMax: 1000000,
  instantBooking: false,
  bedroomBed: 0,
  bedroomRoom: 0,
  bedroomBath: 0,
  convenience: false,
  convenienceList: [],
  facilityList: [],
  hostLangList: [],
};

const initialState = {
  loading: false,
  error: null,
  data: {
    homes: [
      {
        homeId: 1,
        isSuperhost: true,
        isBookmarked: true,
        imageArray: ['https://a0.muscache.com/im/pictures'],
        imageCount: 6, // 이미지 개수
        subTitle: 'MongMong-Toto의 호텔 객실',
        title: 'Pia Resort Hotel Corner Studio Room',
        feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개',
        rating: 4.25,
        reviewCount: 89,
        price: 54324,
        location: { lat: 37.650333, lng: 127.072783 },
      },
    ],
    recentHomes: [],
    filterCondition: {
      instantBooking: true,
      bedroom: true,
      convenience: true,
      convenienceList: [],
      facilityList: [],
      hostLangList: [],
    },
    mapCenter: { lat: 37.650333, lng: 127.072783 },
    dataTotal: 783,
    averagePrice: 3432479,
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
  },
  searchForm: {
    location: '서울',
    checkIn: '2020.09.02',
    checkOut: '2020.09.05',
    dateDiff: '',
    guests: '0',
  },
  // ...reducerUtils.initial(),
  // searchForm: {},
  headerState: false,
  viewState: 'result',
  mapState: true,
  mapZoom: 10,
  markerState: null,
  hoveredHome: null,
  popupState: popupInit,
  filterPrevState: {},
  popupApplied: { ...popupInit },
  filterApplied: { ...filterInit },
};

const roomTypes = ['roomTypeHouse', 'roomTypePrivate', 'roomTypeShared'];
const prices = ['priceMin', 'priceMax'];

const getFilterGroup = (filterName, state) => {
  const obj = state ? state.filterApplied : filterInit;
  switch (filterName) {
    case 'roomType':
      return _.pick(obj, roomTypes);
    case 'price':
      return _.pick(obj, prices);
    case 'modal':
      return _.omit(obj, [...roomTypes, ...prices]);
    default:
      return { [filterName]: false };
  }
};

// reducer
const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        ...reducerUtils.loading(),
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...reducerUtils.success(action.payload),
        filterApplied: {
          ...state.filterApplied,
          ...modalFilterInit(action.payload.filterCondition),
        },
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        ...reducerUtils.error(action.payload),
      };
    case GET_SEARCH_FORM:
      return {
        ...state,
        searchForm: action.searchForm,
      };
    case HOVER_HOME:
      return {
        ...state,
        hoveredHome: action.homeId,
      };
    case BLUR_HOME:
      return {
        ...state,
        hoveredHome: null,
      };
    case CHANGE_HEART:
      return {
        ...state,
        data: {
          ...state.data,
          homes: state.data.homes.map(home =>
            home.homeId === action.homeId
              ? { ...home, isBookmarked: !home.isBookmarked }
              : home,
          ),
          recentHomes: state.data.recentHomes.map(home =>
            home.homeId === action.homeId
              ? { ...home, isBookmarked: !home.isBookmarked }
              : home,
          ),
        },
      };
    case OPEN_HEADER:
      return {
        ...state,
        headerState: true,
      };
    case CLOSE_HEADER:
      return {
        ...state,
        headerState: false,
      };
    case SET_DATE_HEADER:
      return {
        ...state,
        popupState: popupInit,
        headerState: true,
      };
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
    case OPEN_MAP:
      return {
        ...state,
        viewState: 'map',
      };
    case CLOSE_MAP:
      return {
        ...state,
        viewState: 'result',
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
    case ZOOM_SET:
      return {
        ...state,
        mapZoom: action.zoom,
      };
    case OPEN_MARKER:
      return {
        ...state,
        markerState: action.id,
      };
    case CLOSE_MARKER:
      return {
        ...state,
        markerState: null,
      };
    case OPEN_POPUP:
      return {
        ...state,
        popupState: {
          ...state.popupState,
          [action.name]: true,
        },
        filterPrevState: getFilterGroup(action.name, state),
      };
    case CLOSE_POPUP:
      return {
        ...state,
        popupState: {
          ...state.popupState,
          [action.name]: false,
        },
        popupApplied: {
          ...state.popupApplied,
          [action.name]: action.isApplied,
        },
        filterPrevState: {},
      };
    case SET_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
      };
    case RESET_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...getFilterGroup(action.name),
        },
      };
    case UNSAVE_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...state.filterPrevState,
        },
        popupState: {
          ...state.popupState,
          [action.name]: false,
        },
        filterPrevState: {},
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
    case SET_MODAL_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...action.modalFilter,
        },
        popup: popupInit,
      };
    case RESET_MODAL_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...modalFilterInit(state.data.filterCondition),
        },
      };
    default:
      return state;
  }
};

export default search;
