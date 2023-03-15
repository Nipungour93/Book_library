import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {Images} from '@app/constants';

const BookItem = ({book}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: Images.Home}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text>by {book.authors?.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: '10@ms',
  },
  image: {
    flex: 1,
    aspectRatio: 2 / 3,
    marginRight: '10@ms',
  },
  contentContainer: {
    flex: '4@ms',
    borderColor: 'lightgray',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: '16@ms',
    fontWeight: '500',
  },
});

export {BookItem};
