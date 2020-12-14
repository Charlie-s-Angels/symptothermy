import React from 'react';
import { View, Button, StatusBar, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import I18n from '../../i18n/locales';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => Alert.alert('Button pressed')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonProfile}>Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => Alert.alert('Button pressed')} style={styles.appButtonContainer}>
          <Text style={styles.appButtonNotification}>Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => Alert.alert('Button pressed')} style={styles.appButtonContainer}>
          <Text style={styles.appButtonSensor}>Connect My Sensor</Text>
      </TouchableOpacity>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor : "#241CC4",
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

  appButtonContainer:{
    
  }
});
export default SettingsScreen;
