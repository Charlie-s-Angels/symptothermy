import React from 'react';
import { Text, StyleSheet } from 'react-native';


const DayDate = ({ date, cycleDay }) => {
    if (date.getDate() % 5 === 0) {
        return <Text style={[styles.date, styles.bold]}>{`${date.getDate()}/${date.getMonth() + 1}`}</Text>;
    }
    return <Text style={styles.date}>{cycleDay + 1}</Text>;
};

const styles = StyleSheet.create({
    date: {
      textAlign: 'center',
      color: "#eeeeee",
    },
    bold: {
      fontWeight: '700',
    }
});

export default DayDate;