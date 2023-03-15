import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme, Appbar} from 'react-native-paper';

// Screens
import {Container} from '@app/components';
import {selectCategoryList} from '../selectors';
import {getCategoryList} from '../slice';
import {Colors, Routes,Images} from '@app/constants';
import {getStyle} from './styles';

const CategoryList = ({navigation}) => {
  const theme = useTheme();
  const styles = getStyle(theme);
  const category = useSelector(selectCategoryList);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('categoryData--->');
    dispatch(getCategoryList());
  }, []);

  console.log(category);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.CategoryDetails, item)}>
        <View style={styles.categoryContainer}>
          <Image
            source={require('../../../assets/book.png')}
            style={styles.imageCat}
          />
          <View style={styles.contentCatContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const listEmptyComponent = () => {
    return (
      <View style={styles.listEmpty}>
        <Image
            source={Images.Empty}
            style={{resizeMode:'cover'}}
          />
      </View>
    );
  };

  const listFooterComponent = () => {
    if (category?.length > 20) {
      return (
        <View style={styles.listEmpty}>
          <Button
            title={'load more'}
            color={'primary'}
            onPress={() => dispatch(getUserList())}
          />
        </View>
      );
    }
    return null;
  };

  return (
    <Container scrollEnabeld={false}>
      <Appbar style={styles.head}>
        <Appbar.Action
          icon={'menu'}
          size={32}
          color={Colors.White}
          onPress={() => navigation.openDrawer()}
        />
        <Appbar.Content
          title={'Category List'}
          titleStyle={styles.headerTitle}
        />
        <Appbar.Content />
      </Appbar>
      <FlatList
        data={category}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        keyExtractor={item => item.id}
        ListFooterComponent={listFooterComponent}
        numColumns={2}
        horizontal={false}
      />
    </Container>
  );
};

export {CategoryList};
