/**
 * @format
 * Home Style
 */

import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from 'react-native-paper/lib/typescript/types';

import {Images, Colors, Routes} from '@app/constants';

export const getStyle = (theme: Theme) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.Black,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: '30@ms',
    },
    containerDetail: {
      flexGrow: 1,
      backgroundColor: Colors.Black,
      paddingHorizontal: '30@ms',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    content: {
      fontSize: '18@ms',
      textAlign: 'center',
      color: 'grey',
    },
    head: {
      height: '70@ms',
      backgroundColor: 'orange',
    },
    headerTitle: {
      fontWeight: 'bold',
      color: Colors.White,
      textAlign: 'center',
      fontSize: '22@ms',
      fontFamily: 'Poppins',
    },
    emptyContainer: {
      alignItems: 'center',
    },
    listHeaderContainer: {
      borderWidth: 2,
      borderTopColor: '#D8D8D8',
      borderBottomColor: '#D8D8D8',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40@ms',
    },
    listHeader: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    seprateList: {
      height: 2,
      backgroundColor: '#D8D8D8',
      marginHorizontal: 7,
    },
    detailContainer: {
      flexDirection: 'row',
      marginVertical: '15@ms',
      marginHorizontal: '15@ms',
    },
    categoryContainer: {
      borderColor: Colors.Primary,
      borderWidth: 5,
      borderRadius: '20@ms',
      margin: '25@ms',
      // padding: '5@ms',
      overflow: 'hidden',
    },
    image: {
      margin: '10@ms',
      width: '25@ms',
      height: '25@ms',
    },
    imageBookContainer:{
      borderRadius:50,
      borderColor:Colors.Primary,
      borderWidth:3
    },
    imageCat: {
      width: '120@ms',
      height: '120@ms',
      resizeMode: 'cover',
    },
   
    imageDetails: {
      width: '170@ms',
      height: '170@ms',
    },
    contentContainer: {
      flex: '4@ms',
      borderColor: 'lightgray',
      borderBottomWidth: 0.5,
      justifyContent: 'center',
      marginHorizontal: '10@ms',
    },
    contentCatContainer: {
      alignItems: 'center',
      paddingVertical: '10@ms',
      fontWeight: 500,
      backgroundColor: Colors.Primary,
    },
    title: {
      fontSize: '18@ms',
      fontWeight: '500',
      color: Colors.White,
    },
    listEmpty: {
      // flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
    },
    heartContainer: {
      justifyContent: 'center',
    },
    detailTitle: {
      fontSize: '25@ms',
      fontWeight: '600',
      color: Colors.White,
      paddingVertical: '20@ms',
    },
    detailDiscription: {
      fontSize: '13@ms',
      fontWeight: '400',
      color: Colors.White,
    },
    containerStyle: {
      flex: 1,
      height: '120@ms',
      width: '100%',
      marginVertical: '15@ms',
      paddingVertical: '10@ms',
    },
    
    textStyle:{
      color: Colors.White,
    },
    customRatingBarStyle: {
      flexDirection: 'row',
      marginVertical: '3@ms',
    },
    starImageStyle: {
      width: 40,
      height: 40,
      resizeMode: 'cover',
    },
    authorContainer: {
      paddingVertical: '10@ms',
    },
    authorImg: {
      width: '30@ms',
      height: '30@ms',
      borderRadius: 50,
    },
    authorHead: {
      color: Colors.White,
      paddingTop: '7@ms',
      paddingHorizontal: '10@ms',
    },
    authorName: {
      color: 'gray',
      paddingHorizontal: '10@ms',
    },
    lineStyle: {
      borderWidth: 0.3,
      borderColor: Colors.White,
      margin: '10@ms',
    },
    chaptersTitle: {
      fontSize: '20@ms',
      fontWeight: '600',
      color: Colors.White,
      paddingVertical: '10@ms',
    },
    chaptersContent: {
      fontSize: '15@ms',
      fontWeight: '400',
      color: Colors.Primary,
    },
    chaptersSubTitle: {
      fontSize: '12@ms',
      fontWeight: '400',
      color: Colors.White,
      paddingVertical: '2@ms',
      paddingHorizontal: '5@ms',
    },
    textStyle: {
      textAlign: 'center',
      fontSize: '17@ms',
      color: Colors.White,
      marginVertical: '7@ms',
      marginHorizontal: '7@ms',
    },
    topTabContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '15@ms',
      paddingVertical: '5@ms',
      margin: '2@ms',
      borderWidth: '1@ms',
      borderColor: Colors.Primary,
      borderRadius: '15@ms',
    },
    activeTabContainer: {
      backgroundColor: Colors.Primary,
    },
    topTabTitle: {
      textAlign: 'center',
      fontSize: '17@ms',
      color: Colors.Primary,
      fontWeight: '600',
    },
    activeTabTitle: {
      color: Colors.White,
    },
    modalContainer: {
      alignItems: 'center',
      height: '150@ms',
      borderRadius: '15@ms',
    },
    imageModal: {
      width: '70@ms',
      height: '70@ms',
    },
    modalContent: {
      fontSize: '16@ms',
      fontWeight: '600',
      color: Colors.Primary,
      paddingVertical: '5@ms',
    },

    trackProgress: {
      marginTop: '40@ms',
      textAlign: 'center',
      fontSize: '24@ms',
      color: '#eee',
    },
    songTitle: {
      fontSize: '32@ms',
      marginTop: '50@ms',
      color: '#ccc',
    },
    artistName: {
      fontSize: '24@ms',
      color: '#888',
    },
  });
};
