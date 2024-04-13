import {BASE_URL} from '../utils/const/api';

export const getAllEvent = async () => {
  try {
    const res = await fetch(`${BASE_URL}/event`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      console.error(`Request failed with status: ${res.status}`);
      return await res.json();
    }
    return res.json();
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const getImagesByEventId = async (eventId: number) => {
  try {
    const res = await fetch(`${BASE_URL}/image/event/${eventId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTcxMjk5MzU0NCwiZXhwIjoxNzEzMDI5NTQ0fQ.jVW1QrIsv69dyj79FfjkZ8c4-XYuWCdCu_94IKjvBUY',
      },
    });
    if (!res.ok) {
      console.error(`Request failed with status: ${res.status}`);
      return await res.json();
    }
    return await res.json();
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const getEventById = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/event/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTcxMjk5MzU0NCwiZXhwIjoxNzEzMDI5NTQ0fQ.jVW1QrIsv69dyj79FfjkZ8c4-XYuWCdCu_94IKjvBUY',
      },
    });
    if (!res.ok) {
      console.error(`Request failed with status: ${res.status}`);
      return await res.json();
    }
    return res.json();
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
