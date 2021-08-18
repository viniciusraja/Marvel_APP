import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import config from '../config';
import MyAppText from './main/MyAppText';
import FastImage from 'react-native-fast-image';
const CARD_WIDTH = config.layout.width - 2 * config.layout.spacing;
const IMAGE_HEIGHT = 350;
const Card = props => {
  const {translateY, item} = props;
  console.log(props.translateY);
  const movie = item;
  return (
    <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: movie.cover_url,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <MyAppText fontSize="title">{movie.title}</MyAppText>
      <MyAppText fontSize="paragraph" ellipsizeMode="tail" numberOfLines={2}>
        {movie.overview}
      </MyAppText>
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    width: CARD_WIDTH,
    height: config.layout.height / 2,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    height: IMAGE_HEIGHT,
  },
  image: {
    borderRadius: 20,
    width: 230,
    height: '100%',
  },
});
