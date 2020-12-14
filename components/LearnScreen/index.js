import React from 'react';
import { View, StatusBar, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import I18n from '../../i18n/locales';

const LearnScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert('Button pressed')} >
        <Text style={styles.appButtonArticle}>Article 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Button pressed')} >
        <Text style={styles.appButtonArticle}>Article 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#241CC4",
  },

  appButtonArticle: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#fff",
    width: 300,
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 80,
    paddingBottom: 80,
    borderRadius: 10,
  },

});
export default LearnScreen;
