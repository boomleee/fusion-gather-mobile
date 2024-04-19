export interface BoothType {
  id: number;
  name: string;
  description: string;
  imageUrl: string[];
  latitude: number;
  longitude: number;
  eventId: {
    id: number;
    title: string;
    description: string;
    location: string;
    imageUrl: string[];
    startDateTime: string;
    endDateTime: string;
    price: string;
    lng: number;
    lat: number;
    isFree: boolean;
    isPublished: boolean;
  };
  vendorId: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
}
