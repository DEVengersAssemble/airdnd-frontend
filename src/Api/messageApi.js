import axios from 'axios';

export const fetchMessagesData = async ({ filter }) => {
  const response = await axios.get(`/back/guest/inbox?filter=${filter}`);
  console.log('Message By Filter==================', response);
  return response.data;
};

export const patchMessageFilter = async payload => {
  console.log('patch payload=================', payload);
  const response = await axios.patch(
    `/back/guest/inbox/${payload.id}?filter=${payload.filter}`,
    payload,
  );
  console.log('patch filter==================', response);
  return response.data;
};
