/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {BoothType} from '../../interfaces/booth.interface';
import {getBoothById} from '../../actions/booth';
import {ScrollView} from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';

type RootStackParamList = {
  Booth: {id: number; imageURL: string};
};
type BoothScreenRouteProp = RouteProp<RootStackParamList, 'Booth'>;
type Props = {
  navigation: any;
  route: BoothScreenRouteProp;
};
const BoothPage = ({navigation, route}: Props) => {
  const {id, imageURL} = route.params;
  const [booth, setBooth] = useState<BoothType>();
  const [isLoading, setIsLoading] = useState(true);
  const {width} = useWindowDimensions();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rs = await getBoothById(id);
        setBooth(rs);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching follower count:', error);
      }
    };
    fetchData();
  }, []);
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
          <Image source={{uri: imageURL}} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{booth?.name}</Text>
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
                <Text style={styles.location}>LOCATION</Text>
              </Pressable>
            </View>
            <View style={styles.divider} />
            <Text style={{fontSize: 30, color: 'black'}}>Description</Text>
            <View>
              <HTML
                source={{html: booth?.description || ''}}
                baseStyle={{color: 'black'}}
                contentWidth={width}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BoothPage;

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
