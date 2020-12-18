import React from 'react';
import { View, FlatList, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';

import Day from '../Day';
import useGetData from '../../hooks/useGetData';

const Graph = () => {
  const { isLoading, data, error } = useGetData("temperatures");
  console.log(error);

  const renderItem = ({ item }) => (
    <Day item={item} index={data.indexOf(item)} />
  );

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList 
          data={data}
          renderItem={renderItem} 
          keyExtractor={item => `${item.id}`} 
          horizontal
          initialScrollIndex={data.length - 1}
        />
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
