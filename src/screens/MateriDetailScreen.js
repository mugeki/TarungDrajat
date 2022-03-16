import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {withTheme} from 'react-native-paper';
import VideoPlayer from 'react-native-video-controls';
import {useDispatch, useSelector} from 'react-redux';
import {setFullscreen} from '../store/FullscreenActions';

function MateriDetailScreen(props) {
  const {colors} = props.theme;
  const fullscreen = useSelector(state => state.fullscreen);
  const dispatch = useDispatch();
  const {title, videoUrl, category, description} = props.route.params;
  // const [fullscreen, setFullScreen] = useState(false);
  const [viewStyle, setViewStyle] = useState({
    width: '100%',
    height: 200,
    alignItems: 'center',
  });

  useEffect(() => {
    Orientation.unlockAllOrientations();
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  useEffect(() => {
    if (fullscreen) {
      Orientation.lockToLandscape();
      setViewStyle({
        width: '100%',
        height: '100%',
      });
    } else {
      Orientation.lockToPortrait();
      setViewStyle({
        width: '100%',
        height: 200,
        alignItems: 'center',
      });
    }
  }, [fullscreen]);

  return (
    <View>
      {!fullscreen ? (
        <StatusBar barStyle="light-content" backgroundColor="#000" />
      ) : (
        <StatusBar
          barStyle="light-content"
          backgroundColor="#000"
          hidden={true}
        />
      )}

      <View style={viewStyle}>
        <VideoPlayer
          source={{
            uri: videoUrl,
          }}
          paused={true}
          disableBack={true}
          resizeMode="contain"
          toggleResizeModeOnFullscreen={false}
          onEnterFullscreen={() => {
            dispatch(setFullscreen(true));
          }}
          onExitFullscreen={() => {
            dispatch(setFullscreen(true));
          }}
        />
      </View>

      {!fullscreen && (
        <View style={{padding: 20}}>
          <Text
            style={{color: colors.primary, fontSize: 16, fontWeight: 'bold'}}>
            {title}
          </Text>
          <Text
            style={{
              color: colors.placeholder,
              paddingVertical: 3,
            }}>
            {category}
          </Text>
          <Text style={{color: colors.text}}>{description}</Text>
        </View>
      )}
    </View>
  );
}

export default withTheme(MateriDetailScreen);
