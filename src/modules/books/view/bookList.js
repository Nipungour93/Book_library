import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme, Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Input} from '@app/components';
import {Colors, Routes, Images} from '@app/constants';
import {selectBookmarks, setBookmark} from '@app/modules/common';
import {getBookList} from '../slice';
import {selectBookList} from '../selectors';
import {getStyle} from './styles';

const BookList = ({navigation, title}) => {
  const [search, setSearch] = useState(null);
  const theme = useTheme();
  const styles = getStyle(theme);
  const bookmarks = useSelector(selectBookmarks);
  const bookList = useSelector(selectBookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookList());
  }, []);

  console.log({bookmarks});

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.BookDetailsScreen, item)}>
        <View style={styles.detailContainer}>
          <View style={styles.imageBookContainer}>
            <Image source={Images.Book} style={styles.image} />
          </View>

          <View style={styles.contentContainer}>
            <Text style={[styles.title, {color: '#000'}]}>{item?.title}</Text>
          </View>
          <View style={styles.heartContainer}>
            <Icon
              name={bookmarks?.includes(item?.id) ? 'bookmark' : 'bookmark-o'}
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
    if (bookList?.length > 20) {
      return (
        <View style={styles.listEmpty}>
          <Button
            title={'load more'}
            color={'primary'}
            onPress={() => dispatch(getBookList())}
          />
        </View>
      );
    }
    return null;
  };

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

  const books = search
    ? bookList.filter(item => {
        return item.title.toLowerCase().includes(search?.toLowerCase());
      })
    : bookList;

  return (
    <Container scrollEnabeld={false}>
      <Appbar style={styles.head}>
        <Appbar.Action
          icon={'menu'}
          size={32}
          color={Colors.White}
          onPress={() => navigation.openDrawer()}
        />
        <Appbar.Content title={'BookList'} titleStyle={styles.headerTitle} />
        <Appbar.Content />
      </Appbar>
      <FlatList
        data={books}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        keyExtractor={item => item?.id}
        ListFooterComponent={listFooterComponent}
        ListHeaderComponent={listHeaderComponent}
      />
    </Container>
  );
};

export {BookList};
