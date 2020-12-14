import React from 'react';
import { View, Button, StatusBar, StyleSheet, Alert, } from 'react-native';
import I18n from '../../i18n/locales';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

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
  },
});
export default SettingsScreen;
