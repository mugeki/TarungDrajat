import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';

function VideoItem(props) {
  const {colors} = props.theme;
  const navigation = props.navigation;
  const {title, category, desc} = props.item;
  return (
    <TouchableOpacity
      style={[styles.container, {borderBottomColor: colors.placeholder}]}
      onPress={() => {
        navigation.navigate('Video', {...props.item});
      }}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: 'https://www.unimed.ac.id/wp-content/uploads/2019/04/Tarung-Derajat.jpg',
          }}
        />
        <Text style={{color: colors.primary, fontWeight: 'bold'}}>{title}</Text>
        <Text
          style={{
            color: colors.placeholder,
            paddingVertical: 3,
          }}>
          {category}
        </Text>
        <Text style={{color: colors.text}} numberOfLines={3}>
          {desc}
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
