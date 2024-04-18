import {View, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_KEY} from '../../utils/const/googleMapKey';
import {
  getCurrentLocation,
  locationPermission,
} from '../../utils/helper/helperFunction';
interface Coordinates {
  latitude: number;
  longitude: number;
}

const DemoMap = () => {
  const mapRef = useRef<MapView>(null);

  // const [state, setState] = useState<{
  //   curLoc: Coordinates;
  //   destinationCords: Coordinates;
  //   isLoading: boolean;
  //   coordinate: AnimatedRegion;
  // }>({
  //   curLoc: {
  //     latitude: 0,
  //     longitude: 0,
  //   },
  //   destinationCords: {
  //     latitude: 0,
  //     longitude: 0,
  //   },
  //   isLoading: false,
  //   coordinate: new AnimatedRegion({
  //     latitude: 0,
  //     longitude: 0,
  //   }),
  // });
  const [location, setLocation] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    setTimeout(() => {
      getLiveLocation();
    }, 4000);
  });

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude} = await getCurrentLocation();
      console.log('get live location after 4 second');
      console.log(latitude, longitude);
      setLocation({latitude, longitude});

      // animate(latitude, longitude);
      // setState({
      //   ...state,
      //   curLoc: {latitude, longitude},
      //   coordinate: new AnimatedRegion({
      //     latitude: latitude,
      //     longitude: longitude,
      //   }),
      // });
    }
  };

  // const animate = (latitude: number, longitude: number) => {
  //   const newCoordinate: Coordinates = {latitude, longitude};
  //   if (markerRef.current) {
  //     markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
  //   }
  // };

  return (
    <View style={styles.page}>
      <MapView
        ref={mapRef}
        zoomControlEnabled={true}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
        <MapViewDirections
          origin={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          destination={{
            latitude: 37.78825,
            longitude: -122.4322,
          }}
          apikey={GOOGLE_MAP_KEY}
          strokeWidth={3}
          strokeColor="red"
        />
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
});
