import {BASE_URL} from '../utils/const/api';

export const getBoothByEventId = async (eventId: number) => {
  try {
    const res = await fetch(`${BASE_URL}/booth/event/${eventId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTcxMzI3NTQxMiwiZXhwIjoxNzEzMzExNDEyfQ.iuxTr0U-6bniA1u7nDDH7QR5tzwYB6NcyTsA9KRiF_o',
      },
    });

    const responseData = await res.json();

    return {status: res.status, data: responseData};
  } catch (error: any) {
    console.error('Error fetching booth data:', error);
    return {
      status: 500,
      error: error.message || 'An error occurred while fetching booth data',
    };
  }
};

export const getImagesByBoothId = async (boothId: number) => {
  try {
    const res = await fetch(`${BASE_URL}/image/booth/${boothId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

export const getBoothById = async (boothId: number) => {
  try {
    const res = await fetch(`${BASE_URL}/booth/${boothId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      console.error(`Get booth failed with status: ${res.status}`);
      return await res.json();
    }
    return res.json();
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const visitorBooth = async (userId: number, boothId: number) => {
  const res = await fetch(`${BASE_URL}/boothvisitor/${userId}/${boothId}`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res;
};

