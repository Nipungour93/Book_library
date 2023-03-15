/**
 * @format
 * Text Input Component
 */

import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {useTheme} from 'react-native-paper';

const Input = ({
  containerStyle,
  secureTextEntry = false,
  search = false,
  textStyles,
  useRef,
  multiLine = false,
  ...rest
}) => {
  const [isSecure, setIsSecure] = React.useState(false);
  const theme = useTheme();
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <TextInput
        underlineColorAndroid="transparent"
        activeUnderlineColor="transparent"
        selectionColor={theme.colors.primary}
        ref={useRef}
        multiLine={true}
        mode={'flat'}
        style={[styles.textStyle, textStyles]}
        secureTextEntry={secureTextEntry ? !isSecure : isSecure}
        left={
          search && <TextInput.Icon name="search" size={28} color={'red'} />
        }
        right={
          secureTextEntry && (
            <TextInput.Icon
              icon={isSecure ? 'eye' : 'eye-off'}
              onPress={() => setIsSecure(!isSecure)}
            />
          )
        }
        underlineColor={'transparent'}
        {...rest}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  containerStyle: {
    height: '48@ms',
    width: '100%',
    borderColor: '#CECECE',
    borderWidth: '1.5@ms',
    marginBottom: '10@ms',
    borderRadius: '5@ms',
  },
  textStyle: {
    width: '100%',
    height: '46@ms',
    backgroundColor: 'transparent',
  },
});

export {Input};
