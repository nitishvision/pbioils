import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import {Images} from '../config';
import {COLOR, Matrics, typography} from '../config/AppStyling';
import {useNavigation} from '@react-navigation/native';

const HomeScreenImageComponent = () => {
  const navigation = useNavigation();
  const {homeImage, sponser_details} = useSelector(state => state.social);
  const [amtechImageError, setAmtechImageError] = useState(false);

  const handleSponsorPress = () => {
    if (sponser_details?.sponser_link) {
      navigation.navigate('Sponsor', {
        url: sponser_details.sponser_link,
        title: 'Sponsored Content',
      });
    }
  };

  return (
    <View>
      {/* Top Image from API (banner or main image) */}
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

        {/* ✅ Sponsor logo with fallback and link */}
        <TouchableOpacity onPress={handleSponsorPress}>
          <Image
            source={
              amtechImageError || !sponser_details?.sponser_logo
                ? Images.AMTECH_LOGO // Fallback local image
                : {uri: sponser_details?.sponser_logo} // API image
            }
            onError={() => setAmtechImageError(true)}
            style={{
              width: Matrics.screenWidth,
              height: Matrics.screenHeight * 0.1,
              resizeMode: 'contain',
              marginTop: Matrics.vs(10),
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreenImageComponent;
