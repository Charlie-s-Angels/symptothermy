import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Day = ({ hour, timestamp }) => {
	const date = new Date(timestamp * 1000);
	const formatedDate = date.getDate() + '/' + date.getMonth();

	const day = () => {
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
			<View style={day()==="S"? [styles.alldays, styles.weekend] : [styles.alldays, styles.week]}>
				<Text style={styles.hour}>{hour}</Text>
				<Text style={styles.dateStyle}>{day()}</Text>
			</View>
			<Text style={styles.dateStyle}>{formatedDate}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
		height: "60%",
	},
	alldays: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: "90%",
		minWidth: 35,
		padding: 4,
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
	},
	dateStyle: {
		textAlign: 'center',
		color: "#3dc1d3"
	},
});

export default Day;
