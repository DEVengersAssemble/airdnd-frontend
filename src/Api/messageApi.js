import axios from 'axios';

export const fetchMessageData = async () => {
  const response = await axios.get(`/back/messages`);
  console.log('==========================', response);
  return response.data;
};
