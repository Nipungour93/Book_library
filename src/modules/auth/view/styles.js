/**
 * @format
 * Auth Style
 */

import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from 'react-native-paper/lib/typescript/types';
import {Images, Colors, Routes} from '@app/constants';

export const getStyle = (theme: Theme) => {
  return ScaledSheet.create({
    container: {
      backgroundColor: Colors.Primary,
      height: '250@ms',
      flex: 1,
    },
    containerDetail: {
      flexGrow: 1,
      backgroundColor: Colors.White,
      paddingHorizontal: '30@ms',
      borderTopRightRadius: 60,
      borderTopLeftRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoImage: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 50,
    },
    image: {
      marginTop: '30@ms',
      width: '120@ms',
      height: '120@ms',
      borderRadius: '50@ms',
    },
    forgetHead: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    forgot_button: {
      fontSize: '12@ms',
      fontFamily: 'Poppins',
    },
    forgot_buttonselect: {
      fontSize: '12@ms',
      color: Colors.Primary,
      marginLeft: '10@ms',
    },
    regBtn: {
      marginTop: '30@ms',
    },
    checkboxContainer: {
      flexDirection: 'row',
      width: '100%',
      marginRight: '17@ms',
    },
    labelHead: {
      marginTop: '8@ms',
      fontSize: '12@ms',
      color: theme.colors.black,
    },
    labelText: {
      color: Colors.Primary,
      fontSize: '13@ms',
      fontFamily: 'Poppins',
    },
    already_accountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '10@ms',
    },
    already_accountText: {
      fontSize: '12@ms',
      fontFamily: 'Poppins',
    },
    already_accountLink: {
      fontSize: '12@ms',
      color: theme.colors.primary,
      fontFamily: 'Poppins',
    },
    forgetHead: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    forgot_button: {
      fontSize: '12@ms',
      fontFamily: 'Poppins',
    },
    forgot_buttonselect: {
      fontSize: '12@ms',
      color: Colors.Primary,
      marginLeft: '10@ms',
    },
    head: {
      height: '70@ms',
      backgroundColor: theme.colors.primary,
    },
  });
};
