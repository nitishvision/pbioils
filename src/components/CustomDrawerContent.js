import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {COLOR, Matrics, typography} from '../config/AppStyling';

export default function CustomDrawerContent(props) {
  const {multiplePages} = useSelector(state => state.social);
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        style={{padding: 0, margin: 0}}
        contentContainerStyle={{padding: 0, margin: 0}}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hi...</Text>
          <Text style={styles.subHeaderText}>
            Permian Basin International Oil Show
          </Text>
        </View>

        <View style={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />

          {/* Collapsible Header */}
          {multiplePages?.length > 0 && (
            <TouchableOpacity
              onPress={() => setExpanded(!expanded)}
              style={styles.dropdownHeader}
              activeOpacity={0.8}>
              <Text style={styles.dropdownLabel}>More Pages</Text>
              <Text style={styles.dropdownArrow}>{expanded ? '▲' : '▼'}</Text>
            </TouchableOpacity>
          )}

          {/* Expanded Pages */}
          {expanded &&
            multiplePages
              .filter(page => {
                const url = page?.url?.trim();
                const name = page?.name?.trim();
                return !!url && !!name;
              })
              .map((page, index) => (
                <TouchableOpacity
                  key={`multi-${index}`}
                  onPress={() => {
                    props.navigation.navigate(page.name.trim(), {
                      url: page.url.trim(),
                      title: page.name.trim(),
                    });
                  }}
                  style={styles.subItem}>
                  <Text style={styles.subLabel}>{page.name.trim()}</Text>
                </TouchableOpacity>
              ))}
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
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: COLOR.LIGHT_GRAY,
  },
  dropdownLabel: {
    fontFamily: typography.fontFamily.Jost.Medium,
    fontSize: typography.fontSizes.fs16,
    color: COLOR.TEXT_DARK,
  },
  dropdownArrow: {
    fontSize: 16,
    color: '#777',
  },
  subItem: {
    paddingLeft: 40,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  subLabel: {
    fontFamily: typography.fontFamily.Jost.Medium,
    fontSize: typography.fontSizes.fs14,
    color: '#333',
  },
});
