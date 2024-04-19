/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getBoothByEventId} from '../../../actions/booth';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import Listing from '../../../components/Listing';
import {BoothType} from '../../../interfaces/booth.interface';
import BoothItemList from './BoothItem';

type Props = {
  eventId: number;
  navigation: any;
};
const BoothList = ({eventId: eventId, navigation: navigation}: Props) => {
  const [booths, setBooths] = useState<BoothType[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBoothByEventId(eventId);
        const data: BoothType[] = response.data;
        if (response.data) {
          setBooths(data);
        }
      } catch (error) {
        console.error('Error fetching booth data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30, color: 'black'}}>BoothList</Text>
      <GestureHandlerRootView style={styles.screenContainer}>
        <View style={{marginTop: -2, zIndex: -1, position: 'relative'}}>
          <FlatList
            data={booths}
            keyExtractor={(item: BoothType) => item.id.toString()}
            renderItem={({item: booth}: {item: BoothType}) => (
              <BoothItemList
                key={booth.id}
                data={booth}
                id={booth.id}
                onPress={(id, imageURL) => {
                  navigation.navigate('Booth', {
                    id,
                    imageURL,
                  });
                }}
              />
            )}
            contentContainerStyle={{paddingBottom: 100}}
          />
        </View>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 40,
    width: '100%',
    backgroundColor: '#ff8e3c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerIcon: {
    fontSize: 24,
    color: 'white',
  },
  headerImage: {
    width: 24,
    height: 24,
  },
  mapStyle: {
    width: 400,
    height: 100,
  },
  button_map: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -50,
    zIndex: 10,
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 6,
    alignItems: 'center',
    width: 100,
  },
  text_map: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BoothList;
