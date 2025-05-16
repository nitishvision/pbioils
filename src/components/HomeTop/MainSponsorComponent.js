import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR, Matrics, typography} from '../../config/AppStyling';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const MainSponsorComponent = () => {
  const {homeTitle, homeDescription} = useSelector(state => state.social);
  console.log('homeTitle', homeTitle);

  return (
    <LinearGradient
      colors={[COLOR.PRIMARY, COLOR.PRIMARY_LIGHT]}
      style={styles.container}>
      <Text style={styles.title}>{homeTitle}</Text>
      <Text style={styles.subTitle}>{homeDescription}</Text>
    </LinearGradient>
  );
};

export default MainSponsorComponent;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.PRIMARY,
    height: Matrics.screenHeight * 0.35,
    borderBottomLeftRadius: Matrics.ms(56),
    borderTopWidth: 1,
    borderTopColor: COLOR.WHITE,
    borderBottomRightRadius: Matrics.ms(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: typography.fontSizes.fs36,
    fontFamily: typography.fontFamily.NotoSans.Regular,
    color: COLOR.WHITE,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subTitle: {
    fontSize: typography.fontSizes.fs16,
    fontFamily: typography.fontFamily.NotoSans.Regular,
    color: COLOR.WHITE,
    textAlign: 'center',
  },
});
