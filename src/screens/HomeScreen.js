import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useCallback} from 'react';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';
import CustomHeader from '../components/CustomHeader';
import PullToRefreshWrapper from '../components/PullToRefreshWrapper';
import {typography, COLOR, Matrics} from '../config/AppStyling';
import OptionCard from '../components/Options/OptionCard';
import {Images} from '../config';
import OptionComponent from '../components/Options/OptionComponent';
import InfoCard from '../components/Info/InfoCard';
import InfoComponent from '../components/Info/InfoComponent';
import MainSponsorComponent from '../components/HomeTop/MainSponsorComponent';
import GuideComponent from '../components/GuideOptions/GuideComponent';
import HomeScreenImageComponent from '../components/HomeScreenImageComponent';
import SocailIconComponent from '../components/HomeTop/SocailIconComponent';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Refresh error:', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <DrawerSceneWrapper>
      <CustomHeader />
      <PullToRefreshWrapper
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={styles.contentContainer}>
        <ScrollView>
          <MainSponsorComponent />
          <HomeScreenImageComponent />
          <SocailIconComponent />
        </ScrollView>
      </PullToRefreshWrapper>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: Matrics.ms(16),
  },
  contentContainer: {
    flexGrow: 1,
  },
  title: {
    fontFamily: typography.fontFamily.Jost.ExtraBold,
    fontSize: typography.fontSizes.fs18,
    color: COLOR.BLACK,
    textAlign: 'center',
  },
});

export default HomeScreen;
