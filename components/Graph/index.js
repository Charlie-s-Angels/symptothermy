import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';

//import config from '../../config';
import Day from '../Day';

//const currentCycleData = () => (
//  config.FAKE_CYCLE_DATA
//);

const Graph = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [currentCycleData, setCurrentCycleData] = useState([]);

  useEffect(() => {
    getData()
    .then((result) => setCurrentCycleData(result))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, [];

  const renderItem = ({ item }) => <Day temp={item.temp} timestamp={item.timestamp} index={currentCycleData.indexOf(item)} />;

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList data={currentCycleData} renderItem={renderItem} keyExtractor={item => item.id} horizontal initialScrollIndex={currentCycleData.length - 1} />
      )}
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
