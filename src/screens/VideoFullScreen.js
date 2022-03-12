import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import VideoPlayer from 'react-native-video-controls';

export default function VideoFullScreen(props) {
  const navigation = props.navigation;

  useEffect(() => {
    Orientation.lockToLandscape();
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        hidden={true}
      />
      <VideoPlayer
        source={{
          uri: 'https://vjs.zencdn.net/v/oceans.mp4',
        }}
        paused={true}
        disableBack={true}
        resizeMode="contain"
        toggleResizeModeOnFullscreen={false}
        onEnterFullscreen={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
