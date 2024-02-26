import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackNavigation} from '../src/navigation/AppNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from './context/userSlice';
import Constants from './utils/Constants';
import {getItem} from './utils/Utils';
import { AuthNavigation } from './navigation/AuthNavigation';
import Splashscreen from './screens/SplashScreen';

const Main = () => {
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const isLogin = await getItem(Constants.IS_LOGIN);

      if (isLogin === 'true') {
        dispatch(userLogin(true));
      } else {
        dispatch(userLogin(false));
      }
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? (
    <Splashscreen />
  ) : (
    <NavigationContainer>
      {isLoggedIn ? <HomeStackNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Main;
