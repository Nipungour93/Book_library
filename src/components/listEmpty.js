/**
 * @format
 * Button Component
 */

import React from 'react';
import {View,Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

// const listEmptyComponent = ({
//   containerStyle,
//   btnStyle,
//   labelStyle,
//   children,
//   ...rest
// }) => {
//   return (
//     <View style={[styles.containerStyle, containerStyle]}>
//       <Btn
//         mode={'contained'}
//         labelStyle={[styles.labelStyle, labelStyle]}
//         style={[styles.btnStyle, btnStyle]}
//         {...rest}>
//         {children}
//       </Btn>
//     </View>
//   );
// };

const listEmptyComponent = () => {
  return (
    <View style={styles.listEmpty}>
      <Text>No data found</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  listEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {listEmptyComponent};
