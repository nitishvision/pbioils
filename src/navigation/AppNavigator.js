import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';
import PhotoGallery from '../screens/PhotoGallery';
import ContactUs from '../screens/ContactUs';
import SignUpMail from '../screens/SignUpMail';
import Location from '../screens/Location';
import Splash from '../splash';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Splash"
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#fff',
            width: '80%',
          },
        }}>
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Main" component={HomeScreen} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="PhotoGallery" component={PhotoGallery} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="SignUpMail" component={SignUpMail} />
        <Drawer.Screen name="Location" component={Location} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
