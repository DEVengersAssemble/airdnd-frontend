import axios from 'axios';
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const testData = 'true';

export const sendSignUpReq = async payload => {
  // const { data } = await axios.post('/back/signUp', payload);
  sleep(1500);
  return testData;
};
