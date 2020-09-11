import axios from 'axios';

export const sendLogOutReq = async () => {
  const { data } = await axios.get('/back/signOut');
  console.log('sendLogOutReq: ', data);
  return data;
};
