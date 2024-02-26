import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';

const StackNav = createNativeStackNavigator();
export function AuthNavigation() {
    return (
        <StackNav.Navigator>
            <StackNav.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false, }} />
            <StackNav.Screen
                name="Forget Password"
                component={ForgotPassword}
                options={{ headerShown: false, }} />
            <StackNav.Screen
                name="Reset Password"
                component={ResetPassword}
                options={{ headerShown: false, }} />
        </StackNav.Navigator>
    );
}
