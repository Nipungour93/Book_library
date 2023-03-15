/**
 * Forgot Password Screen
 * @format
 */

import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import {useTheme, Appbar, Modal, Portal, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import BookMarkIcon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import MusicIcons from 'react-native-vector-icons/AntDesign';
import PreIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {showMessage} from 'react-native-flash-message';
// import TrackPlayer, {
//   useTrackPlayerEvents,
//   usePlaybackState,
//   useProgress,
//   Event,
//   State
// } from 'react-native-track-player';

import {selectBookmarks, setBookmark} from '@app/modules/common';
import {Input, Button, Container} from '@app/components';
import {Images, Colors} from '@app/constants';
import {musiclibrary, rating, data} from '@app/modules/data';
import {getChapterList, getReviewList, ratings} from '../slice';
import {setupPlayer, addTracks} from './trackPlayerServices';
import {
  selectBookList,
  selectChapterList,
  selectReviewList,
} from '../selectors';
import {getStyle} from './styles';

function BookDetailsScreen({navigation, route}) {
  const theme = useTheme();
  const styles = getStyle(theme);
  const [review, setReview] = useState('');
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [selectedMusicIndex, setSelectedMusicIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [timestamp, setTimestamp] = useState(0);
  const [defaultRating, setDefaultRating] = useState(2);
  const [userRating, setUserRating] = useState(0);
  // const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const bookmarks = useSelector(selectBookmarks);
  const bookList = useSelector(selectBookList);
  const chapterList = useSelector(selectChapterList);
  const rating = useSelector(selectReviewList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChapterList());
    dispatch(getReviewList());
  }, []);

  // useEffect(() => {
  //   async function setup() {
  //     let isSetup = await setupPlayer();

  //     const queue = await TrackPlayer.getQueue();
  //     if (isSetup && queue.length <= 0) {
  //       await addTracks();
  //     }

  //     setIsPlayerReady(isSetup);
  //   }

  //   setup();
  // }, []);

  // if (!isPlayerReady) {
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <ActivityIndicator size="large" color="#bbb" />
  //     </SafeAreaView>
  //   );
  // }

  // const Playlist=()=> {
  //   const [queue, setQueue] = useState([]);
  //   const [currentTrack, setCurrentTrack] = useState(0);

  //   async function loadPlaylist() {
  //     const queue = await TrackPlayer.getQueue();
  //     setQueue(queue);
  //   }

  //   useEffect(() => {
  //     loadPlaylist();
  //   }, []);

  //   useTrackPlayerEvents([Event.PlaybackTrackChanged], event => {
  //     if (event.state == State.nextTrack) {
  //       TrackPlayer.getCurrentTrack().then(index => setCurrentTrack(index));
  //     }
  //   });

  //   function PlaylistItem({index, title, isCurrent}) {
  //     function handleItemPress() {
  //       TrackPlayer.skip(index);
  //     }

  //     return (
  //       <TouchableOpacity onPress={handleItemPress}>
  //         <Text
  //           style={{
  //             ...styles.playlistItem,
  //             ...{backgroundColor: isCurrent ? '#666' : 'transparent'},
  //           }}>
  //           {title}
  //         </Text>
  //       </TouchableOpacity>
  //     );
  //   }

  //   return (
  //     <View>
  //       <View style={styles.playlist}>
  //         <FlatList
  //           data={queue}
  //           renderItem={({item, index}) => (
  //             <PlaylistItem
  //               index={index}
  //               title={item.title}
  //               isCurrent={currentTrack == index}
  //             />
  //           )}
  //         />
  //       </View>
  //       <Controls />
  //     </View>
  //   );
  // }

  // const Controls=({onShuffle})=> {
  //   const playerState = usePlaybackState();

  //   async function handlePlayPress() {
  //     if ((await TrackPlayer.getState()) == State.Playing) {
  //       TrackPlayer.pause();
  //     } else {
  //       TrackPlayer.play();
  //     }
  //   }

  //   return (
  //     <View
  //       style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
  //       <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
  //         <PreIcons name={'skip-previous'} color={Colors.Primary} size={25} />
  //       </TouchableOpacity>

  //       <TouchableOpacity onPress={handlePlayPress}>
  //         <MusicIcons
  //           name={playerState == State.Playing ? 'pause' : 'play'}
  //           color={Colors.Primary}
  //           size={25}
  //         />
  //       </TouchableOpacity>

  //       <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
  //         <PreIcons name={'skip-next'} color={Colors.Primary} size={25} />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  // const TrackProgress=()=> {
  //   const { position, duration } = useProgress(200);

  //   function format(seconds) {
  //     let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
  //     let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
  //     return `${mins}:${secs}`;
  //   }

  //   return(
  //     <View>
  //       <Text style={styles.trackProgress}>
  //         { format(position) } / { format(duration) }
  //       </Text>
  //     </View>
  //   );
  // }

  // const Header =()=> {
  //   const [info, setInfo] = useState({});
  //   useEffect(() => {
  //     setTrackInfo();
  //   }, []);

  //   useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
  //     if(event.state == State.nextTrack) {
  //       setTrackInfo();
  //     }
  //   });

  //   const  setTrackInfo= async () => {
  //     const track = await TrackPlayer.getCurrentTrack();
  //     const info = await TrackPlayer.getTrack(track);
  //     setInfo(info);
  //   }
  const onPressPrev = () => {
    if (selectedMusicIndex === 0) {
      return;
    }
    setTimestamp(0);
    setSelectedMusic(
      chapterList[(selectedMusicIndex - 1) % chapterList.length],
    );
    setSelectedMusicIndex(selectedMusicIndex - 1);
  };

  const playOrPause = async () => {
    setIsPlaying(!isPlaying);
  };

  const onPressNext = () => {
    setTimestamp(0);
    setSelectedMusic(
      chapterList[(selectedMusicIndex + 1) % chapterList.length],
    );
    setSelectedMusicIndex(selectedMusicIndex + 1);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.chaptersContent}>{item.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Icons
              name={'clock'}
              color={Colors.Primary}
              size={12}
              style={{paddingVertical: 5}}
            />
            <Text style={styles.chaptersSubTitle}>{item.duration}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', right: 0, top: 10}}
          onPress={showModal}>
          <MusicIcons
            name={isPlaying ? 'play' : 'pause'}
            color={Colors.Primary}
            size={25}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItemRating = ({item, index}) => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.authorContainer}>
            <Image style={styles.authorImg} source={Images.User} />
          </View>
          <View>
            <Text style={styles.authorHead}>{route.params.artist}</Text>
            <Text style={styles.authorName}>{route.params.country}</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              right: 5,
              paddingVertical: 15,
              flexDirection: 'row',
            }}>
            <Text style={styles.chaptersSubTitle}>{item.rating}</Text>
            <Icons name={'star'} color={Colors.Primary} size={18} />
          </View>
        </View>
        <Text style={styles.detailDiscription}>{item.review}</Text>
      </View>
    );
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.listEmpty}>
        <Image source={Images.Empty} style={{resizeMode: 'cover'}} />
      </View>
    );
  };

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'white',
        height: 0.5,
        marginVertical: 5,
      }}
    />
  );

  const listFooterComponent = () => {
    if (data?.length > 20) {
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

  const CustomRatingBar = (onPress, value) => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => onPress(item)}>
              <Icons
                name={item <= value ? 'star' : 'star-outlined'}
                color={Colors.Primary}
                size={22}
                style={{paddingVertical: 5}}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const onSubmit = () => {
    if (!review) {
      return showMessage({
        message: 'Please enter review',
        type: 'danger',
      });
    }
    dispatch(
      ratings({
        review,
        bookId: route?.params?.bookId,
        rating: userRating,
      }),
      setUserRating(0),
    );
  };

  const {artist, country, discription,chapterTitle} = route?.params || {};

  return (
    <Container>
      <Appbar style={[styles.head, {backgroundColor: '#FFBC13'}]}>
        <Appbar.BackAction
          color="white"
          icon={() => <Icon name="left" size={32} />}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title={'BookDetails'} titleStyle={styles.headerTitle} />
      </Appbar>

      <>
        {/*----------------------------------- Book Cover ------------------------------------------- */}
        <View style={{alignItems: 'center'}}>
          <Image style={styles.imageDetails} source={Images.Book} />
        </View>
        {/*----------------------------------- Book Name ------------------------------------------- */}
        <View style={styles.containerDetail}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.detailTitle}>{route.params.title}</Text>
            <BookMarkIcon
              name={
                bookmarks?.includes(route.params.id) ? 'bookmark' : 'bookmark-o'
              }
              onPress={() => dispatch(setBookmark(route.params.id))}
              color={Colors.Primary}
              size={32}
              style={{paddingVertical: 25, paddingHorizontal: 10}}
            />
          </View>
          {/*----------------------------------- Top-TabBar ------------------------------------------- */}
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.topTabContainer,
                activeTab == 1 && styles.activeTabContainer,
              ]}
              onPress={() => setActiveTab(1)}>
              <Text
                style={[
                  styles.topTabTitle,
                  activeTab == 1 && styles.activeTabTitle,
                ]}>
                About Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.topTabContainer,
                activeTab == 2 && styles.activeTabContainer,
              ]}
              onPress={() => setActiveTab(2)}>
              <Text
                style={[
                  styles.topTabTitle,
                  activeTab == 2 && styles.activeTabTitle,
                ]}>
                Chapters
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.topTabContainer,
                activeTab == 3 && styles.activeTabContainer,
              ]}
              onPress={() => setActiveTab(3)}>
              <Text
                style={[
                  styles.topTabTitle,
                  activeTab == 3 && styles.activeTabTitle,
                ]}>
                Rating
              </Text>
            </TouchableOpacity>
          </View>
          {/*----------------------------------- About ------------------------------------------- */}
          {activeTab == 1 && (
            <>
              <View style={styles.lineStyle} />
              <View style={{flexDirection: 'row'}}>
                <View style={styles.authorContainer}>
                  <Image style={styles.authorImg} source={Images.User} />
                </View>

                <View>
                  <Text style={styles.authorHead}>{artist}</Text>
                  <Text style={styles.authorName}>{country}</Text>
                </View>
              </View>
              <View style={styles.lineStyle} />
              <Text style={[styles.chaptersContent, {paddingVertical: 5}]}>
                {'Discription'}
              </Text>
              <Text style={styles.detailDiscription}>{discription}</Text>
              {/* <View style={styles.lineStyle} /> */}
            </>
          )}
          {/*----------------------------------- Chapters ------------------------------------------- */}
          {activeTab == 2 && (
            <Provider>
              <Portal>
                <Modal
                  visible={visible}
                  onDismiss={hideModal}
                  contentContainerStyle={[
                    containerStyle,
                    {backgroundColor: '#36454F'},
                  ]}>
                  <View style={styles.modalContainer}>
                    <View style={{alignItems: 'center'}}>
                      <Image style={styles.imageModal} source={Images.Book} />
                    </View>
                    <View style={styles.lineStyle} />
                    <Text style={styles.modalContent}>{artist}</Text>
                    {/* <TrackProgress/> */}
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity onPress={() => onPressPrev()}>
                        <PreIcons
                          name={'skip-previous'}
                          color={Colors.Primary}
                          size={25}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => playOrPause()}>
                        <MusicIcons
                          name={isPlaying ? 'play' : 'pause'}
                          color={Colors.Primary}
                          size={25}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => onPressNext()}>
                        <PreIcons
                          name={'skip-next'}
                          color={Colors.Primary}
                          size={25}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </Portal>
              <>
                <View style={styles.lineStyle} />
                <FlatList
                  data={chapterList}
                  renderItem={renderItem}
                  ListEmptyComponent={listEmptyComponent}
                  keyExtractor={item => item.id}
                  ListFooterComponent={listFooterComponent}
                  ItemSeparatorComponent={renderSeparator}
                />
              </>
            </Provider>
            // <View>
            //   <Header/>
            //   <TrackProgress/>
            //   <Playlist />g

            // </View>
          )}
          {/*----------------------------------- Rating ------------------------------------------- */}
          {activeTab == 3 && (
            <View>
              <View style={styles.lineStyle} />
              <View style={{flexDirection: 'row'}}>
              {CustomRatingBar(setUserRating, userRating)}
              </View>

              <FlatList
                data={rating}
                renderItem={renderItemRating}
                ListEmptyComponent={listEmptyComponent}
                keyExtractor={item => item.id}
                ListFooterComponent={listFooterComponent}
                ItemSeparatorComponent={renderSeparator}
              />
              <>
                
                <Input
                  placeholder="Type Review Here(Optional)"
                  placeholderTextColor={Colors.White}
                  numberOfLines={10}
                  onChangeText={review => setReview(review)}
                  type="Input"
                  blurOnSubmit={true}
                  value={review}
                  containerStyle={styles.containerStyle}
                  textStyle={styles.textStyle}
                  multiline={true}
                />
                <Button disabled={!review} onPress={onSubmit}>
                  {'Submit'}
                </Button>
              </>
            </View>
          )}
        </View>
      </>
    </Container>
  );
}

export {BookDetailsScreen};
