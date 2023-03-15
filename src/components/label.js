/**
 * @format
 * Label Component
 */

import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

const Label = ({containerStyle, textStyles, children, ...rest}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={[styles.textStyle, textStyles]} {...rest}>
        {children}
      </Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '600',
    color: '#000',
    width: '100%',
    // fontFamily: 'Poppins-Regular',
  },
});

export {Label};
