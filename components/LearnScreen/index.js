import React from 'react';
import { View, Button, StatusBar, StyleSheet, Alert, } from 'react-native';
import I18n from '../../i18n/locales';

const LearnScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Button
        title="Go to graph"
        onPress={() => navigation.navigate('Graph')}
        />
        <Button
        title="Go to settings"
        onPress={() => navigation.navigate('Settings')}
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
export default LearnScreen;
