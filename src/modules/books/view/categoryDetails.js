import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container} from '@app/components';
import {selectBookmarks, setBookmark} from '@app/modules/common';
import {Colors, Routes, Images} from '@app/constants';
import {data} from '@app/modules/data';
import {selectBookList} from '../selectors';
import {getStyle} from './styles';

const CategoryDetails = ({navigation, route}) => {
  const styles = getStyle();
  const bookmarks = useSelector(selectBookmarks);
  const bookList = useSelector(selectBookList);
  const dispatch = useDispatch();

  const books = bookList?.filter(e => e.type == route.params.type);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.BookDetailsScreen, item)}>
        <View style={styles.detailContainer}>
          <View style={styles.imageBookContainer}>
            <Image
              source={Images.Book}
              style={styles.image}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={[styles.title, {color: '#000'}]}>{item.title}</Text>
          </View>
          <View style={styles.heartContainer}>
            <Icon
              name={bookmarks?.includes(item.id) ? 'bookmark' : 'bookmark-o'}
              onPress={() => dispatch(setBookmark(item.id))}
              color={Colors.Primary}
              size={30}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.listEmpty}>
        <Image source={Images.Empty} style={{resizeMode:'cover'}} />
      </View>
    );
  };
 
  const listFooterComponent = () => {
    if (books?.length > 20) {
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
        <Appbar.BackAction
          color="white"
          icon={() => <Icon name="left" size={32} />}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title={route.params.title}
          titleStyle={styles.headerTitle}
        />
        <Appbar.Content />
      </Appbar>
      <FlatList
        data={books}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        keyExtractor={item => item.id}
        ListFooterComponent={listFooterComponent}
      />
    </Container>
  );
};

export {CategoryDetails};
