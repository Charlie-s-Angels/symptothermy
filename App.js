import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import I18n from './i18n/locales'

const listLanguage = [
  {key:'en', label:'en'},
  {key:'fr', label:'fr'},
]

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{I18n.t('homepage.title')}</Text>
      <Text style={styles.text}>{I18n.t('homepage.welcome')}</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: 'blue',
  },
  text: {
    fontSize: 25,
    color: 'grey',
  }
});

export default App;
