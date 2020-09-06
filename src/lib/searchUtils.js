import { modals, prices, roomTypes } from '../Modules/search';

const all = [...modals, ...prices, ...roomTypes];

export const updateQuery = (
  filterApplied,
  history,
  queryObj,
  filterName,
  isDisabled,
) => {
  // if (isDisabled) {
  //   history.replace(`/search${query.replace(filterQuery, '')}`);
  // } else {
  //   !query.includes(filterQuery) &&
  //     history.replace(`/search${query + filterQuery}`);
  // }
};
