import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {withTheme} from 'react-native-paper';
import VideoPlayer from 'react-native-video-controls';

function MateriDetailScreen(props) {
  const {colors} = props.theme;
  const {title, videoUrl, category, description} = props.route.params;
  const navigation = props.navigation;

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={{width: '100%', height: 200, alignItems: 'center'}}>
        <VideoPlayer
          source={{
            uri: videoUrl,
          }}
          paused={true}
          disableBack={true}
          resizeMode="contain"
          toggleResizeModeOnFullscreen={false}
          onEnterFullscreen={() => {
            navigation.navigate('VideoFullScreen');
          }}
        />
      </View>

      <View style={{padding: 20}}>
        <Text style={{color: colors.primary, fontSize: 16, fontWeight: 'bold'}}>
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
    </View>
  );
}

export default withTheme(MateriDetailScreen);
