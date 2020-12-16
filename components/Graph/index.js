import React from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';

import config from '../../config';
import Day from '../Day';

const currentCycleData = () => (
  config.FAKE_CYCLE_DATA
);

const Graph = ({ navigation }) => {
  const renderItem = ({ item }) => <Day temp={item.temp} timestamp={item.timestamp} index={currentCycleData().indexOf(item)} />;

  return (
    <View style={styles.container}>
      <FlatList data={currentCycleData()} renderItem={renderItem} keyExtractor={item => item.id} horizontal initialScrollIndex={currentCycleData().length - 1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Graph;
