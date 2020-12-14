import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import I18n from './i18n/locales';
import GraphScreen from './components/GraphScreen';
import SettingsScreen from './components/SettingsScreen';
import LearnScreen from './components/LearnScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const listLanguage = [
  {key:'en', label:'en'},
  {key:'fr', label:'fr'},
]


const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Graph">
        <Tab.Screen name="Graph" component={GraphScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Learn" component={LearnScreen} />
      </Tab.Navigator>
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
