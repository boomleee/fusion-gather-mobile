/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import {RouteProp} from '@react-navigation/native';
import {EventType} from '../../interfaces/event.interface';
import {getEventById, getImagesByEventId} from '../../actions/event';
import {ScrollView} from 'react-native-gesture-handler';

type RootStackParamList = {
  Event: {id: number};
};

type EventScreenRouteProp = RouteProp<RootStackParamList, 'Event'>;

type Props = {
  route: EventScreenRouteProp;
};

function Event({route}: Props) {
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
            <Text style={styles.name}>{event?.location}</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                // alignItems: 'center',
                marginTop: 8,
                paddingHorizontal: 8,
                paddingBottom: 2,

                alignContent: 'flex-start',
              }}>
              <Icon2 name="location" size={26} color={'#E36414'} />
            </View>
            <Text style={styles.description}>{event?.description}</Text>

            <View style={styles.divider} />
            {/* <View style={{gap: 12, flexDirection: 'column'}}>
              {utilities.map(ultility => (
                <Utility key={ultility.id} utility={ultility} />
              ))}
            </View> */}
          </View>
          {/* <View style={styles.container_map}>
            <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: roomDetail.event.coordinate.latitude,
                longitude: roomDetail.event.coordinate.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.05,
              }}>
              <Marker coordinate={roomDetail.event.coordinate}></Marker>
            </MapView>
          </View> */}
        </ScrollView>
      </View>

      {/* <View
        style={{
          position: 'absolute',
          height: 70,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderTopColor: '#5E5D5E',
          borderTopWidth: StyleSheet.hairlineWidth,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.footerText}>
            <Text style={styles.footerPrice}>
              VND {formatNumberWithCommas(price || '')}
            </Text>
            <Text style={{color: '#5E5D5E', fontSize: 12}}>month</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (userInfo) {
                navigation.navigate('PrepareContract', {
                  id: id,
                  overView: {
                    price: price,
                    image: images[0],
                    totalRating: ratingDetail.totalRating,
                    numberOfReviews: ratingDetail.ratings.length,
                    district: event.district,
                    province: event.city,
                    address: event.address,
                  },
                });
              } else {
                navigation.navigate('Login');
              }
            }}
            style={[
              {
                backgroundColor: '#E36414',
                height: 50,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              },
              {paddingRight: 20, paddingLeft: 20},
            ]}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'mon-b',
              }}>
              Prepare contract
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
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
    borderRadius: 10,
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
    width: '90%',
    fontSize: 20,
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
