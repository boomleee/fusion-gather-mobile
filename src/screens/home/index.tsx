import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Listing from '../../components/Listing';
import {EventType} from '../../interfaces/event.interface';
import {getAllEvent} from '../../actions/event';

const Home = ({navigation}: any) => {
  const [data, setData] = useState<EventType[]>();

  const fetchData = async () => {
    const res: EventType[] = await getAllEvent();
    setData(res);
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <GestureHandlerRootView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>FusionGather</Text>
        <Pressable onPress={() => navigation.navigate('ScanQR')}>
          <Image
            source={require('./../../assets/images/qr-code.png')}
            style={styles.headerImage}
          />
        </Pressable>
      </View>
      <View style={{marginTop: -2, zIndex: -1, position: 'relative'}}>
        <FlatList
          data={data}
          keyExtractor={(item: EventType) => item.title}
          renderItem={({item: dataEvent}: {item: EventType}) => (
            <Listing
              key={dataEvent.id}
              data={dataEvent}
              id={dataEvent.id}
              onPress={id => {
                navigation.navigate('Event', {
                  id,
                });
              }}
            />
          )}
          contentContainerStyle={{paddingBottom: 100}}
        />
      </View>
    </GestureHandlerRootView>
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

export default Home;
