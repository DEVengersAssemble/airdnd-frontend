import axios from 'axios';

export const fetchMessageData = async () => {
  const response = await axios.get(`/back/messages`);
  console.log('==========================', response);
  return response.data;
};

export const patchMessageFilter = async payload =>
  await axios.patch(`/back/message/${payload.id}`, payload);
