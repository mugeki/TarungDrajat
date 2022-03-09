import React from 'react';
import {View, Text} from 'react-native';
import {withTheme} from 'react-native-paper';
import VideoPlayer from 'react-native-video-player';

function VideoDetailScreen(props) {
  const {colors} = props.theme;
  const {title, category, desc} = props.route.params;
  return (
    <View>
      <VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
      />
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
        <Text style={{color: colors.text}}>{desc}</Text>
      </View>
    </View>
  );
}

export default withTheme(VideoDetailScreen);
