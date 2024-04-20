import {BASE_URL} from '../utils/const/api';

export const checkQR = async (userId: number, ticketId: number) => {
  const res = await fetch(`${BASE_URL}/qr-code/check/${userId}/${ticketId}`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res;
};
