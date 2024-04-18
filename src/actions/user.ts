import {BASE_URL} from '../utils/const/api';

export const login = async (username: string, password: string) => {
  const res = await fetch(`${BASE_URL}/account/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};
