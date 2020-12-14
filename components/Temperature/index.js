import React from 'react';
import { View, StyleSheet } from 'react-native';


const Temp = ({ temp }) => {
    const tempInPourcentage = mapTemp(temp, 35, 39, 0, 100);
    const tempBackgroundColor = "#3788aaff";

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            bottom: `${tempInPourcentage}%`,
            width: 15,
            height: 15,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#eeeeee",
            backgroundColor: tempBackgroundColor,
        }
    });
    
    return (
        <View style={styles.container}>
        </View>
    )
};

const mapTemp = (temp, in_min, in_max, out_min, out_max) => {
    return Math.round((temp - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
};

export default Temp;