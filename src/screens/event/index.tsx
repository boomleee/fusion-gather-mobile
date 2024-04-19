/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import {RouteProp} from '@react-navigation/native';
import {EventType} from '../../interfaces/event.interface';
import {getEventById, getImagesByEventId} from '../../actions/event';
import {ScrollView} from 'react-native-gesture-handler';
import BoothList from './Components/BoothList';

type RootStackParamList = {
  Event: {id: number};
};

type EventScreenRouteProp = RouteProp<RootStackParamList, 'Event'>;

type Props = {
  navigation: any;
  route: EventScreenRouteProp;
};

function Event({navigation, route}: Props) {
  const {id} = route.params;
  const [event, setEvent] = useState<EventType>();
  const [image, setIamge] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rs = await getEventById(id);
        const imageRes = await getImagesByEventId(id);
        setEvent(rs);
        setIamge(imageRes[0]?.url);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching follower count:', error);
      }
    };
    fetchData();
  });
  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0C0F14'} />
      <View style={{position: 'relative'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          scrollEventThrottle={16}>
          <Image source={{uri: image}} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{event?.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginTop: 8,
                paddingHorizontal: 8,
                paddingBottom: 2,
                alignContent: 'flex-start',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Map');
                }}>
                <Text style={styles.location}>{event?.location}</Text>
              </Pressable>
            </View>
            <View style={styles.divider} />
            <BoothList eventId={event?.id || 0}></BoothList>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 8,
  },

  infoContainer: {
    padding: 12,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'mon-sb',
    color: '#000',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  location: {
    width: '100%',
    fontSize: 15,
    fontFamily: 'mon-sb',
    color: '#000',
  },
  rooms: {
    fontSize: 14,
    color: '#5E5D5E',
    marginVertical: 4,
    fontFamily: 'mon',
  },
  ratings: {
    fontSize: 18,
    fontFamily: 'mon-sb',
    color: '#000',
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#5E5D5E',
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 12,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#5E5D5E',
    paddingHorizontal: 12,
  },
  hostView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
  },
  footerText: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerPrice: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E36414',
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  swiperArrow: {
    color: '#FFF',
    fontSize: 60,
    fontWeight: '300',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
    margin: 5,
  },
  paginationDotActive: {
    backgroundColor: '#FFF',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'mon',
    paddingHorizontal: 12,
    color: '#5E5D5E',
  },
  button_map: {
    position: 'absolute',
    top: 600,
    left: 140,
    zIndex: 100,
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 6,
    alignItems: 'center',
  },
  text_map: {
    color: 'white',
    fontWeight: 'bold',
  },
  container_map: {
    height: 300,
    padding: 8,
    borderRadius: 8,
  },
});

export default Event;
