import React from 'react';
import { View, StyleSheet } from 'react-native';
import config from "../../config";

import Graph from '../../components/Graph' ;
import Button from "../../components/Button";

const MyGraph = () => {

  const startNewCycle = () => {
    console.log("start new cycle");
  };

  return (
    <View style={styles.container}>
      <Graph />
      <Button onPress={() => startNewCycle()} text="graph.newcycle"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.BLUE,
  },
});

export default MyGraph;
