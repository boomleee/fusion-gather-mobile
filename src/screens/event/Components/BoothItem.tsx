/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BoothType} from '../../../interfaces/booth.interface';
import {getImagesByBoothId} from '../../../actions/booth';

interface ItemProps {
  data: BoothType;
  id: number;
  onPress: (id: number, imageURL: string) => void;
}
const BoothItemList = ({data, onPress, id}: ItemProps) => {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const image = await getImagesByBoothId(data?.id);
        setImage(image[0]?.url);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching follower count:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <Pressable onPress={() => onPress(id, image || '')} style={{flex: 1}}>
      <View style={styles.listing}>
        {isLoading ? (
          <View style={styles.image}>
            <Text>Loading</Text>
          </View>
        ) : (
          <Image source={{uri: image}} style={styles.image} />
        )}
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
            {data.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
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

export default BoothItemList;
