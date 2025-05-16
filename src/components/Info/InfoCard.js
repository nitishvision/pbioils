import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Matrics, typography} from '../../config/AppStyling';

const InfoCard = ({
  image,
  title,
  backgroundColor = '#FFF8E1',
  borderColor = '#FFD54F',
  titleColor = '#E6B800',
  style,
  imageStyle,
  titleStyle,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor,
          borderColor,
        },
        style,
      ]}>
      {image && (
        <Image
          source={image}
          style={[styles.image, imageStyle]}
          resizeMode="contain"
        />
      )}
      {title && (
        <Text style={[styles.title, {color: titleColor}, titleStyle]}>
          {title}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Matrics.ms(150),
    height: Matrics.ms(150),
    borderRadius: Matrics.ms(24),
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Matrics.ms(12),
    margin: Matrics.ms(8),
    boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
  },
  image: {
    width: Matrics.ms(40),
    height: Matrics.ms(40),
    marginBottom: Matrics.ms(12),
  },
  title: {
    fontFamily: typography.fontFamily.Jost.Medium,
    fontSize: typography.fontSizes.fs16,
    textAlign: 'center',
  },
});

export default InfoCard;
