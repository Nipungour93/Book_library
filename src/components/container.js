/**
 * @format
 * Container Component
 */

import React from 'react';
import {
  ScrollView,
  Platform,
  StatusBar,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScaledSheet} from 'react-native-size-matters';
import {Appbar, useTheme} from 'react-native-paper';

const Container = ({
  containerStyle,
  contentContainerStyle,
  scrollEnabeld = true,
  children,
  showAppBar = false,
  resetAppBarHeight = false,
}) => {
  const theme = useTheme();
  const renderScrollView = () => {
    return (
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          contentContainerStyle,
        ]}>
        {children}
      </ScrollView>
    );
  };
  return (
    <SafeAreaView
      edges={
        Platform.OS === 'ios'
          ? ['bottom', 'left', 'right', 'top']
          : ['bottom', 'left', 'right']
      }
      style={{flex: 1, backgroundColor: theme.colors.primary}}>
      {/* <KeyboardAvoidingView behavior={'padding'}> */}
        <View style={[styles.containerStyle, containerStyle]}>
          {!!showAppBar && <Appbar />}
          {Platform.OS === 'android' && (
            <View style={{height: StatusBar.currentHeight}} />
          )}
          {scrollEnabeld ? renderScrollView() : children}
        </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  appBar: {
    height: '80@ms',
  },
});

export {Container};
