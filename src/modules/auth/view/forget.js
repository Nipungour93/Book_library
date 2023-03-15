/**
 * Forgot Password Screen
 * @format
 */

import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {useTheme, Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import {Input, Button, Label, Container} from '@app/components';
import {Images, Colors} from '@app/constants';
import {forgot} from '../slice';
import {getStyle} from './styles';

function ForgotPasswordScreen({navigation}) {
  const [email, setEmail] = useState('');
  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = getStyle(theme);

  const strongRegex = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );

  const onSubmit = () => {
    dispatch(forgot({email}));
  };

  return (
    <Container>
      <Appbar style={[styles.head, {backgroundColor: '#FFBC13'}]}>
        <Appbar.Header style={{backgroundColor: 'transparent'}}>
          <Appbar.BackAction
            color="white"
            icon={() => <Icon name="left" size={22} />}
            onPress={() => navigation.goBack()}
          />
        </Appbar.Header>
      </Appbar>
      <View style={styles.container}>
        <Image style={styles.image} source={Images.Logo} />
        <Input
          placeholder="Email"
          placeholderTextColor={Colors.Gray}
          onChangeText={email => setEmail(email)}
          keyboardType="email-address"
          returnKeyType="next"
          type="Input"
          blurOnSubmit={true}
        />
        <Button 
        onPress={onSubmit} 
        disabled={!strongRegex.test(email)}>
          {'Submit'}
        </Button>
      </View>
    </Container>
  );
}

export {ForgotPasswordScreen};
