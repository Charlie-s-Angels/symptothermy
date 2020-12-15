import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import I18n from './i18n/locales';
import GraphScreen from './components/GraphScreen';
import Settings from './screens/Settings';
import Learn from './screens/Learn';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const listLanguage = [
  { key: 'en', label: 'en' },
  { key: 'fr', label: 'fr' },
]

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator
        style={styles.Navigator}
        initialRouteName="Graph"
        tabBarOptions={{
          showIcon: true,
        }}>

        <Tab.Screen name="Graph"
          component={GraphScreen}
          options={{
            tabBarLabel: I18n.t('graph.title'),
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bar-chart" size={28} color="black" />
            ),
          }}

        />
        <Tab.Screen name="Settings"
          component={Settings}
          options={{
            tabBarLabel: I18n.t('settings.title'),
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-o" size={28} color="black" />
            ),
          }}
        />
        <Tab.Screen name="Learn"
          component={Learn}
          options={{
            tabBarLabel: I18n.t('learn.title'),
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-book" size={30} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#241CC4",
  },
  Navigator: {
    marginTop: 30,
  }
});


export default App;
