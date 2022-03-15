import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';

function VideoItem(props) {
  const {colors} = props.theme;
  const navigation = props.navigation;
  const {title, thumbUrl, category, description} = props.item;
  return (
    <TouchableOpacity
      style={[styles.container, {borderBottomColor: colors.placeholder}]}
      onPress={() => {
        navigation.navigate('VideoDetail', {...props.item});
      }}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: thumbUrl,
          }}
        />
        <Text
          style={{fontWeight: 'bold', color: colors.primary}}
          numberOfLines={2}>
          {title}
        </Text>
        <Text
          style={{
            color: colors.placeholder,
            paddingVertical: 3,
          }}>
          {category}
        </Text>
        <Text style={{color: colors.text}} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    marginVertical: 20,
    paddingBottom: 10,
  },
  img: {
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default withTheme(VideoItem);
