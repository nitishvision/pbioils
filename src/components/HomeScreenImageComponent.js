import {View, Text, Image} from 'react-native';
import React from 'react';
import {Images} from '../config';
import {COLOR, Matrics, typography} from '../config/AppStyling';

const HomeScreenImageComponent = () => {
  return (
    <View>
      <Image
        source={Images.HOME_SCREEN}
        style={{
          width: Matrics.screenWidth,
          height: Matrics.screenHeight * 0.3,
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
