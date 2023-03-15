import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScaledSheet} from 'react-native-size-matters';

import {Colors, Images, Routes} from '@app/constants';
import {Label, Container} from '@app/components';
import {selectUser} from '@app/modules/common';
import {logout} from '@app/modules/auth';

const Drawer = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Container style={styles.container}>
      <View style={styles.containerDrawer}>
        <Label style={styles.drawerHead}>User Name</Label>
      </View>

      <Pressable
        style={styles.drawerTab}
        onPress={() => navigation.navigate(Routes.BookList)}>
        <Image source={Images.Home} style={styles.iconImage} />
        <Label textStyles={styles.drawerContent}>{'Home'}</Label>
      </Pressable>
      <Pressable style={styles.drawerTab} onPress={() => dispatch(logout())}>
        <Image source={Images.Logout} style={styles.iconImage} />
        <Label textStyles={styles.drawerContent}>{'Logout'}</Label>
      </Pressable>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  containerDrawer: {
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary,
    height: 100,
  },
  drawerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '65@ms',
    paddingLeft: '25@ms',
  },
  drawerHead: {
    color: Colors.White,
    fontSize: '18@ms',
    fontWeight: '400',
  },
  drawerContent: {
    fontSize: '18@ms',
    fontWeight: '400',
    color: '#000',
    paddingLeft: '20@ms',
  },
  iconImage: {
    width: '24@ms',
    height: '24@ms',
    resizeMode: 'contain',
  },
});

export {Drawer};
