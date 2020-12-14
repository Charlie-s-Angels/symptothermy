import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';

import Day from '../Day';

const current_cycle_values = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		temp: "36.5",
		timestamp: 1606723200,
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		temp: "36.5",
		timestamp: 1606811400,
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		temp: "36.5",
		timestamp: 1606897800,
	},
	{
		id: '58694a0f-3da1-471f-bd96-drtyufugyhi',
		temp: "36.5",
		timestamp: 1606984200,
	},
	{
		id: '58694a0f-3da1-471f-bd96-kujyhtgerdtcf',
		temp: "36.5",
		timestamp: 1607070600,
	},
	{
		id: '58694a0f-3da1-471f-bd96-lygezjhrbgxdf',
		temp: "36.5",
		timestamp: 1607166780,
	},
	{
		id: '58694a0f-3da1-471f-bd96-hjyfjhgcnjuyf',
		temp: "36.5",
		timestamp: 1607254140,
	},
	{
		id: '58694a0f-3da1-471f-bd96-mlhazekhzedsfgd',
		temp: "36.5",
		timestamp: 1607328000,
	},
	{
		id: '58694a0f-3da1-471f-bd96-eryuyukjnbv',
		temp: "36.5",
		timestamp: 1607414400,
	},
	{
		id: '58694a0f-3da1-471f-bd96-xcfghjhnbvcd',
		temp: "36.5",
		timestamp: 1607500800,
	},
	{
		id: '58694a0f-3da1-471f-bd96-azerfvcdser',
		temp: "36.5",
		timestamp: 1607587200,
	},
	{
		id: '58694a0f-3da1-471f-bd96kliuh',
		temp: "36.5",
		timestamp: 1607673600,
	},
	{
		id: '58694a0f-3da1-471f-regfdxhydtredghftjyutr',
		temp: "36.5",
		timestamp: 1607760000,
	},
];

const GraphScreen = ({ navigation }) => {
	const renderItem = ({ item }) => <Day hour={item.hour} timestamp={item.timestamp} index={current_cycle_values.indexOf(item)}/>;

	return (
		<SafeAreaView style={styles.container}>
			<Button
				title="Go to Settings"
				onPress={() => navigation.navigate('Settings')}
			/>
			<Button
				title="Go to Learn"
				onPress={() => navigation.navigate('Learn')}
			/>
			<FlatList data={current_cycle_values} renderItem={renderItem} keyExtractor={item => item.id} horizontal initialScrollIndex={current_cycle_values.length - 1} />
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
