import React from 'react';
import { View, StyleSheet } from 'react-native';
import config from '../../config';

const handleIfExtremeTemp = (temp) => {
    if (temp > config.MAX_TEMP) {
        return config.MAX_TEMP;
    } else if (temp < config.MIN_TEMP) {
        return config.MIN_TEMP;
    } else {
        return temp;
    }
};

const mapTemp = (temp, tempMin, tempMax) => (
    Math.round((handleIfExtremeTemp(temp) - tempMin) * 100 / (tempMax - tempMin))
);

const Temp = ({ temp, isDataReal }) => {
    const tempInPourcentage = mapTemp(temp, config.MIN_TEMP, config.MAX_TEMP);
    const tempBackgroundColor = "#3788aaff";
    
    const setTempHeightOnGraph = {
        bottom: `${tempInPourcentage}%`,
    };

    const isDataRealStyle = () => {
        if (isDataReal) {
            return {
                backgroundColor: tempBackgroundColor
            };
        }
        return { 
            borderStyle: "dashed"
        };
    };
    
    return (
        <View style={[styles.container, setTempHeightOnGraph, isDataRealStyle()]}>
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
        borderColor: config.LIGHT_GRAY,
    }
});

export default Temp;