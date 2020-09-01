import axios from 'axios';

export const getLocationAutoComplete = async value => {
  const { data } = await axios.get(`/back/autocomplete/json/${value}`);
  return Object.values(data);
};
