import {BASE_URL} from '../utils/const/api';

export const checkQR = async (userId: number, ticketId: number) => {
  const res = await fetch(`${BASE_URL}/qr-code/check`, {
    method: 'Get',
    body: JSON.stringify({
      id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};
