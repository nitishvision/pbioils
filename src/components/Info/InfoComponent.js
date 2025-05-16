import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import InfoCard from './InfoCard';
import Images from '../../config/Images';
import {Matrics} from '../../config/AppStyling';

const infoCards = [
  {
    title: 'Sponsors',
    image: Images.SPONSOR || require('../../assets/icon/sponsor.png'),
    backgroundColor: '#FFF8E1',
    borderColor: '#FFD54F',
    titleColor: '#E6B800',
  },
  {
    title: 'Event Hours',
    image: Images.SCHEDULE || require('../../assets/icon/schedule.png'),
    backgroundColor: '#FDF6E9',
    borderColor: '#E97D38',
    titleColor: '#E97D38',
  },
];

const InfoComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={infoCards}
        renderItem={({item}) => (
          <InfoCard
            image={item.image}
            title={item.title}
            backgroundColor={item.backgroundColor}
            borderColor={item.borderColor}
            titleColor={item.titleColor}
            style={styles.card}
          />
        )}
        keyExtractor={item => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Matrics.ms(12),
  },
  scrollContent: {
    paddingHorizontal: Matrics.ms(8),
    alignItems: 'center',
  },
  card: {
    marginRight: Matrics.ms(8),
  },
});

export default InfoComponent;
