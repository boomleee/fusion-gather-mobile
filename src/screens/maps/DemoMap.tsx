import {View, StyleSheet, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_KEY} from '../../utils/const/googleMapKey';
import {
  getCurrentLocation,
  locationPermission,
} from '../../utils/helper/helperFunction';
import {Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {EventType} from '../../interfaces/event.interface';
import {BoothType} from '../../interfaces/booth.interface';
interface Coordinates {
  latitude: number;
  longitude: number;
}

type MapStackParamList = {
  Event: {id: number; event: EventType; booths: BoothType[]};
};
type MapScreenRouteProp = RouteProp<MapStackParamList, 'Event'>;
type Props = {
  route: MapScreenRouteProp;
};

const DemoMap = ({route}: Props) => {
  const {id, event, booths} = route.params;
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = useState<Coordinates>({
    latitude: 15.968588,
    longitude: 108.260499,
  });
  useEffect(() => {
    setTimeout(() => {
      getLiveLocation();
    }, 1000);
  });

  const currentLocationIcon = require('./../../assets/images/current-location.png');
  const eventLocation = require('./../../assets/images/billboard.png');
  const boothLocation = require('./../../assets/images/booth.png');

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude} = await getCurrentLocation();
      console.log('get live location after 1 second');
      console.log(latitude, longitude);
      setLocation({latitude, longitude});
    }
  };

  return (
    <View style={styles.page}>
      <MapView
        ref={mapRef}
        zoomControlEnabled={true}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}>
          <View style={styles.iconContainer}>
            <Image source={currentLocationIcon} style={styles.icon} />
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: parseFloat(event.lat + ''),
            longitude: parseFloat(event.lng + ''),
          }}>
          <View style={styles.iconContainer}>
            <Image source={eventLocation} style={styles.icon} />
          </View>
        </Marker>
        {booths.length > 0 &&
          booths.map((booth, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(booth.latitude + ''),
                longitude: parseFloat(booth.longitude + ''),
              }}>
              <View style={styles.iconContainer}>
                <Image source={boothLocation} style={styles.icon} />
                <Text style={styles.boothName}>{booth.name}</Text>
              </View>
            </Marker>
          ))}
      </MapView>
    </View>
  );
};

export default DemoMap;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  boothName: {
    marginTop: 5,
    color: '#ff8e3c',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
