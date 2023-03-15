import React,{useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container} from '@app/components';
import {selectBookmarks, setBookmark} from '@app/modules/common';
import {setBookBookmark} from '../slice';
import {Colors, Routes,Images} from '@app/constants';
import {selectBookList} from '../selectors';
import {data} from '@app/modules/data';
import {getStyle} from './styles';

const BookMark = ({navigation}) => {
  const styles = getStyle();
  const bookmarks = useSelector(selectBookmarks);
  const bookList = useSelector(selectBookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBookBookmark());
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.BookDetailsScreen)}>
        <View style={styles.detailContainer}>
        <View style={styles.imageBookContainer}>
          <Image
            source={require('../../../assets/book.png')}
            style={styles.image}
          /></View>
          <View style={styles.contentContainer}>
            <Text style={[styles.title, {color: '#000'}]}>{item.title}</Text>
          </View>
          <View style={styles.heartContainer}>
            <Icon
              name={'bookmark'}
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
        <Image
            source={Images.Empty}
            style={{resizeMode:'cover'}}
          />
      </View>
    );
  };

  const listFooterComponent = () => {
    if (data?.length > 20) {
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
        <Appbar.Content title={'BookMark'} titleStyle={styles.headerTitle} />
        <Appbar.Content />
      </Appbar>
      <FlatList
        data={bookList?.filter(e => bookmarks?.includes(e.id))}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        keyExtractor={item => item.id}
        ListFooterComponent={listFooterComponent}
      />
    </Container>
  );
};

export {BookMark};
