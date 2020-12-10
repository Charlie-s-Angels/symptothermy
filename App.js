import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import I18n from './i18n/locales';
import Graph from './components/Graph';


const listLanguage = [
  {key:'en', label:'en'},
  {key:'fr', label:'fr'},
]



const App = () => {
  return (
    <View style={styles.container}>
      <Graph />
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
