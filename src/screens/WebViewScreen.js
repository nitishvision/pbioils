import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import CustomHeader from '../components/CustomHeader';
import {COLOR} from '../config/AppStyling';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';

const WebViewScreen = ({route}) => {
  const {url, title} = route.params;

  return (
    <DrawerSceneWrapper>
      <SafeAreaView style={styles.container}>
        <CustomHeader title={title} />
        <WebView
          source={{uri: url}}
          style={styles.webview}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </SafeAreaView>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
