/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/const/colors';
import { TextInput } from 'react-native-gesture-handler';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={styles.headerText}>FusionGather</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
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
    height: 500,
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
    fontSize:24,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.backgroundColor,
  },
});
