/**
 * Login Screen
 * @format
 */

import React, {useState, useRef} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useTheme, Appbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

// Screens
import {Input, Button, Container, Label} from '@app/components';
import {Images, Colors, Routes} from '@app/constants';
import {isValidEmail} from '@app/utils';
import {signin} from '../slice';
import {getStyle} from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const styles = getStyle(theme);

  const onSubmit = () => {
    if (!isValidEmail(email)) {
      return showMessage({
        message: 'Email address is not valid!',
        type: 'danger',
      });
    }
    if (!password) {
      return showMessage({
        message: 'Please enter password',
        type: 'danger',
      });
    }
    dispatch(signin({email, password}));
  };

  return (
    <Container>

      <View style={styles.container} >
        <View style={styles.logoImage}>
          <Image style={styles.image} source={Images.Logo} />
        </View>

        <View style={styles.containerDetail}>
          <Input
            placeholder="Email"
            placeholderTextColor={Colors.Gray}
            onChangeText={email => setEmail(email)}
            keyboardType="email-address"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <Input
            useRef={passwordRef}
            placeholder="Password"
            placeholderTextColor={Colors.Gray}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            returnKeyType="done"
            blurOnSubmit={true}
          />
          <Button
            title={'Login'}
            onPress={onSubmit}
            disabled={!email || !password}>
            {'Login'}
          </Button>
          <View style={styles.forgetHead}>
            <Label textStyles={styles.forgot_button}> Forgot Password? </Label>
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.ForgotPasswordScreen)}>
              <Label textStyles={styles.forgot_buttonselect}>Click here</Label>
            </TouchableOpacity>
          </View>

          <View style={[styles.forgetHead, {marginBottom: 30}]}>
            <Label textStyles={styles.forgot_button}>
              {' '}
              Don't have account?{' '}
            </Label>
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.RegisterScreen)}>
              <Label textStyles={styles.forgot_buttonselect}>Sign up</Label>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  
     </Container>
  );
};
export {LoginScreen};
