import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Matrics} from '../../config/AppStyling';

const SocailIconComponent = () => {
  const {socialLinks} = useSelector(state => state.social);

  const handleSocialLinkPress = async url => {
    try {
      const supported = await Linking.canOpenURL(url);
      console.log('supported', supported);

      await Linking.openURL(url);
    } catch (error) {
      console.log('Error opening URL: ', error);
    }
  };

  return (
    <View style={styles.container}>
      {socialLinks &&
        Object.entries(socialLinks).map(([key, social]) => (
          <TouchableOpacity
            key={key}
            onPress={() => handleSocialLinkPress(social.url)}
            style={styles.iconContainer}>
            <Image
              source={{uri: social.icon}}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: Matrics.vs(30),
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default SocailIconComponent;
