import React from 'react';
import { View, StatusBar, StyleSheet, Alert } from 'react-native';
import config from '../../config';

import Button from "../../components/Button";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Button
          onPress={() => Alert.alert('Button pressed')}
          text="settings.profil"
        />

        <Button
          onPress={() => Alert.alert('Button pressed')}
          text="settings.notifications"
        />
      </View>
      <View style={styles.flex}>
        <Button
            onPress={() => Alert.alert('Button pressed')}
            text="settings.connectSensor"
            icon="bluetooth-b"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: config.BLUE,
  },
  flex: {
    flex: 1
  },
});
export default Settings;
