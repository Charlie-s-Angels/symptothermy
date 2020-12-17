import React from 'react';
import Graph from '../../components/Graph' ;
import { View, StyleSheet } from 'react-native';

const MyGraph = () => {

  return (
    <View style={styles.container}>
      <Graph />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#546de5",
  },
});

export default MyGraph;
