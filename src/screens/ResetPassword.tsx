import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ButtonComponent from '../component/Button';
import InputField from '../component/InputField';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
    const navigation = useNavigation();

    const handleLoginPress = (): void => {
        navigation.navigate('Login', {});
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={5} style={styles.title}>
                Reset Password
            </Text>
            <InputField label="Password" keyboardType="default" isPassword={true} />
            <InputField label="Confirm Password" keyboardType="default" isPassword={true} />
            <ButtonComponent text="Save" onPress={handleLoginPress} />
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
    descriptionView: {
        marginTop: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',


    },
});

export default ResetPassword;
