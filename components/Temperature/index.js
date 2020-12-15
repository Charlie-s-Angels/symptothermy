import React from 'react';
import { View, StyleSheet } from 'react-native';
import config from '../../config';

const mapTemp = (temp, tempMin, tempMax) => (
    Math.round((temp - tempMin) * 100 / (tempMax - tempMin))
);

const Temp = ({ temp }) => {
    const tempInPourcentage = mapTemp(temp, config.MIN_TEMP, config.MAX_TEMP);
    const tempBackgroundColor = "#3788aaff";
    
    const containerStyle = {
        bottom: `${tempInPourcentage}%`,
        backgroundColor: tempBackgroundColor,
    };
    
    return (
        <View style={[styles.container, containerStyle]}>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 15,
        height: 15,
        marginBottom: -7,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#eeeeee",
    }
});

export default Temp;