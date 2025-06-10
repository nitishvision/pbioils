import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Images} from '../config';
import {Matrics, COLOR, typography} from '../config/AppStyling';

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={openDrawer} style={styles.drawerButton}>
            <Image
              source={Images.SIDEMENU}
              resizeMode={'contain'}
              style={styles.drawerIconStyle}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{route.name}</Text>
          <View style={styles.rightPlaceholder} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLOR.PRIMARY,
  },
  safeArea: {
    backgroundColor: COLOR.PRIMARY,
  },
  headerContainer: {
    height: Platform.OS === 'android' ? Matrics.ms(75) : Matrics.s(45),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.PRIMARY,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  drawerButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIconStyle: {
    tintColor: COLOR.WHITE,
    width: Matrics.scale(15),
    height: Matrics.vs(15),
  },
  headerTitle: {
    fontFamily: typography.fontFamily.Jost.Bold,
    color: COLOR.WHITE,
    fontSize: typography.fontSizes.fs18,
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  rightPlaceholder: {
    width: 50,
  },
});

export default CustomHeader;
