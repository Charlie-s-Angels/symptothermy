import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import I18n from './i18n/locales';
import Graph from './components/Graph';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const listLanguage = [
  {key:'en', label:'en'},
  {key:'fr', label:'fr'},
]


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Graph} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

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
