import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {checkQR} from '../../actions/qr';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScanQR = ({navigation}: any) => {
  const [info, setInfo] = useState('SCAN QR CODE');
  const handleScan = async (e: string) => {
    const jsonObject = JSON.parse(e);
    const eventId = jsonObject.eventId;
    const boothId = jsonObject.boothId;
    if (eventId) {
      const id = parseInt(eventId, 10);
      navigation.navigate('Event', {
        id,
      });
    }
    if (boothId) {
      const id = parseInt(boothId, 10);
      navigation.navigate('Booth', {
        id,
        imageUrl: '',
      });
    }
    const ticketId = jsonObject.ticketId;
    const userId = await AsyncStorage.getItem('userId');
    if (userId) {
      const res = await checkQR(parseInt(userId, 10), parseInt(ticketId, 10));
      if (res.status !== 200) {
        setInfo('INVALID QR CODE');
      } else {
        Alert.alert('Valid Ticket');
      }
    }
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={({data}) => handleScan(data)}
        topContent={
          <View style={styles.centerText}>
            <Text style={styles.textBold}>{info}</Text>
          </View>
        }
        showMarker={true}
        reactivate={true}
        reactivateTimeout={500}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  scannerContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  camera: {
    width: '50%',
    height: '50%',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanQR;
