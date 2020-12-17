import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Temp from '../Temperature';
import DayDate from './DayDate';

const Day = ({ temp, timestamp, index }) => {
	const date = new Date(timestamp * 1000);

	const dayLetter = () => {
		switch (date.getDay()) {
			case 0:
				return "S";
			case 1:
				return "M";
			case 2:
				return "T";
			case 3:
				return "W";
			case 4:
				return "T";
			case 5:
				return "F";
			case 6:
				return "S";
			default:
				return "R"; 
		};
	};

	return (
		<View style={styles.container}>
			<View style={dayLetter()==="S"? [styles.alldays, styles.weekend] : [styles.alldays, styles.week]}>
				<Text style={styles.hour}>{`${date.getUTCHours()}:${date.getMinutes()}`}</Text>
				<Text style={styles.day}>{dayLetter()}</Text>
				<Temp temp={temp} />
			</View>
			<DayDate date={date} cycleDay={index}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
		flex: 1,
		height: "60%",
	},
	alldays: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: "90%",
		minWidth: 35,
		borderWidth: 1,
		borderColor: "#fff",
	},
	week: {
		backgroundColor: '#546de5',
	},
	weekend: {
		minHeight: 10,
		backgroundColor: '#778beb',
	},
	hour: {
		fontSize: 12,
		color: "#eeeeee",
		marginVertical: 4,
	},
	day: {
		textAlign: 'center',
		color: "#3dc1d3",
		marginVertical: 4,
	},
});

export default Day;
