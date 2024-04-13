/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {EventType} from '../interfaces/event.interface';
import {getImagesByEventId} from '../actions/event';

interface ListingProps {
  data: EventType;
  id: number;
  onPress: (id: number) => void;
}

const Listing = ({data, onPress, id}: ListingProps) => {
  const [eventImage, setEventImage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const image = await getImagesByEventId(data?.id);
        setEventImage(image[0]?.url);
      } catch (error) {
        console.error('Error fetching follower count:', error);
      }
    };
    fetchData();
  });
  return (
    <Pressable onPress={() => onPress(id)} style={{flex: 1}}>
      <View style={styles.listing}>
        <Image source={{uri: eventImage}} style={styles.image} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 2,
            marginTop: 8,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'mon-sb',
              color: '#000',
              fontWeight: '700',
            }}>
            {data.title}, {data.title}
          </Text>
          {/* {data.avgRate ? (
            <View style={{flexDirection: 'row', gap: 4}}>
              <Icon name="star" size={16} color="#000" />
              <Text
                style={{
                  fontFamily: 'mon-sb',
                  color: '#000',
                  fontWeight: '700',
                }}>
                {data.avgRate}
              </Text>
            </View>
          ) : (
            <Text
              style={{
                fontFamily: 'mon-sb',
                color: '#000',
                fontWeight: '700',
              }}></Text>
          )} */}
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 2,
          }}>
          {data.utilities?.map((utilities, index) => (
            <View
              key={index}
              style={{
                padding: 3,
                borderRadius: 10,
                backgroundColor: '#D9D9D9',
                width: 24,
                height: 24,
              }}>
              <Image
                source={{uri: utilities.icon}}
                style={{
                  padding: 8,
                }}
              />
            </View>
          ))}
        </View>

        <View style={{flexDirection: 'row', gap: 4}}>
          <Text
            style={{
              fontFamily: 'mon-sb',
              color: '#000',
              fontWeight: '700',
              fontSize: 16,
            }}>
            VND {formatNumberWithCommas(data.price || '')}
          </Text>
          <Text style={{fontFamily: 'mon', color: '#000'}}>/month</Text>
        </View> */}
      </View>
    </Pressable>
  );
};

export default Listing;

const styles = StyleSheet.create({
  listing: {
    paddingHorizontal: 24,
    marginVertical: 20,
    zIndex: 100,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 8,
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
});
