import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';

import Day from '../Day';

const current_cycle_values = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		hour: '8h',
		day: 'M',
		timestamp: 1606723200,
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		hour: '8h',
		day: 'T',
		timestamp: 1606809600,
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		hour: '8h',
		day: 'W',
		timestamp: 1606896000,
	},
	{
		id: '58694a0f-3da1-471f-bd96-drtyufugyhi',
		hour: '8h',
		day: 'T',
		timestamp: 1606982400,
	},
	{
		id: '58694a0f-3da1-471f-bd96-kujyhtgerdtcf',
		hour: '8h',
		day: 'F',
		timestamp: 1607068800,
	},
	{
		id: '58694a0f-3da1-471f-bd96-lygezjhrbgxdf',
		hour: '8h',
		day: 'S',
		timestamp: 1607155200,
	},
	{
		id: '58694a0f-3da1-471f-bd96-hjyfjhgcnjuyf',
		hour: '8h',
		day: 'S',
		timestamp: 1607241600,
	},
	{
		id: '58694a0f-3da1-471f-bd96-mlhazekhzedsfgd',
		hour: '8h',
		day: 'M',
		timestamp: 1607328000,
	},
	{
		id: '58694a0f-3da1-471f-bd96-eryuyukjnbv',
		hour: '8h',
		day: 'T',
		timestamp: 1607414400,
	},
	{
		id: '58694a0f-3da1-471f-bd96-xcfghjhnbvcd',
		hour: '8h',
		day: 'W',
		timestamp: 1607500800,
	},
	{
		id: '58694a0f-3da1-471f-bd96-azerfvcdser',
		hour: '8h',
		day: 'T',
		timestamp: 1607587200,
	},
	{
		id: '58694a0f-3da1-471f-bd96kliuh',
		hour: '8h',
		day: 'F',
		timestamp: 1607673600,
	},

];

const invertValues = (values) => {
	let inverted_array = [];
	for (let i = 0; i < current_cycle_values.length; i++) {
		inverted_array.splice(0, 0, current_cycle_values[i]);
	};
	return inverted_array;
}

const GraphScreen = ({ navigation }) => {
	const renderItem = ({ item, index }) => <Day index={index} hour={item.hour} timestamp={item.timestamp}/>;

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
			<FlatList data={invertValues(current_cycle_values)} renderItem={renderItem} keyExtractor={item => item.id} horizontal inverted />
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
