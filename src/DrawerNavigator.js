import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import CustomDrawerContent from './components/CustomDrawerContent';
import {COLOR, typography} from './config/AppStyling';
import {Image} from 'react-native';
import WebViewScreen from './screens/WebViewScreen';
import HomeScreen from './screens/HomeScreen';
import {Images} from './config';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const {contentPages} = useSelector(state => state.social);

  const renderDrawerScreens = () => {
    if (!contentPages || Object.keys(contentPages).length === 0) {
      return null;
    }

    return Object.entries(contentPages).map(([key, page]) => {
      if (!page.status) {
        return null;
      }
      console.log('page', page);

      return (
        <Drawer.Screen
          key={key}
          name={page.title}
          component={WebViewScreen}
          initialParams={{
            url: page.url,
            title: page.title,
          }}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <Image
                source={{uri: page.icon}}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
            ),
          }}
        />
      );
    });
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#F8F8F8',
          width: '80%',
        },
        drawerType: 'front',
        overlayColor: 'transparent',
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveTintColor: COLOR.TEXT_DARK,
        drawerInactiveTintColor: '#333333',
        drawerItemStyle: {
          borderRadius: 0,
          width: '100%',
          marginVertical: 0,
          paddingVertical: 5,
          borderBottomWidth: 1,
          borderBottomColor: COLOR.LIGHT_GRAY,
        },
        drawerLabelStyle: {
          fontFamily: typography.fontFamily.Jost.Regular,
          fontSize: typography.fontSizes.fs16,
        },
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Image
              source={Images.HOME_ICON}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
      {renderDrawerScreens()}
    </Drawer.Navigator>
  );
}
