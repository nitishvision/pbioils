import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import GuideCard from './GuideCard';
import Images from '../../config/Images';
import {Matrics, typography} from '../../config/AppStyling';

const GuideComponent = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <GuideCard
          width={Matrics.ms(200)}
          height={Matrics.ms(100)}
          icon={Images.EXHIBITOR_APPLICATION}
          title={'Exhibitor Application'}
          titleStyle={styles.orangeTitle}
        />
        <GuideCard
          width={Matrics.ms(200)}
          height={Matrics.ms(100)}
          icon={Images.PROGRAM_GUIDE}
          title={'2021 Program Guide'}
          titleStyle={styles.purpleTitle}
        />
      </View>
      <View style={styles.container}>
        <GuideCard
          width={Matrics.ms(200)}
          height={Matrics.ms(220)}
          overlayText={'About PBOIS'}
          backgroundImage={Images.PBOIS_ABOUT}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: Matrics.ms(16),
  },
  orangeTitle: {
    color: '#F2992A',
    textAlign: 'left',
    fontFamily: typography.fontFamily.Jost.Bold,
    fontSize: typography.fontSizes.fs16,
  },
  purpleTitle: {
    color: '#A56C8C',
    fontFamily: typography.fontFamily.Jost.Bold,
    fontSize: typography.fontSizes.fs16,
  },
});

export default GuideComponent;
