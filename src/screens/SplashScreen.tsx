// Login.js
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from '../component/Button';
import InputField from '../component/InputField';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {



    return (
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={5} style={styles.title}>
                ILPex
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        backgroundColor:'violet'
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        marginBottom: 40,
        color: '#ffffff',
    },
});

export default SplashScreen;
