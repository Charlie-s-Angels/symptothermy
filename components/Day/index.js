import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Temp from '../Temperature';
import DayDate from './DayDate';
import config from '../../config';

const Day = ({ item, index }) => {
	const date = new Date(item.timestamp * 1000);

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
				return "Err"; 
		};
	};

	const isDataRealStyle = () => {
        if (item.isDataReal) {
            return {
				color: config.CURACAO
            };
		}
		return {
			color: config.ORANGE
		}
    };

	return (
		<View style={styles.container}>
			<View style={[styles.alldays, dayLetter()==="S"? styles.weekend : styles.week]}>
				<Text style={styles.hour}>{`${date.getUTCHours()}:${date.getMinutes()}`}</Text>
				<Text style={[styles.day, isDataRealStyle()]}>{dayLetter()}</Text>
				<Temp temp={item.temperature} isDataReal={item.isDataReal} />
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
		borderColor: config.WHITE,
	},
	week: {
		backgroundColor: config.BLUE,
	},
	weekend: {
		minHeight: 10,
		backgroundColor: config.LIGHT_BLUE,
	},
	hour: {
		fontSize: 12,
		color: config.LIGHT_GRAY,
		marginVertical: 4,
		marginHorizontal: 2,
	},
	day: {
		textAlign: 'center',
		marginVertical: 4,
	},
});

export default Day;
