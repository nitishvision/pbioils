import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import CustomHeader from '../components/CustomHeader';
import {COLOR} from '../config/AppStyling';

const WebViewScreen = ({route}) => {
  const {url, title} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={title} />
      <WebView
        source={{uri: url}}
        style={styles.webview}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
