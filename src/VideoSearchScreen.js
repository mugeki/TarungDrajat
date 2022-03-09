import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {
  IconButton,
  Menu,
  RadioButton,
  Searchbar,
  withTheme,
} from 'react-native-paper';
import VideoItem from './VideoItem';
import data from './mock_video.json';

function VideoSearchScreen(props) {
  const {colors} = props.theme;
  const [visible, setVisible] = React.useState(false);
  const [radio, setRadio] = React.useState('first');
  return (
    <View style={{paddingVertical: 20}}>
      <View style={styles.containerTool}>
        <Searchbar
          placeholder="Cari materi"
          style={{height: '100%', width: '90%'}}
          inputStyle={{fontSize: 16}}
        />
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <IconButton
              icon="filter"
              size={20}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 5,
                height: '100%',
                width: '100%',
              }}
              color="#FFFFFF"
              onPress={() => setVisible(true)}
            />
          }>
          <RadioButton.Group
            onValueChange={radio => setRadio(radio)}
            value={radio}>
            <RadioButton.Item
              label="Latihan Teknik Dasar Tarung Derajat"
              labelStyle={{fontSize: 14}}
              style={{height: 40}}
              value="first"
              color={colors.primary}
              position="leading"
            />
            <RadioButton.Item
              label="Latihan Kondisi Fisik Tarung Derajat"
              labelStyle={{fontSize: 14}}
              style={{height: 40}}
              value="second"
              color={colors.primary}
              position="leading"
            />
          </RadioButton.Group>
        </Menu>
      </View>
      <FlatList
        style={styles.containerContent}
        data={data.videos}
        renderItem={item => (
          <VideoItem {...item} navigation={props.navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerTool: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  containerContent: {
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    width: 170,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  buttonGroup: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default withTheme(VideoSearchScreen);
