/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/const/colors';
import {TextInput} from 'react-native-gesture-handler';
import {login} from '../../actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    const res = await login(username, password);
    if (res.statusCode === 404 || res.statusCode === 500) {
      Alert.alert('Your account is not available');
    }
    await AsyncStorage.setItem('userId', res.user.id.toString());
    navigation.navigate('ScanQR')
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={styles.headerText}>FusionGather</Text>
        <Text
          style={{
            marginVertical: 10,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 36,
            opacity: 0.8,
          }}>
          Log in
        </Text>
        <Text style={{marginVertical: 25, fontFamily: 'Roboto'}}>
          or enter your Credential
        </Text>

        <TextInput
          style={styles.input}
          value={username}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={[styles.loginButton, {backgroundColor: colors.hightlight}]}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    width: 300,
    height: 550,
    backgroundColor: colors.backgroundColor,
    borderRadius: 30,
    alignItems: 'center',
  },
  headerText: {
    color: colors.hightlight,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    paddingTop: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 10,
    fontSize: 24,
  },
  input: {
    width: '80%',
    height: 35,
    backgroundColor: '#fffffe',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: '#000000',
    marginHorizontal: 30,
  },
  loginButton: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffffe',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
    borderColor: '#000000',
    borderWidth: 2,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgottenPassword: {
    color: 'black',
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  dontHaveAccountText: {
    color: 'black',
    fontFamily: 'Roboto',
    opacity: 0.5,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signupText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
