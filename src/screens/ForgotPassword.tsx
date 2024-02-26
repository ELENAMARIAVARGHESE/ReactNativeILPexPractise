import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ButtonComponent from '../component/Button';
import InputField from '../component/InputField';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleForgotPress = (): void => {
    navigation.navigate('Reset Password',{});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={5} style={styles.title}>
        Forget Password?
      </Text>

      <Text numberOfLines={30} style={styles.description} >
        To initiate the password rest process,
      </Text>
      <Text numberOfLines={30} style={styles.description} >
        Kindly provide your email address 
      </Text>
      <Text numberOfLines={30} style={styles.description} >
        below
      </Text>

      <InputField label="Email" keyboardType="email-address" isPassword={false} value={''} onChangeText={function (text: string): void {
        throw new Error('Function not implemented.');
      } } />
      
      <ButtonComponent text="Submit" onPress={handleForgotPress} />
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
  descriptionView:{
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',

    
  },
});

export default ForgotPassword;
