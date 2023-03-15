/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {MainApp} from '@app/main';
// import TrackPlayer from 'react-native-track-player';
import {name as appName} from './app.json';
// import { playbackService } from '@app/modules/books/view/trackPlayerServices';

AppRegistry.registerComponent(appName, () => MainApp);
// TrackPlayer.registerPlaybackService(() => playbackService);
