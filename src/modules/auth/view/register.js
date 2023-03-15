/**
 * Register Screen
 * @format
 */

import React, {useState, useRef} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useTheme, Appbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import {Images, Routes} from '@app/constants';
import {Input, Button, Container, Label} from '@app/components';
import {signup} from '../slice';
import {getStyle} from './styles';

function RegisterScreen({navigation, route}) {
  const theme = useTheme();
  const styles = getStyle(theme);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = () => {
    if (!formData?.userName || !formData?.email || !formData?.password) {
      return showMessage({
        message: 'All fields is required!',
        type: 'danger',
      });
    }
    dispatch(signup(formData));
  };
  const allField = Object.values(formData)?.filter(item => item == '');
  return (
    <Container>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 50,
          }}>
          <Image style={styles.image} source={Images.Logo} />
        </View>

        <View style={styles.containerDetail}>
          <Input
            placeholder="Username"
            placeholderTextColor={theme.colors.gray}
            onChangeText={userName => setFormData({...formData, userName})}
            value={formData?.userName}
            onSubmitEditing={() => emailRef.current?.focus()}
          />

          <Input
            placeholder="Email"
            placeholderTextColor={theme.colors.gray}
            onChangeText={email => setFormData({...formData, email})}
            keyboardType="email-address"
            value={formData?.email}
            useRef={emailRef}
          />

          <Input
            placeholder="Password"
            placeholderTextColor={theme.colors.gray}
            secureTextEntry={true}
            onChangeText={password => setFormData({...formData, password})}
            value={formData?.password}
            onSubmitEditing={() => passwordRef.current?.focus()}
            returnKeyType="done"
            blurOnSubmit={true}
          />

          <Button
            containerStyle={styles.regBtn}
            onPress={onSubmit}
            disabled={Boolean(allField?.length ?? 0)}>
            {' '}
            {'Register'}
          </Button>

          <View style={[styles.already_accountContainer, {marginBottom: 30}]}>
            <Label
              textStyles={
                styles.forgot_button
              }>{`Already have account? `}</Label>
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.LoginScreen)}>
              <Label textStyles={styles.forgot_buttonselect}>Login</Label>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
export {RegisterScreen};
