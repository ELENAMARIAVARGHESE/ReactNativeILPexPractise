import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ButtonComponent from '../component/Button';
import InputField from '../component/InputField';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../network/LoginApiHook';
import { setStringItem } from '../utils/Utils';
import Constants from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { userLogin } from '../context/userSlice';
import { userDetails } from '../context/userDetailsSlice';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch=useDispatch();

  const onPress = async (): Promise<void> => {
    try {
      if (!email || !password) {
        setErrorMessage('Please enter both email and password');
        return;
      }

      setErrorMessage('');

      const response = await loginUser({ email, password });
      

      if (response.success) {
        setStringItem(Constants.IS_LOGIN,'true');
        dispatch(userLogin(true));
        dispatch(userDetails({message:response.loginResp.message,token:response.loginResp.token,userid:response.loginResp.userid}))

        //navigation.navigate('Home', {});
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
        console.log(error);
      setErrorMessage('Error occurred while logging in. Please try again.');
    }
  };

  function ForgotPress(): void {
    navigation.navigate('Forget Password', {});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputField
        label="Email"
        keyboardType="email-address"
        isPassword={false}
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        label="Password"
        keyboardType="default"
        isPassword={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.forgetPassword}>Forgot password?</Text>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <ButtonComponent text="Login" onPress={onPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        marginBottom: 40,
        color: '#000000',
    },
    forgetPassword: {
        textDecorationLine: 'none',
        color: '#000000',
        marginTop: 10,
        marginBottom: 10,
    },
    errorMessage:{
      color:"red",
    }
});

export default Login;
