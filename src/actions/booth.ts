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
