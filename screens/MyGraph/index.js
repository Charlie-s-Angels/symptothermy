import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import config from "../../config";

import Graph from '../../components/Graph' ;
import Button from "../../components/Button";

const MyGraph = () => {

  const addData = () => {
    console.log("add data")
  };

  return (
    <View style={styles.container}>
      <View style={styles.graph}>
        <Graph />
        <TouchableOpacity
          onLongPress={() => Alert.alert("coucou")}
        >
          <LinearGradient
            colors={[config.WHITE, config.BLUE]}
            style={styles.newCycle}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            location={[0.5]}
          >
              <Text style={styles.newCycleText}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Button onPress={() => addData()} text="graph.addData"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.BLUE,
  },
  graph: {
    flex: 2,
    flexDirection: "row",
  },
  newCycle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: "90%",
		minWidth: 25,
		borderWidth: 1,
		borderColor: config.WHITE,
  },
  newCycleText: {
    color: config.BLUE,
    fontSize: 25,
  },
});

export default MyGraph;
