import axios from 'axios';

export const getLocationAutoComplete = async userInput => {
  console.log(userInput);
  const { data } = await axios.get(`/back/autocomplete/${userInput}`);
  console.log('data: ', Object.values(data));
  return Object.values(data);
};
