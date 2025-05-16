import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR, Matrics, typography} from '../config/AppStyling';

export default function CustomDrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        style={{padding: 0, margin: 0}}
        contentContainerStyle={{padding: 0, margin: 0, flex: 1}}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hi...</Text>
          <Text style={styles.subHeaderText}>
            Permian Basin International Oil Show
          </Text>
        </View>
        <View style={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  headerContainer: {
    marginLeft: -20,
    marginRight: -20,
    width: 'auto',
    minWidth: '100%',
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
    height: 120,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingHorizontal: Matrics.s(15),
  },
  headerText: {
    fontFamily: typography.fontFamily.Jost.Bold,
    fontSize: typography.fontSizes.fs24,
    color: COLOR.TEXT_DARK,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  subHeaderText: {
    fontFamily: typography.fontFamily.Jost.Regular,
    fontSize: typography.fontSizes.fs14,
    color: COLOR.TEXT_DARK,
    paddingHorizontal: 20,
  },
  drawerItemsContainer: {
    flex: 1,
    paddingTop: 10,
  },
});
