// import { modals, prices, roomTypes } from '../Modules/search';
// import qs from 'qs';
// import _ from 'lodash';

// const all = [...modals, ...prices, ...roomTypes];
// const obj = name => {
//   switch (name) {
//     case 'refund':
//       return ['refund'];
//     case 'roomType':
//       return roomTypes;
//     case 'price':
//       return prices;
//     case 'modal':
//       return modals;
//     default:
//       return all;
//   }
// };

// export const updateQuery = (
//   filterApplied,
//   history,
//   queryObj,
//   name,
//   isDisabled,
// ) => {
//   if (isDisabled) {
//     const newObj = _.omit(queryObj, name);
//     history.replace(`/search?${qs.stringify(newObj)}`);
//   } else {
//     const filterArray = obj(name).filter(filter => filterApplied[filter]);
//   }
// };
