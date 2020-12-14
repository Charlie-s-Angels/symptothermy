import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';

import Day from '../Day';

const current_cycle_values = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    hour: '8h',
    day: 'M'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    hour: '8h',
    day: 'T'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    hour: '8h',
    day: 'W'
  },
  {
    id: '58694a0f-3da1-471f-bd96-drtyufugyhi',
    hour: '8h',
    day: 'T'
  },
  {
    id: '58694a0f-3da1-471f-bd96-kujyhtgerdtcf',
    hour: '8h',
    day: 'F'
  },
  {
    id: '58694a0f-3da1-471f-bd96-lygezjhrbgxdf',
    hour: '8h',
    day: 'S'
  },
  {
    id: '58694a0f-3da1-471f-bd96-hjyfjhgcnjuyf',
    hour: '8h',
    day: 'S'
  },
  {
    id: '58694a0f-3da1-471f-bd96-mlhazekhzedsfgd',
    hour: '8h',
    day: 'M'
  },
  {
    id: '58694a0f-3da1-471f-bd96-eryuyukjnbv',
    hour: '8h',
    day: 'T'
  },
  {
    id: '58694a0f-3da1-471f-bd96-xcfghjhnbvcd',
    hour: '8h',
    day: 'W'
  },
  {
    id: '58694a0f-3da1-471f-bd96-azerfvcdser',
    hour: '8h',
    day: 'T'
  },
  {
    id: '58694a0f-3da1-471f-bd96kliuh',
    hour: '8h',
    day: 'F'
  },

];

const InvertValues = (values) => {
  let inverted_array = [];
  for (let i = 0; i < current_cycle_values.length; i++) {
    inverted_array.splice(0, 0, current_cycle_values[i]);
  };
  console.log(inverted_array);
  return inverted_array;
}

const GraphScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <Day hour={item.hour} day={item.day} />;

  return (
    <SafeAreaView style={styles.container}>

      <FlatList data={InvertValues(current_cycle_values)} renderItem={renderItem} keyExtractor={item => item.id} horizontal inverted />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default GraphScreen;
