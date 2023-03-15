/**
 * @format
 * App Utils
 */
import {Platform} from 'react-native';


export const isValidEmail = email => {
  const strongRegex = new RegExp(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  );
  return strongRegex.test(email);
};
