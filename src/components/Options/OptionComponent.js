import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import OptionCard from './OptionCard';
import Images from '../../config/Images';
import {Matrics} from '../../config/AppStyling';

const options = [
  {
    label: 'Attendee Registration',
    icon: Images.ATTENDANCE_REGISTRATION,
    onPress: () => {},
  },
  {
    label: 'Exhibitor Listing',
    icon: Images.LIST,
    onPress: () => {},
  },
  {
    label: 'Show Location',
    icon: Images.LOCATION,
    onPress: () => {},
  },
  {
    label: 'Food Trucks',
    icon: Images.FOOD_TRUCK,
    onPress: () => {},
  },
  {
    label: 'Tech Cafe',
    icon: Images.TECH_CAFE,
    onPress: () => {},
  },
];

const OptionComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {options.map((option, idx) => (
          <OptionCard
            key={option.label}
            icon={option.icon}
            label={option.label}
            onPress={option.onPress}
            style={styles.card}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Matrics.ms(12),
  },
  scrollContent: {
    paddingHorizontal: Matrics.ms(8),
    alignItems: 'center',
  },
  card: {
    marginRight: Matrics.ms(8),
  },
});

export default OptionComponent;
