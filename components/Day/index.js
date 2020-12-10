import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Day = ({ hour, day }) => (

	<View style={day==='S'? styles.weekend : styles.week}>
		<Text style={styles.hour}>{hour}</Text>
		<Text style={styles.dayLetter}>{day}</Text>
	</View>
);

const styles = StyleSheet.create({
	week: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#546de5',
		minWidth: 35,
		marginVertical: 8,
		borderWidth: 1,
		borderColor: '#fff',
		height: '50%',
		padding: 5,
	},
	weekend: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#778beb',
		minWidth: 35,
		marginVertical: 8,
		borderWidth: 1,
		borderColor: '#fff',
		height: '50%',
		padding: 5,
	},
	hour: {
		fontSize: 12,
	},
	dayLetter: {
		color: "#3dc1d3"
	}
});

export default Day;
