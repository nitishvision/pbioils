import {View, Image, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Matrics} from './config/AppStyling';
import {useDispatch} from 'react-redux';
import {fetchSocialData} from './redux/slices/socialSlice';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        await dispatch(fetchSocialData()).unwrap();
        // Navigate to main app after data is loaded
        // navigation.replace('Main');
      } catch (err) {
        console.error('Failed to load data:', err);
        // Still navigate to main app even if there's an error
        navigation.replace('Main');
      }
    };

    loadData();
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image
        source={require('./assets/imgs/splash.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Matrics.screenWidth,
    height: Matrics.screenHeight,
  },
});

export default Splash;
