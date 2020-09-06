import axios from 'axios';

export const sendSignUpReq = async payload => {
  const { data } = await axios.post('/back/signUp', payload);
  return data;
};
