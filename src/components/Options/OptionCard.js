import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR, typography, Matrics} from '../../config/AppStyling';

const OptionCard = ({icon, label, onPress, style, labelLines = 2}) => {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text
        style={styles.label}
        numberOfLines={labelLines}
        ellipsizeMode="tail">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Matrics.ms(120),
    height: Matrics.ms(200),
    backgroundColor: COLOR.WHITE,
    borderRadius: Matrics.ms(32),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    margin: Matrics.ms(8),
  },
  icon: {
    width: Matrics.ms(36),
    height: Matrics.ms(36),
    marginBottom: Matrics.ms(16),
  },
  label: {
    fontFamily: typography.fontFamily.Jost.Medium,
    fontSize: typography.fontSizes.fs16,
    color: COLOR.BLACK,
    textAlign: 'center',
    lineHeight: Matrics.ms(22),
    paddingHorizontal: Matrics.ms(8),
  },
});

export default OptionCard;
