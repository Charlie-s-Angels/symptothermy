import React from 'react';
import { View, Button, StatusBar, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import I18n from '../../i18n/locales';
import { FontAwesome } from '@expo/vector-icons';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert('Button pressed')} >
        <Text style={styles.appButtonProfile}>{I18n.t('settings.profil')}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Button pressed')} >
        <Text style={styles.appButtonNotification}>{I18n.t('settings.notifications')}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Button pressed')} >

        <Text style={styles.appButtonSensor}>
          <FontAwesome name="bluetooth-b" size={30} color="black" />
          {I18n.t('settings.connectSensor')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#546de5",
  },
  appButtonProfile: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#fff",
    width: 300,
    marginTop: 25,
    marginBottom: 10,
    paddingTop: 25,
    paddingBottom: 30,
    borderRadius: 10,
  },
  appButtonNotification: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#fff",
    width: 300,
    marginTop: 10,
    marginBottom: 200,
    paddingTop: 25,
    paddingBottom: 30,
    borderRadius: 10,
  },

  appButtonSensor: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#fff",
    width: 300,
    marginTop: 10,
    marginBottom: 25,
    paddingTop: 25,
    paddingBottom: 30,
    borderRadius: 10,
  },

  appButtonContainer: {

  }
});
export default Settings;
