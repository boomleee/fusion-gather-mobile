export interface EventType {
  id: number;
  title: string;
  description: string;
  location: string;
  imageUrl: string[];
  category: string;
  startDateTime: string;
  endDateTime: string;
  price: string;
  lng: number;
  lat: number;
  isFree: boolean;
  author: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    phoneNumber: string;
  };
  isPublished: boolean;
  url: string;
}
