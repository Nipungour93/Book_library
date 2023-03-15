/**
 * @format
 * Button Component
 */

import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {Input} from './input';

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

const listHeaderComponent = () => {
  return (
    <Input
      placeholder="Search Book Here"
      onChangeText={setSearch}
      value={search}
      search={true}
      containerStyle={{margin: 8, width: '95%'}}
    />
  );
};

const styles = ScaledSheet.create({
  listEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {listHeaderComponent};
