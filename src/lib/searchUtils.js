export const updateQuery = (history, isDisabled, query, filterQuery) => {
  if (isDisabled) {
    history.replace(`/search${query.replace(filterQuery, '')}`);
  } else {
    !query.includes(filterQuery) &&
      history.replace(`/search${query + filterQuery}`);
  }
};
