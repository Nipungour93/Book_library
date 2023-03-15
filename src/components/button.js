/**
 * @format
 * Button Component
 */


import { Colors } from '@app/constants';
import React from 'react';
import {View} from 'react-native';
import {Button as Btn} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

const Button = ({containerStyle, btnStyle, labelStyle, children, ...rest}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Btn
        mode={'contained'}
        labelStyle={[styles.labelStyle, labelStyle]}
        style={[styles.btnStyle, btnStyle]}
        {...rest}>
        {children}
      </Btn>
    </View>
  );
};

const styles = ScaledSheet.create({
  containerStyle: {
    maxHeight: '48@ms',
    width: '100%',
    marginBottom: '10@ms',
    alignItems:'center',
    justifyContent:'center',
    height:'48@ms',

  },
  btnStyle: {
    width: '100%',
    height: '48@ms',
    backgroundColor:Colors.Primary
  },
  labelStyle: {
    textTransform: 'none',
    fontSize:'16@ms',
    fontFamily:'Poppins',
    fontWeight:'600',
    paddingTop:'3@ms'
  },
});

export {Button};
