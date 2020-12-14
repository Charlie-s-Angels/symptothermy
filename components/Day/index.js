import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Day = ({ hour, timestamp, index }) => {
	const date = new Date(timestamp * 1000);

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

	const showDate = () => {
		if (date.getDate() % 5 === 0) {
			return <Text style={[styles.dateStyle, styles.bold]}>{`${date.getDate()}/${date.getMonth() + 1}`}</Text>;
		} else {
			return <Text style={styles.dateStyle}>{index + 1}</Text>;
		}
	};

	return (
		<View style={styles.container}>
			<View style={day()==="S"? [styles.alldays, styles.weekend] : [styles.alldays, styles.week]}>
				<Text style={styles.hour}>{`${date.getUTCHours()}:${date.getMinutes()}`}</Text>
				<Text style={styles.dayStyle}>{day()}</Text>
			</View>
			{showDate()}
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
	dayStyle: {
		textAlign: 'center',
		color: "#3dc1d3"
	},
	dateStyle: {
		textAlign: 'center',
		color: "#000",
	},
	bold: {
		fontWeight: '800',
	}
});

export default Day;
