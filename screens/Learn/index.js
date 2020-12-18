import React from 'react';
import { View, StatusBar, StyleSheet, Alert } from 'react-native';
import config from "../../config";

import Button from "../../components/Button";


const Learn = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => Alert.alert('Button pressed')}
        text="learn.article"
        specificStyle={styles.specificStyle}
      />

      <Button
        onPress={() => Alert.alert('Button pressed')}
        text="learn.article"
        specificStyle={styles.specificStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.BLUE,
  },
  specificStyle: {
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 80,
    paddingBottom: 80,
  }
});

export default Learn;
