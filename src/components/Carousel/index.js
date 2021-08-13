import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';
import {fetchMCUMovies} from '../../api/movies';
import { FETCH_LOADING } from '../../api/types';
import config from '../../config';
import colors from '../../config/colors';
import Card from '../Card';

const Carousel = () => {
  const [mcuMovies, status] = fetchMCUMovies();
  function renderCard(item) {
    return <Card {...item}/>;
  }
  if(status==FETCH_LOADING)return <ActivityIndicator size="large" color={config.colors.grey}/>
  return <FlatList data={mcuMovies.data} renderItem={renderCard} />;
};

export default Carousel;

const styles = StyleSheet.create({});
