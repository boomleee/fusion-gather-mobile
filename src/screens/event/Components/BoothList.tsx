/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getBoothByEventId} from '../../../actions/booth';

type BoothType = {
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
};
type Props = {
  eventId: number;
};
const BoothList = ({eventId: eventId}: Props) => {
  const [booths, setBooths] = useState<BoothType[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBoothByEventId(eventId);
        const data: BoothType[] = response.data;
        setBooths(data);
      } catch (error) {
        console.error('Error fetching booth data:', error);
      }
    };

    fetchData();
  });
  const BoothItem = ({item}: {item: BoothType}) => <Text>{item.name}</Text>;
  return (
    <View>
      <Text style={{fontSize: 30}}>BoothList</Text>
      {booths?.map(booth => (
        <BoothItem key={booth.id} item={booth} />
      ))}
    </View>
  );
};

export default BoothList;
