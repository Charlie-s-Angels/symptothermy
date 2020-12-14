import React from 'react';
import { View, Button, StatusBar, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import I18n from '../../i18n/locales';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => Alert.alert('Button pressed')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Profil</Text>
    </TouchableOpacity>

      <Button
        title={I18n.t('settings.profil')}
        onPress={() => Alert.alert('Button pressed')}
      />
      <Button
        title={I18n.t('settings.notifications')}
        onPress={() => Alert.alert('Button pressed')}
      />
      <Button
        title={I18n.t('settings.connectSensor')}
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor : "#241CC4",
  },
  appButtonText: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    backgroundColor: "#fff",
    width: 200,
    paddingTop: 60,
    paddingBottom: 60,
  }
});
export default SettingsScreen;
