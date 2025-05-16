import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {COLOR, typography, Matrics} from '../../config/AppStyling';

const GuideCard = ({
  width = Matrics.ms(140),
  height = Matrics.ms(180),
  backgroundImage,
  overlayText,
  overlayTextStyle,
  icon,
  iconStyle,
  title,
  titleStyle,
  cardStyle,
  children,
}) => {
  const CardContent = (
    <View style={[styles.content, {width, height}]}>
      {icon && (
        <Image
          source={icon}
          style={[styles.icon, iconStyle]}
          resizeMode="contain"
        />
      )}
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {children}
    </View>
  );

  if (backgroundImage) {
    return (
      <ImageBackground
        source={backgroundImage}
        style={[styles.card, {width, height}, cardStyle]}
        imageStyle={styles.imageBg}>
        {overlayText && (
          <View style={styles.overlayTextContainer}>
            <Text style={[styles.overlayText, overlayTextStyle]}>
              {overlayText}
            </Text>
          </View>
        )}
        {CardContent}
      </ImageBackground>
    );
  }

  return (
    <View style={[styles.card, {width, height}, cardStyle]}>{CardContent}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: Matrics.ms(20),
    overflow: 'hidden',
    backgroundColor: COLOR.WHITE,
    boxShadow: '0px 4px 16px rgba(0,0,0,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Matrics.ms(16),
  },
  imageBg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // transform: [{translateX: 50}],
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: Matrics.ms(16),

    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    width: Matrics.ms(24),
    height: Matrics.ms(24),
  },
  title: {
    fontFamily: typography.fontFamily.Jost.Medium,
    fontSize: typography.fontSizes.fs16,
    color: COLOR.BLACK,
    width: '80%',
  },
  overlayTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: Matrics.ms(8),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlayText: {
    color: COLOR.WHITE,
    fontFamily: typography.fontFamily.Jost.Bold,
    fontSize: typography.fontSizes.fs18,
    textAlign: 'center',
  },
});

export default GuideCard;
