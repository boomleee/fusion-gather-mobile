/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/const/colors';
import {TextInput} from 'react-native-gesture-handler';

const Login = () => {
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
        <TouchableOpacity style={styles.loginButton}>
          <Image
            source={require('../../utils/images/googleIcon.png')}
            style={{
              width: 24,
              height: 24,
              marginRight: 10,
            }}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={{marginVertical: 25, fontFamily: 'Roboto'}}>
          or enter your Credential
        </Text>

        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.loginButton, {backgroundColor: colors.hightlight}]}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgottenPassword}>Forgotten password?</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.dontHaveAccountText}>
            Don’t have an account?{' '}
          </Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
