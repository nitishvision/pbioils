import React, {useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {Images} from '../config';
import {COLOR, Matrics, typography} from '../config/AppStyling';

const HomeScreenImageComponent = () => {
  const {homeImage} = useSelector(state => state.social);

  return (
    <View>
      <Image
        source={{uri: homeImage}}
        style={{
          width: Matrics.screenWidth,
          height: Matrics.screenHeight * 0.32,
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          paddingHorizontal: Matrics.s(16),
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: typography.fontSizes.fs22,
              fontFamily: typography.fontFamily.NotoSans.Bold,
              color: COLOR.PRIMARY,
            }}>
            Sponsored by
          </Text>
        </View>

        <Image
          source={Images.AMTECH_LOGO}
          style={{
            width: Matrics.screenWidth,
            height: Matrics.screenHeight * 0.1,
            resizeMode: 'contain',
            marginTop: Matrics.vs(10),
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreenImageComponent;
